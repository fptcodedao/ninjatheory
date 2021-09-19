import React from 'react';
import { useDispatch } from "react-redux";
import MetamaskService from '../../services/accounts/MetamaskService';
import ENV from '../../configs/env';
import { clearAccount, importAccount } from '../../actions/accountAction';
import { WALLET_TYPE } from '../../configs/constants';
import { fromNetworkIdToName, getWalletParams } from '../../utils/helpers';
import { modalService } from '../Commons/Modals/ModalListener';
import { setGlobalModal } from '../../actions/globalAction';
import './scss/ImportModal.scss';

export default function MetamaskAccount(props: any) {
  const dispatch = useDispatch();

  async function connect() {
    dispatch(setGlobalModal('loading', { active: true }));

    const props = getWalletParams();
    const wallet = new MetamaskService(props);
    const address = await wallet.connect(openConnectErrorModal, openNetworkErrorModal);

    if (address) {
      wallet.getDisconnected(
        () => dispatch(clearAccount()),
        (address: string, wallet: any, walletType: string) => dispatch(importAccount(address, wallet, walletType)),
        wallet
      );
      dispatch(importAccount(address, wallet, WALLET_TYPE.METAMASK));
      modalService.close();
    }

    dispatch(setGlobalModal('loading'));
  }

  function openConnectErrorModal() {
    dispatch(setGlobalModal('error', {
      active: true,
      data: <div>Cannot connect to Metamask. Please make sure you have Metamask installed.</div>
    }));
  }

  function openNetworkErrorModal(currentNetworkId: number) {
    dispatch(setGlobalModal('error', {
      active: true,
      data: (
        <div className="text-center">
          <p className="mb-2">Your Metamask should be on <b>{fromNetworkIdToName(ENV.NETWORK_ID)}</b>.</p>
          <p>Currently it is on <b>{fromNetworkIdToName(currentNetworkId)}</b>.</p>
        </div>
      )
    }));
  }

  return (
    <div className={`account__item ${props.className}`} onClick={connect}>
      <div className="account__icon metamask"/>
      <div className="account__name">Metamask</div>
    </div>
  )
};
