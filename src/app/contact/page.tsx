import React from 'react';
import { NextPage } from 'next';

const Contact:NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeLQcJWoduRbRgeFh4NyOQDkN8bugb-j6Vw_yxYPpc6O7RdOw/viewform?embedded=true"
        width="640"
        height="697"
        frameBorder="0"
        style={{ border: 'none' }}
      >
        読み込んでいます…
      </iframe>
    </div>
  );
};

export default Contact;
