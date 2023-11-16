import React, { useEffect, useState, useRef } from 'react';


function DemoModelViewer({ diamond, isCameraControl, orbit, borderRadius, backgroundColor }) {
  return (
    <>
      <model-viewer
        id="model_3D_diamond"
        style={{
          width: '100%',
          height: '100%',
          flexShrink: 0,
          borderRadius: borderRadius,
          border: "1px solid red",
          backgroundColor: backgroundColor,
        }}
        src={diamond.model3D ? diamond.model3D : ARR_PROPORTIONS[0].model3D}
        // ref={refModelViewer}
        alt="model 3D diamond"
        loading="lazy"
        // auto-rotate
        reveal="auto"
        shadow-intensity="1"
        {...(isCameraControl ? { 'camera-controls': true } : {})}
        touch-action="none"
        camera-orbit={orbit}
        ar-status="not-presenting"
        environment-image={
          diamond.environmentImage ? diamond.environmentImage : '/hdr/home/ulticut.hdr'
        }
      />
    </>
  );
}

export default DemoModelViewer;
