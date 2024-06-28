import type { Metadata } from "next";
import React, { ReactNode, Suspense } from 'react';
import { Inter } from "next/font/google";
import { NextFont } from 'next/dist/compiled/@next/font';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/app/component/layout/footer'
import { Providers } from "@/app/provider";
import "@/app/style/globals.css";
import { NavigationBar } from "@/app/component/layout/navbar";

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: "Home Page",
    description: "Masaki's Home Page",
};

export default async function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang='ja'>
            <body className={inter.className}>
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
            </body>
        </html>
    );
}
