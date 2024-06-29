import React from 'react';
import { Metadata, NextPage } from 'next';
import { Skills } from '@/app/component/skills';
import {Card, CardBody} from '@nextui-org/card';
import SkillCard from '@/app/skills/component/skill-card';
import {framework, databases, others, programmingLanguages, hardrelated } from '@/app/skills/data-store';

export const metadata: Metadata = {
    title: 'Skills',
};

const Page:NextPage = () => {
    return (
        <div>
            <Skills
                title='Qualifications'
                description='保有資格'>
                <Card>
                    <CardBody>
                        <h2 className='text-sm'>独立行政法人 情報処理推進機構</h2>
                        <h3 className='my-3 font-semibold'>基本情報技術者試験</h3>
                        <div className='flex justify-end'>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h2 className='text-sm'>実用英語技能検定</h2>
                        <h3 className='my-3 font-semibold'>2級</h3>
                        <div className='flex justify-end'>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h2 className='text-sm'>その他</h2>
                        <h3 className='my-3 font-semibold'>普通自動車運転免許</h3>
                    </CardBody>
                </Card>
            </Skills>
            <Skills
                title='Skills'
                description='経験したことのある技術や出来ること'>
                <SkillCard
                    title='Programming Languages'
                    contents={programmingLanguages}
                />
                <SkillCard
                    title='Frame Work'
                    contents={framework}
                />
                <SkillCard
                    title='Databases'
                    contents={databases}
                />
                <SkillCard
                    title='Hard Related'
                    contents={hardrelated}
                />
                <SkillCard
                    title='Other'
                    contents={others}
                />
            </Skills>
        </div>
    );
}

export default Page;