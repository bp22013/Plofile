'use client';

import { NextPage } from 'next';
import { Accordion, AccordionItem, Image, Spacer, DateInput } from '@nextui-org/react';
import { CalendarDate, parseDate } from '@internationalized/date'

const About: NextPage = () => {

    return (
        <div className='my-auto'>
            <div className='mr-20 ml-20 my-auto'>
                <div className="flex my-40 ml-60">
                    <div className="">
                        <Image
                            radius="full"
                            isBlurred
                            src="/main-icon.png"
                            alt="profile-icon"
                            className="h-60 w-60"
                        />
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-6">
                            <DateInput 
                                label={"誕生日"} 
                                isDisabled
                                defaultValue={parseDate("2004-02-18")} 
                                placeholderValue={new CalendarDate(2004, 2, 18)}
                            />
                        </div>
                    </div>
                    <div className='ml-20 mr-auto flex items-center my-auto'>
                        <div className="flex items-center">
                            <div className="ml-16 mb-5">
                                <Accordion variant="shadow">
                                    <AccordionItem key="1" title="自分について" className='justify-center'>
                                        <ul>
                                            <li>
                                                <h1 className='justify-center'>名前 : 青木 雅季 / Masaki Aoki</h1>
                                            </li>
                                            <li>
                                                <p className='justify-center'>大学 : 芝浦工業大学</p>
                                            </li>
                                            <li>
                                                <p className='justify-center'>専攻 : コンピュータサイエンス</p>
                                            </li>
                                        </ul>
                                    </AccordionItem>
                                    <AccordionItem key="2" title="最近興味を持っていること" className='justify-center'>
                                        <p>最近はネットワークセキュリティーに興味を持っているので、</p>
                                        <p>Kali Linuxなどを使用しています。また、大学の部活では</p>
                                        <p>鳥人間に所属しているので、電子回路やマイクロコンピューター</p>
                                        <p>などを使ったIoT作りにもハマっています。</p>
                                    </AccordionItem>
                                    <AccordionItem key="3" title="趣味" className='justify-center'>
                                        <p>プログラミングや電子回路で何かを作るのが基本ですが、</p>
                                        <p>幼い頃から習っていたピアノをたまに弾きます。</p>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
