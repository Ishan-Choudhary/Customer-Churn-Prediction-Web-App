import React, { useState, useEffect, useContext } from "react";
import { BatchPrediction } from "@mui/icons-material";
import { TargetContext } from "../context/targetContext";

const Prediction = () => {

  const { target: [targetValue, setTargetValue] } = useContext(TargetContext);

  // const [targetValue, setTargetValue] = useState(0); // The value you want to reach
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress > targetValue) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev - 1);
      }, 30);
      return () => clearTimeout(timer);
    }
    else if (progress < targetValue) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    }
    else {
      return
    }

  }, [progress, targetValue]);

  return (
    <div className="w-full sm:w-2/5">
      <div className="bg-card rounded-2xl border-1 border-bd h-fit pb-6">

        {/* HEADER */}
        <div className="bg-[#2161EB] py-7 rounded-t-2xl flex flex-col w-full items-center justify-center gap-2">
          <div className="text-5xl h-[56px]">
            <BatchPrediction className="text-[#FFF]" fontSize="inherit" />
          </div>
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold">Prediction Model</h2>
            <p className="text-[#DBEAFE] text-xl">Real-time Analysis</p>
          </div>
        </div>

        {/* CHART SECTION */}
        <div className="flex flex-col items-center pt-8 relative">

          <div
            className="size-48 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(${targetValue <= 30 ? '#4ade80' : targetValue <= 60 ? '#facc15' : '#ef4444'} ${progress}%, #334155 0)`
            }}
          >

            <div className="size-36 rounded-full bg-card flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-white">{progress}%</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Churn Risk</span>
            </div>

          </div>
        </div>

        {/* BUTTON PLACEHOLDER */}
        <div className="px-6 mt-6">
          <button type="submit" form="input-data-form" className="w-full py-3 bg-blue-600 rounded-lg text-white font-semibold cursor-pointer">Make Prediction</button>
        </div>

      </div>
    </div >
  )
}

export default Prediction;
