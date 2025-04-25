import React from 'react';
import { WalletIcon } from '@heroicons/react/24/outline';

const WalletConnector = ({ isConnected, address, onConnect, onDisconnect }) => {
  return (
    <div>
      {isConnected && (
        <div className="mt-2 flex items-center">
          <WalletIcon className="h-4 w-4 text-green-400 mr-2" />
          <span className="text-sm text-green-400">
            {`${address.substring(0, 6)}...${address.substring(address.length - 4)}`}
          </span>
        </div>
      )}
      
      <button
        onClick={isConnected ? onDisconnect : onConnect}
        className={`flex items-center px-4 py-2 rounded-lg transition-all ${
          isConnected 
            ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <WalletIcon className="w-5 h-5 mr-2" />
        {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default WalletConnector;