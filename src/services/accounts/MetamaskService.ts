import { WALLET_TYPE } from "../../configs/constants";
import { initiateWeb3Object } from "../../utils/helpers";
import BaseWalletService from "./BaseWalletService";

export default class MetamaskService extends BaseWalletService {
  constructor(props?: any) {
    super(props);

    const { web3, ethereum } = initiateWeb3Object(true);

    this.ethereum = ethereum;
    this.web3 = web3;
  }

  subscribeToDisconnect = (clearAccount: any, importAccount: any, wallet: any) => {
    this.getDisconnected(clearAccount, importAccount, wallet);
  };

  getWalletType = () => {
    return WALLET_TYPE.METAMASK;
  }
}