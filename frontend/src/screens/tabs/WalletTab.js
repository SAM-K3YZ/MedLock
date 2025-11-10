// Wrapper for the Wallet tab. Re-export or add small wrappers specific to tab.
import React from 'react';
import WalletScreen from '../WalletScreen';

export default function WalletTab(props) {
  return <WalletScreen {...props} />;
}
