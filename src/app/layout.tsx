import type { Metadata } from "next";
import React, { ReactNode, Suspense } from 'react';
import { Inter } from "next/font/google";
import { NextFont } from 'next/dist/compiled/@next/font';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/app/component/layout/footer';
import { NavigationBar } from "@/app/component/layout/navbar";
import ToastProvider from "@/utils/Toast/ToastProvider";
import { Providers } from "@/utils/provider";
import 'react-toastify/dist/ReactToastify.css';
import "@/app/style/globals.css";


const inter: NextFont = Inter({subsets: ['latin']});
const site_name: string = 'Home Page';
const site_description: string = '@masaki_0218のプロフィールページ';
const twitter_id: string = '@masaki_0218';
const url: string = 'https://plofile.vercel.app/';
const image: string = `${url}/public_image.png`;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
    title: {
        default: `${site_name}`,
        template: `%s | ${site_name}`,
    },
    description: site_description,
    keywords: ['aoki', 'profile', '青木', '雅季'],
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        title: site_name,
        description: site_description,
        siteName: site_name,
        url: url,
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Profile Image',
        },
    },
    twitter: {
        title: `${site_name}`,
        description: site_description,
        card: 'summary_large_image',
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Profile Image',
        },
        creator: twitter_id,
    },
    metadataBase: new URL(url ?? 'http://localhost:3001'),
};

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang='ja'>
            <body className={inter.className}>
                <ToastProvider>
                    {gaId && <GoogleAnalytics gaId={gaId} />}
                    <Analytics />
                    <SpeedInsights />
                    <Suspense>
                        <Providers>
                            <div className='flex h-screen flex-col'>
                                <NavigationBar />
                                <div className='mb-auto'>{children}</div>
                                <Footer/>
                            </div>
                        </Providers>
                    </Suspense>
                </ToastProvider>
            </body>
        </html>
    );
}
