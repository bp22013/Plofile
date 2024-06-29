import React from "react";
import { Image } from '@nextui-org/image';
import { Phone, CircleUser, PenToolIcon } from 'lucide-react';
import { Link, Button } from "@nextui-org/react";
import { NoSSR } from '@/utils/no-ssr';
import "@/app/style/globals.css";

export default function Home(){
    return (
        <div className='text-center'>
            <div className='mb-12 mt-12 flex justify-center'>
                <Image
                    radius='full'
                    isBlurred
                    src='/icon.png'
                    alt='profile-icon'
                    className='h-56 w-56'
                />
            </div>
            <h6 className='text-lg font-medium tracking-wide md:text-2xl'>Masaki Aoki / 青木 雅季</h6>
            <p className='text-md mt-2 font-normal tracking-wide md:text-xl'>芝浦工業大学 3年 </p>
            <p className='text-md font-normal tracking-wide md:text-xl'>Mail : bp22013@shibaura-it.ac.jp</p>
            <NoSSR>
                <p></p>
            </NoSSR>
            <div className='mb-12 mt-16 flex justify-center gap-3'>
                <Link href='about'>
                    <Button
                        color='danger'
                        startContent={<CircleUser />}
                        variant='flat'>
                        About
                    </Button>
                </Link>
                <Link href='skills'>
                    <Button
                        color='warning'
                        startContent={<PenToolIcon />}
                        variant='flat'>
                        Skills
                    </Button>
                </Link>
                <Link href='contact'>
                    <Button
                        color='success'
                        startContent={<Phone />}
                        variant='flat'>
                        Contact
                    </Button>
                </Link>
            </div>
        </div>
    );
}