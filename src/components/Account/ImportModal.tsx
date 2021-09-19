import React from 'react';
import MetamaskAccount from './MetamaskAccount';
import BasicModalContent from '../Commons/Modals/BasicModalContent';
import WalletConnectAccount from './WalletConnectAccount';

export default function ImportModal() {
  return (
    <BasicModalContent
      customTitle="Import your Wallet"
      noPanel={true}
      content={(
        <div className="account">
          <MetamaskAccount />
          <WalletConnectAccount />
        </div>
      )}
    />
  )
}
