import { useContext } from 'react';

import { StreamDaoProtocolContext } from '../context/streamdaoprotocol';

export function useStreamDaoProtocol() {
  const context = useContext(OnesolProtocolContext)

  if (!context) {
    throw new Error(
      'useStreamDaoProtocol must be used within a StreamDaoProtocolProvider'
    )
  }

  return context
}