import Web3 from "web3";
import ENV from "../../configs/env";
import { fromNetworkIdToName } from "../../utils/helpers";
const HelloContractAbi = require('../../contracts/ZBL.json');

export default class BaseWalletService {
  ethereum: any
  address: string | null
  nodeUrl: string
  networkId: number
  chainName: string
  web3: any
  needTobeInitiated: any

  constructor(props: any) {
    this.ethereum = null;
    this.address = props?.address;
    this.nodeUrl = props?.nodeUrl;
    this.networkId = props?.networkId;
    this.chainName = props?.chainName;
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.nodeUrl));
  }

  connect = async (onEthereumError: any = null, onNetworkError: any = null) => {
    if (!this.web3 && !this.ethereum) {
      this._returnEthereumError(onEthereumError, 'Error: Your session is expired');
      return false;
    }

    const currentNetworkId = await this._getCurrentNetworkId();

    if (!currentNetworkId) {
      this._returnEthereumError(onEthereumError, 'Error: Cannot find current network ID');
      return false;
    } else if (currentNetworkId !== this.networkId) {
      if (typeof onNetworkError === 'function') onNetworkError(currentNetworkId);
      return false
    }

    this.address = await this._requestAccounts();

    if (!this.address) {
      this._returnEthereumError(onEthereumError, 'Error: Cannot find any available addresses');
      return false;
    }

    return this.address.toLowerCase();
  };

  getWeb3 = () => {
    return this.web3;
  }

  getDisconnected = (clearAccount?: any, importAccount?: any, wallet?: any) => {
    this._throwErrorOnNetworkError(clearAccount);

    this.ethereum.on('accountsChanged', async (accounts: any) => {
      if (accounts.length === 0) {
        clearAccount();
        localStorage.clear();
        return;
      }

      if (accounts[0] === this.address) return;

      this.address = await this._requestAccounts();

      if (wallet) {
        wallet.address = this.address;
        importAccount(this.address, wallet, wallet.getWalletType());
      }
    });

    this.ethereum.on('chainChanged', (networkId: any) => {
      if (+networkId === this.networkId) return;
      clearAccount();
      localStorage.clear();
    });

    this.ethereum.on("disconnect", () => {
      clearAccount();
      localStorage.clear();
    });
  };

  // makeTransaction = async (txObject: any): Promise<string> => {
  //   try {
  //     await this._throwErrorOnNetworkError(null);
  //     return await this.sendTransaction(txObject);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // };

  sendTransaction = (txObject: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      this.web3.eth.sendTransaction(txObject, function (err: any, txHash: string) {
        if (!err) {
          resolve(txHash);
        } else {
          let errorMessage = err.message;

          if (err.code === -32602) {
            errorMessage = 'Your current address is different from your previously imported one. Please re-import your address to make the transaction.';
          } else if (err.code === 4100) {
            errorMessage = 'You are not authorized to interact with this address. Please re-import your address to make the transaction.';
          }

          reject(errorMessage);
        }
      })
    })
  };

  claimAirdrop = () => {
    const contractService = new this.web3.eth.Contract(HelloContractAbi, ENV.CONTRACT.TOKEN);
    return contractService.methods.claimAirdrop().send({
      from: this.address,
    })
  };

  presaleToken = (valueBnb: any) => {
    const contractService = new this.web3.eth.Contract(HelloContractAbi, ENV.CONTRACT.TOKEN);
    return contractService.methods.tokenSale().send({
      from: this.address,
      value: valueBnb
    })
  };

  signTransaction = (txObject: any, privateKey: string) => {
    return new Promise((resolve, reject) => {
      this.web3.eth.accounts.signTransaction(txObject, privateKey, function (err: any, signedTxObj: any) {
        if (!err) {
          resolve(signedTxObj);
        } else {
          reject(err.message);
        }
      })
    })
  };

  signMessage = async (message: string, address?: string, password?: string): Promise<string> => {
    address = address ? address : this.address ? this.address : '';

    try {
      if (!address) return '';
      return this.web3.eth.personal.sign(message, address, password);
    } catch (e) {
      console.log(e);
      return '';
    }
  }

  sendSignedTransaction = (rawTx: string) => {
    return new Promise((resolve, reject) => {
      this.web3.eth.sendSignedTransaction(rawTx, function (err: any, txHash: string) {
        if (!err) {
          resolve(txHash);
        } else {
          reject(err.message);
        }
      })
    })
  };

  _throwErrorOnNetworkError = async (actionOnError?: any) => {
    const currentNetworkId = await this._getCurrentNetworkId();
    if (!currentNetworkId || +currentNetworkId !== this.networkId) {
      if (actionOnError) {
        actionOnError();
      } else {
        throw Error(`Please make sure your network is on ${fromNetworkIdToName(this.networkId)}`);
      }
    }
  }

  _getCurrentNetworkId = async () => {
    let currentNetworkId;

    if (this.web3) {
      currentNetworkId = await this.web3.eth.net.getId();
    } else {
      currentNetworkId = this.ethereum.networkVersion;
    }

    return currentNetworkId;
  };

  _requestAccounts = async () => {
    let accounts;

    try {
      if (this.ethereum) {
        accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
      }
    } catch (e) {
      console.log(e);
    }

    if (!accounts || accounts.length === 0) {
      accounts = await this.web3.eth.getAccounts();
    }

    const legacyAccount = accounts ? accounts[0] : null;
    const newAccount = accounts.result ? accounts.result[0] : null;

    return legacyAccount ? legacyAccount : newAccount;
  };

  _returnEthereumError = (onEthereumError: any, message: string) => {
    if (typeof onEthereumError === 'function') onEthereumError(message);
  }
}
