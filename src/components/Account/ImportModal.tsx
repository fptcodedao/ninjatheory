import React from 'react';
import MetamaskAccount from './MetamaskAccount';
import BasicModalContent from '../Commons/Modals/BasicModalContent';
import WalletConnectAccount from './WalletConnectAccount';
import ENV from '../../configs/env';

export default function ImportModal() {
  return (
    <BasicModalContent
      customTitle="Import your Wallet"
      noPanel={true}
      content={(
        <div className="account">
          <MetamaskAccount
            nodeUrl={ENV.NODE.URL}
            networkId={ENV.NETWORK_ID}
            chainName={ENV.CHAIN_NAME}
          />
          <WalletConnectAccount />
        </div>
      )}
    />
  )
}
