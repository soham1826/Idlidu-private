import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToastProvider';

import getCurrentUser from './actions/getCurrentUser';

import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import ClientOnly from './components/ClientOnly';


const font=  Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Idlidu',
  description: 'Find artist easliy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProvider/>
        <RentModal/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser={currentUser}/>
        <div className="pb-20 pt-28">{children}</div>
        </ClientOnly>
        
      </body>
    </html>
  )
}
