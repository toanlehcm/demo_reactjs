import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import dynamic from 'next/dynamic';
const Demo = dynamic(() => import('@/containers/Demo/Demo'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <Demo />;
}
