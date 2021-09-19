import { WALLET_TYPE } from "../../configs/constants";
import MetamaskService from "./MetamaskService";

export default class DappService extends MetamaskService {
  subscribeToDisconnect = () => {
    return false
  };

  getWalletType = () => {
    return WALLET_TYPE.DAPP;
  }
}