import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Livepeerprovider } from './LivepeerProvider'
import Link from 'next/link'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Livepeer Studio',
  description: 'Go Live with Livepeer Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Livepeerprovider>
          <nav className='p-4 px-20 border-b flex items-center'>
            <Link href="/">
              <Image
                width={15}
                height={15}
                alt='Livepeer Logo'
                src="/livepeer.svg" className='cursor-pointer' />
            </Link>
            <Link href="/">
              <p className='cursor-pointer ml-4'>
                Home
              </p>
            </Link>
            <Link href="https://docs.livepeer.org/developers/introduction" target='_blank'>
              <p className='cursor-pointer ml-6'>
                Livepeer Docs
              </p>
            </Link>
            <Link href="https://livepeer.studio" target='_blank'>
              <p className='cursor-pointer ml-6'>
                Livepeer Studio
              </p>
            </Link>
            <Link
              href="https://github.com/livepeer/awesome-livepeer"
              target='_blank'>
              <p className='cursor-pointer ml-6'>
                Awesome Livepeer
              </p>
            </Link>
          </nav>
          {children}
        </Livepeerprovider>
      </body>
    </html>
  )
}
