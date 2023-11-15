import React, { useEffect, useMemo, useState } from 'react';
import { PanoViewer, SpinViewer, PROJECTION_TYPE } from '@egjs/react-view360';
// import { View360 } from '@egjs/react-view360';

export interface IDemoProps {}

export default function Demo(props: IDemoProps) {
  const images = [
    '/images/diamond.jpeg',
    '/images/diamond_sr_1.png',
    '/images/diamond_sr_2.png',
    // Add more image paths as needed
  ];

  return (
    <div style={{width:500, height:500}}>
      <SpinViewer
        tag="div"
        imageUrl="https://naver.github.io/egjs-view360/v3/common/img/spinviewer/spin_demo.jpg"
        rowCount={47}
        scale={1}
        width="100%"
        
      />
    </div>
  );
}
