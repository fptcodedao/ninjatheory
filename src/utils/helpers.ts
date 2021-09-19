import Web3 from 'web3';
import { WALLET_TYPE } from '../configs/constants';
import ENV from '../configs/env';
import DappService from '../services/accounts/DappService';
import MetamaskService from '../services/accounts/MetamaskService';
import WalletConnectService from '../services/accounts/WalletConnectService';

declare global {
  interface Window {
    ethereum: any;
  }
}

export function fromNetworkIdToName(networkId: number) {
  let networkName = "Unknown Network";

  if (networkId === 1) {
    networkName = "Ethereum";
  } else if (networkId === 3) {
    networkName = "Ropsten";
  } else if (networkId === 4) {
    networkName = "Rinkeby";
  } else if (networkId === 5) {
    networkName = "Goerli Test";
  } else if (networkId === 42) {
    networkName = "Kovan";
  } else if (networkId === 97) {
    networkName = "BSC testnet";
  } else if (networkId === 56) {
    networkName = "Binance Smart Chain";
  }

  return networkName;
}
export function getWalletParams(address?: string) {
  return {
    nodeUrl: ENV.NODE.URL,
    nodeTimeout: ENV.NODE.CONNECTION_TIMEOUT,
    networkId: ENV.NETWORK_ID,
    chainName: ENV.CHAIN_NAME,
    address: address,
  };
}

export function getWalletByType(address: string, type: string) {
  let wallet = null;
  const props = getWalletParams(address);

  if (type === WALLET_TYPE.METAMASK) {
    wallet = new MetamaskService(props);
  } else if (type === WALLET_TYPE.WALLET_CONNECT) {
    wallet = new WalletConnectService(props);
  } else if (type === WALLET_TYPE.DAPP) {
    wallet = new DappService(props);
  }

  return wallet;
}

export function initiateWeb3Object(isMetamask = false) {
  let web3;
  const ethereum = window.ethereum;

  if (ethereum && (isMetamask || +ethereum.networkVersion === ENV.NETWORK_ID)) {
    web3 = new Web3(ethereum as any);
  } else {
    const provider = new Web3.providers.HttpProvider(ENV.NODE.URL);
    web3 = new Web3(provider);
  }

  return { web3, ethereum };
}