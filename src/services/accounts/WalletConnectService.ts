import Web3 from "web3";
import { WALLET_TYPE } from "../../configs/constants";
import BaseWalletService from "../../services/accounts/BaseWalletService";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ENV from "../../configs/env";

export default class WalletConnectService extends BaseWalletService {
  walletConnector: any

  constructor(props?: any) {
    super(props);
    this.needTobeInitiated = true;
  }

  initiateWallet = async () => {
    this.walletConnector = new WalletConnectProvider({
      rpc: {
        [ENV.NETWORK_ID]: ENV.NODE.URL,
      },
      chainId: ENV.NETWORK_ID
    });

    await this.walletConnector.enable();

    this.ethereum = this.walletConnector;
    this.web3 = new Web3(this.walletConnector);
  }

  getWalletType = () => {
    return WALLET_TYPE.WALLET_CONNECT;
  }
}