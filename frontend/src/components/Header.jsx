import React from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const Header = () => {
  return (
    <div className=" w-full text-xs border-1 border-b-bd mb-5">
      <div className="flex gap-2 items-center mx-2">
        <AnalyticsIcon className="text-[#135bec]" />
        <h3 className="font-semibold">Customer Churn Predictor</h3>
      </div>
    </div>
  )
}

export default Header;
