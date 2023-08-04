import { Container } from '@/components/container';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import './globals.css';
import type { Metadata } from 'next';
import Head from './head';


export const metadata: Metadata = {
  title: 'Saad Sifar Portfolio | CS @ NYU',
  description: "Hey there! I'm a Computer Science student at NYU.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body className="w-[100vw] overflow-x-hidden">
        <div>
          <Header />
            <main className="bg-page-gradient pt-navigation-height">
              {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
