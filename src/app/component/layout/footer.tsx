import React from 'react';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

interface SnsLinkProps {
    href: string;
    startContent: React.ReactNode;
    text: string;
}

const SnsLinks: SnsLinkProps[] = [
    {
        href: 'https://github.com/bp22013',
        startContent: <BsGithub className='h-full w-full p-1' />,
        text: 'GitHub',
    },
    {
        href: 'https://x.com/BetaMaxBot1',
        startContent: <BsTwitter className='h-full w-full p-1' />,
        text: 'Twitter',
    },
    {
        href: 'https://www.instagram.com/ma_sa.0218/?next=%2F',
        startContent: <BsInstagram className='h-full w-full p-1' />,
        text: 'Instagram',
    },
];

export default function Footer() {
    return (
        <footer className='w-full flex flex-col items-center'>
            <Divider className='my-11 mt-5 w-full' />
            <div className='m-5 flex flex-col items-center'>
                <div className='mb-3 flex flex-row justify-center'>
                    {SnsLinks.map((snsLink: SnsLinkProps, index: number) => (
                        <Link
                            key={index}
                            href={snsLink.href}>
                            <Button
                                startContent={snsLink.startContent}
                                className='mr-2'
                                variant='light'
                                color='default'>
                                {snsLink.text}
                            </Button>
                        </Link>
                    ))}
                </div>
                <Link
                    href='https://www.instagram.com/ma_sa.0218/?next=%2F'
                    isBlock
                    showAnchorIcon
                    className='mb-3 text-medium font-normal text-center'>
                    <p>© {new Date().getFullYear()} Masaki Aoki. All Rights Reserved.</p>
                </Link>
            </div>
        </footer>
    );
}
