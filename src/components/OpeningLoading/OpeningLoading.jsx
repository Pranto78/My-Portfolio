import React from 'react';
import { Circles, FidgetSpinner } from 'react-loader-spinner';

const OpeningLoading = () => {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]">
        <Circles
          height="80"
          width="80"
          color="#4069C2"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
};

export default OpeningLoading;