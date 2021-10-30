import React from 'react';
import { useDispatch } from 'react-redux';
import WalletConnectService from '../../services/accounts/WalletConnectService';
import { clearAccount, importAccount } from '../../actions/accountAction';
import { WALLET_TYPE } from '../../configs/constants';
import { modalService } from '../../components/Commons/Modals/ModalListener';
import { fromNetworkIdToName, getWalletParams } from '../../utils/helpers';
import { setGlobalModal } from '../../actions/globalAction';
import ENV from '../../configs/env';

export default function WalletConnectAccount(props: any) {
  const dispatch = useDispatch();

  async function connect() {
    try {
      const props = getWalletParams();
      const wallet = new WalletConnectService(props);
      await wallet.initiateWallet();
      const address = await wallet.connect(openConnectErrorModal, openNetworkErrorModal);
      if (address) {
        wallet.getDisconnected(
          () => dispatch(clearAccount()),
          (address: string, wallet: any, walletType: string) => dispatch(importAccount(address, wallet, walletType)),
          wallet
        );
        dispatch(importAccount(address, wallet, WALLET_TYPE.WALLET_CONNECT));
        modalService.close();
      }
    } catch (e) {
      console.log(e)
    }

    dispatch(setGlobalModal('loading'));
  }

  function openConnectErrorModal() {
    dispatch(setGlobalModal('error', {
      active: true,
      data: <div>Cannot connect to your Wallet.</div>
    }));
  }

  function openNetworkErrorModal(currentNetworkId: number) {
    dispatch(setGlobalModal('error', {
      active: true,
      data: (
        <div className="text-center">
          <p className="mb-2">Your wallet should be on <b>{fromNetworkIdToName(ENV.NETWORK_ID)}</b>.</p>
          <p>Currently it is on <b>{fromNetworkIdToName(currentNetworkId)}</b>.</p>
        </div>
      )
    }));
  }

  return (
    <div className={`account__item ${props.className}`} onClick={connect}>
      <div className="account__icon wallet-connect"/>
      <div className="account__name">Connect</div>
    </div>
  )
};
