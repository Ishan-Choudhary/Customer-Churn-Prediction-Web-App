import React, { useState, useContext } from "react";
import { PeopleAlt, Router, Payments } from "@mui/icons-material";
import { TargetContext } from "../context/targetContext";

const Dashboard = () => {

  const [inputData, setInputData] = useState({
    gender: "Male",
    Partner: false,
    Dependents: false,
    SeniorCitizen: false,
    PhoneService: false,
    MultipleLines: "No",
    InternetService: "No",
    OnlineSecurity: "No",
    OnlineBackup: "No",
    DeviceProtection: "No",
    TechSupport: "No",
    StreamingTV: "No",
    StreamingMovies: "No",
    Contract: "Month-to-month",
    PaymentMethod: "Electronic check",
    PaperlessBilling: false,
    tenure: 0,
    MonthlyCharges: 0,
    TotalCharges: 0,
  })

  const { target: [targetValue, setTargetValue] } = useContext(TargetContext);

  const handleGenderChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, gender: e.target.value }))
  }

  const handlePartnerChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, Partner: !prevDemo.Partner }))
  }

  const handleDependentsChange = () => {
    setInputData((prevDemo) => ({ ...prevDemo, Dependents: !prevDemo.Dependents }))
  }

  const handleSeniorCitizenChange = () => {
    setInputData((prevDemo) => ({ ...prevDemo, SeniorCitizen: !prevDemo.SeniorCitizen }))
  }

  const handlePhoneServiceChange = () => {
    setInputData((prevDemo) => ({ ...prevDemo, PhoneService: !prevDemo.PhoneService }))
  }

  const handleMultiLineChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, MultipleLines: e.target.value }))
  }

  const handleInternetService = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, InternetService: e.target.value }))
  }

  const handleOnlineSecChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, OnlineSecurity: e.target.value }))
  }

  const handleOnlineBackupChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, OnlineBackup: e.target.value }))
  }

  const handleDeviceProtection = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, DeviceProtection: e.target.value }))
  }

  const handleTechSupport = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, TechSupport: e.target.value }))
  }

  const handleStreamingTV = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, StreamingTV: e.target.value }))
  }

  const handleStreamingMovies = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, StreamingMovies: e.target.value }))
  }

  const handleContractChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, Contract: e.target.value }))
  }

  const handlePaymentModeChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, PaymentMethod: e.target.value }))
  }

  const handlePaperlessBillingChange = () => {
    setInputData((prevDemo) => ({ ...prevDemo, PaperlessBilling: !prevDemo.PaperlessBilling }))
  }

  const handleTenureChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, tenure: e.target.value === "" ? "" : parseInt(e.target.value) }))
  }

  const handleMonthlyChargesChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, MonthlyCharges: e.target.value === "" ? "" : parseFloat(e.target.value) }))
  }

  const handleTotalChargesChange = (e) => {
    setInputData((prevDemo) => ({ ...prevDemo, TotalCharges: e.target.value === "" ? "" : parseFloat(e.target.value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = structuredClone(inputData);
    payload = {
      ...payload,
      SeniorCitizen: payload["SeniorCitizen"] === false ? 0 : 1,
      Partner: payload["Partner"] === false ? "No" : "Yes",
      Dependents: payload["Dependents"] === false ? "No" : "Yes",
      PhoneService: payload["PhoneService"] === false ? "No" : "Yes",
      PaperlessBilling: payload["PaperlessBilling"] === false ? "No" : "Yes",
    }

    const API_URL = import.meta.env.VITE_API_URL
    const req = await fetch(`${API_URL}/api/predict/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    })

    if (!req.ok) {
      console.log("Invalid request");
      return
    }

    const res = await req.json();
    setTargetValue(parseInt(res["probability"] * 100))
  }

  return (
    <div className="w-full sm:w-3/5">
      <h1 className="text-4xl font-bold pl-2">Analysis Dashboard</h1>
      <p className="text-secondary pl-2">Input customer data below to generate rela-time churn predictions.</p>
      <form id="input-data-form" onSubmit={handleSubmit} className="flex flex-wrap mt-5 gap-4">
        {/* DEMOGRAPHIC */}
        <div className="w-full sm:max-w-[320px] grow border-2 border-bd rounded-2xl bg-card">
          {/*HEADER*/}
          <div className="p-2 border-b-2 border-b-bd flex items-center ">
            <div className="bg-[#1C243B] px-0.5 rounded-sm size-10 mr-2">
              <PeopleAlt className="text-[#60A5FA] px-1 scale-70" sx={{ fontSize: "2.3rem" }} />
            </div>
            <p>
              1. Demographics
            </p>
          </div>

          <div className="px-2 pb-4">
            <label className="px-2 text-secondary text-lg" htmlFor="gender">Gender</label>
            <select name="gender" id="gender" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.gender} onChange={handleGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="px-2 pb-4">
            <div className="px-2 py-2 flex justify-between items-center bg-field border-2 border-bd rounded-lg">
              <label htmlFor="seniorCitizen" className="text-secondary text-lg">Senior Citizen</label>
              <input type="checkbox" id="seniorCitizen" className="size-4" checked={inputData.SeniorCitizen} onChange={handleSeniorCitizenChange} />
            </div>
          </div>
          <div className="px-2 pb-4">
            <div className="px-2 py-2 flex justify-between items-center bg-field border-2 border-bd rounded-lg">
              <label htmlFor="partner" className="text-secondary text-lg">Partner</label>
              <input type="checkbox" id="partner" className="size-4" checked={inputData.Partner} onChange={handlePartnerChange} />
            </div>
          </div>
          <div className="px-2 pb-2">
            <div className="px-2 py-2 flex justify-between items-center bg-field border-2 border-bd rounded-lg">
              <label htmlFor="dependents" className="text-secondary text-lg">Dependents</label>
              <input type="checkbox" id="dependents" className="size-4" checked={inputData.Dependents} onChange={handleDependentsChange} />
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div className="w-full sm:max-w-[320px] grow border-2 border-bd rounded-2xl bg-card">
          {/*HEADER*/}
          <div className="p-2 border-b-2 border-b-bd flex items-center ">
            <div className="bg-[#281E3A] px-0.5 rounded-sm size-10 mr-2">
              <Router className="text-[#C084FC] px-1 scale-70" sx={{ fontSize: "2.3rem" }} />
            </div>
            <p>
              2. Services
            </p>
          </div>
          <div className="flex">
            <div className="px-2 pb-2 ">
              <label htmlFor="phoneService" className="text-secondary text-sm font-bold">PHONE</label>
              <div className="px-2 py-2 flex gap-2 justify-between items-center bg-field border-2 border-bd rounded-lg">
                <input type="checkbox" id="phoneService" className="size-4" checked={inputData.PhoneService} onChange={handlePhoneServiceChange} />
                <label htmlFor="phoneService" className="text-secondary text-lg">Phone Service</label>
              </div>
            </div>
            <div className="px-2 pb-2">
              <label className="px-2 text-secondary text-sm font-bold" htmlFor="multiLines">MULTIPLE LINES</label>
              <select name="multiLines" id="multiLines" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.MultipleLines} onChange={handleMultiLineChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No phone service">No phone service</option>
              </select>
            </div>
          </div>
          <div className="px-2 pb-2">
            <label className="text-secondary text-sm font-bold" htmlFor="intService">INTERNET SERVICE</label>
            <select name="intService" id="intService" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.InternetService} onChange={handleInternetService}>
              <option value="No">No</option>
              <option value="DSL">DSL</option>
              <option value="Fiber optic">Fiber Optic</option>
            </select>
          </div>
          <label className="text-secondary text-sm font-bold px-2">ADD-ONS</label>
          <div className="px-2 pb-2 grid grid-cols-2 gap-4">
            <div>
              <label className="text-primary text-md" htmlFor="onlineSec">Online Security</label>
              <select name="intService" id="onlineSec" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.OnlineSecurity} onChange={handleOnlineSecChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">No Internet Service</option>
              </select>
            </div>
            <div>
              <label className="text-primary text-md" htmlFor="onlineBkp">Online Backup</label>
              <select name="onlineBkp" id="onlineBkp" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.OnlineBackup} onChange={handleOnlineBackupChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">No Internet Service</option>
              </select>
            </div>
            <div>
              <label className="text-primary text-md" htmlFor="devProt">Device Protection</label>
              <select name="devProt" id="devProt" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.DeviceProtection} onChange={handleDeviceProtection}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">No Internet Service</option>
              </select>
            </div>
            <div>
              <label className="text-primary text-md" htmlFor="techSup">Tech Support</label>
              <select name="techSup" id="techSup" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.TechSupport} onChange={handleTechSupport}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">No Internet Service</option>
              </select>
            </div>
            <div>
              <label className="text-primary text-md" htmlFor="streamTV">Streaming TV</label>
              <select name="streamTV" id="streamTV" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.StreamingTV} onChange={handleStreamingTV}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">No Internet Service</option>
              </select>
            </div>
            <div>
              <label className="text-primary text-md" htmlFor="streamMovie">Streaming Movies</label>
              <select name="streamMovie" id="streamMovie" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.StreamingMovies} onChange={handleStreamingMovies}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">No Internet Service</option>
              </select>
            </div>
          </div>
        </div>
        {/* BILLING*/}
        <div className="w-full sm:max-w-[320px] grow border-2 border-bd rounded-2xl bg-card">
          {/*HEADER*/}
          <div className="p-2 border-b-2 border-b-bd flex items-center ">
            <div className="bg-[#2F2123] px-0.5 rounded-sm size-10 mr-2">
              <Payments className="text-[#FB923C] px-1 scale-70" sx={{ fontSize: "2.3rem" }} />
            </div>
            <p>
              3. Billings & Contract
            </p>
          </div>

          <div className="px-2 pb-4">
            <label className="text-secondary text-sm font-bold" htmlFor="contraType">CONTRACT TYPE</label>
            <select name="contraType" id="contraType" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.Contract} onChange={handleContractChange}>
              <option value="One year">One year</option>
              <option value="Two year">Two year</option>
              <option value="Month-to-month">Month-to-month</option>
            </select>
          </div>
          <div className="px-2 pb-4">
            <label className="text-secondary text-sm font-bold" htmlFor="contraType">PAYMENT METHOD</label>
            <select name="contraType" id="contraType" className="bg-field w-full border-2 border-bd px-2 py-3 outline-none rounded-lg" value={inputData.PaymentMethod} onChange={handlePaymentModeChange}>
              <option value="Electronic check">Electronic check</option>
              <option value="Mailed check">Mailed check</option>
              <option value="Bank transfer (automatic)">Bank transfer (automatic)</option>
              <option value="Credit card (automatic)">Credit card (automatic)</option>
            </select>
          </div>
          <div className="px-2 pb-4 grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="partner" className="text-secondary text-sm font-bold">TENURE</label>
              <input required type="number" className="px-2 py-2 flex justify-between items-center bg-field border-2 border-bd rounded-lg w-full" placeholder="0" min={0} value={inputData.tenure} onChange={handleTenureChange} />
            </div>
            <div className="px-2 py-2 flex gap-2 justify-between items-center">
              <input type="checkbox" id="paperlessBilling" className="size-4" checked={inputData.PaperlessBilling} onChange={handlePaperlessBillingChange} />
              <label htmlFor="paperlessBilling" className="text-secondary text-lg">Paperless Billings</label>
            </div>
            <div>
              <label htmlFor="partner" className="text-secondary text-sm font-bold">MONTHLY ($)</label>
              <input required type="number" className="px-2 py-2 flex justify-between items-center bg-field border-2 border-bd rounded-lg w-full" placeholder="0.00" value={inputData.MonthlyCharges} onChange={handleMonthlyChargesChange} />
            </div>
            <div>
              <label htmlFor="partner" className="text-secondary text-sm font-bold">TOTAL ($)</label>
              <input required type="number" className="px-2 py-2 flex justify-between items-center bg-field border-2 border-bd rounded-lg w-full" placeholder="0.00" value={inputData.TotalCharges} onChange={handleTotalChargesChange} />
            </div>
          </div>
        </div>
      </form >
    </div >
  )
}

export default Dashboard;
