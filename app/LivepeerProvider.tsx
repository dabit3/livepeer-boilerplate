'use client'

import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY || '' })
})

export function Livepeerprovider({ children }: { children: React.ReactNode}) {
  return (
    <LivepeerConfig client={client}>
      {children}
    </LivepeerConfig>
  )
}