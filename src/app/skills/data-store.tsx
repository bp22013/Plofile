import React, { ReactNode } from 'react';
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoTypescript, BiLogoJava } from 'react-icons/bi';
import { RiFileExcel2Fill } from 'react-icons/ri';
import {
    SiAmazondocumentdb,
    SiAmazonec2,
    SiAmazons3,
    SiApache,
    SiC,
    SiCplusplus,
    SiCsharp,
    SiComposer,
    SiExpress,
    SiFastapi,
    SiSupabase,
    SiJquery,
    SiKalilinux,
    SiKotlin,
    SiLaravel,
    SiGradle,
    SiMicropython,
    SiNextdotjs,
    SiNextui,
    SiNginx,
    SiPhp,
    SiPostgresql,
    SiRadixui,
    SiRust,
    SiSqlite,
    SiTailwindcss,
} from 'react-icons/si';
import { GrMysql, GrAndroid } from 'react-icons/gr';
import { FaGitAlt, FaNodeJs, FaUbuntu, FaJava, FaMicrochip } from 'react-icons/fa';
import { LibraryIcon } from 'lucide-react';
import { FaDebian } from 'react-icons/fa6';

export interface SkillProps {
    title: string;
    icon: ReactNode;
}

//skills
export const programmingLanguages: SkillProps[] = [
    {
        title: 'PHP 8.*',
        icon: (
            <SiPhp
                size={26}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Python 3.*',
        icon: (
            <BiLogoPython
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Excel VBA',
        icon: (
            <RiFileExcel2Fill
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'HTML 5',
        icon: (
            <BiLogoHtml5
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'CSS 3',
        icon: (
            <BiLogoCss3
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'TypeScript',
        icon: (
            <BiLogoTypescript
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'JavaScript',
        icon: (
            <BiLogoJavascript
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'C',
        icon: (
            <SiC
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'C++',
        icon: (
            <SiCplusplus
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Java',
        icon: (
            <FaJava
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Kotlin',
        icon: (
            <SiKotlin
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Micro Python',
        icon: (
            <SiMicropython
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const framework: SkillProps[] = [
    {
        title: 'React',
        icon: (
            <BiLogoReact
                size={22}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Next.js',
        icon: (
            <SiNextdotjs
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'NextUI',
        icon: (
            <SiNextui
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'TailwindCSS',
        icon: (
            <SiTailwindcss
                size={20}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Express.js',
        icon: (
            <SiExpress
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Laravel',
        icon: (
            <SiLaravel
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'React Native',
        icon: (
            <BiLogoReact
                size={22}
                className='mr-2'
            />
        ),
    },
    {
        title: 'supabase Authentication',
        icon: (
            <SiSupabase
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Fast API',
        icon: (
            <SiFastapi
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'gradle',
        icon: (
            <SiGradle
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'JQuery',
        icon: (
            <SiJquery
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Composer',
        icon: (
            <SiComposer
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const databases: SkillProps[] = [
    {
        title: 'MySQL 8',
        icon: (
            <GrMysql
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'SQLite',
        icon: (
            <SiSqlite
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'PostgreSQL',
        icon: (
            <SiPostgresql
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const hardrelated: SkillProps[] = [
    {
        title: 'Arduino',
        icon: (
            <FaMicrochip
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'ESP32',
        icon: (
            <FaMicrochip
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Rassbery Pi',
        icon: (
            <FaMicrochip
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Mbed',
        icon: (
            <FaMicrochip
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Twelite',
        icon: (
            <FaMicrochip
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const others: SkillProps[] = [
    {
        title: 'Nginx(web/リバースプロキシサーバー構築に使用)',
        icon: (
            <SiNginx
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Apache(webサーバー構築に使用)',
        icon: (
            <SiApache
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Git',
        icon: (
            <FaGitAlt
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Ubuntu 20.04',
        icon: (
            <FaUbuntu
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Debian 12',
        icon: (
            <FaDebian
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Kali linux',
        icon: (
            <SiKalilinux
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Node.js 18~21',
        icon: (
            <FaNodeJs
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Android Studio',
        icon: (
            <GrAndroid
                size={19}
                className='mr-2'
            />
        ),
    },
];