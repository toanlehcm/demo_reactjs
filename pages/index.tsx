import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import { ARR_PROPORTIONS } from '../constants/Constants';
import DemoModelViewer from '../containers/Demo/DemoModelViewer';
import dynamic from 'next/dynamic';
const DemoRotateImage = dynamic(() => import('@/containers/Demo/DemoRotateImage'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <DemoRotateImage /> */}
      <div className={styles.arr_proportions}>
        {ARR_PROPORTIONS.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                item.isUlticut ? styles.proportion_group_ulticut : styles.proportion_group
              }`}
            >
              <div className={`${styles.proportion_ulticut_3d}`}>
                <DemoModelViewer
                  diamond={item}
                  isCameraControl={true}
                  orbit={item.orbits}
                  borderRadius={'8px'}
                  backgroundColor={''}
                />
              </div>
            </div>
          );
        })}
      </div>
      ;
    </>
  );
}
