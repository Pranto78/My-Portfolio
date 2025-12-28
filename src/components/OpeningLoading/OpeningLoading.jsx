import React from "react";
import { Circles, Puff } from "react-loader-spinner";
import { motion } from "framer-motion";

const OpeningLoading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0f1c]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold flex items-center gap-2"
      >
        <span className="bg-gradient-to-r from-[#3b82f6] to-[#838d9c] text-transparent bg-clip-text">
          Welc
        </span>

        {/* Loader inside the O */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          {/* <Circles
            height="50"
            width="50"
            color="#8ab4ff"
            ariaLabel="circles-loading"
            visible={true}
          /> */}

          <Puff
            visible={true}
            height="50"
            width="50"
            color="#8ab4ff"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>

        <span className="bg-gradient-to-r from-[#3b82f6] to-[#838d9c] text-transparent bg-clip-text">
          me
        </span>
      </motion.div>
    </div>
  );
};

export default OpeningLoading;
