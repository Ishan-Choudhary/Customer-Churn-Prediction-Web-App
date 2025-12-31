import { useState } from "react";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Prediction from "./components/Prediction.jsx";
import TargetProvider from "./context/targetContext.jsx";


function App() {

  const [fomrData, setFormData] = useState({
    gender: "",
    Partner: "",
    Dependents: "",
    PhoneService: "",
    MultipleLines: "",
    InternetService: "",
    OnlineSecurity: "",
    OnlineBackup: "",
    DeviceProtection: "",
    TechSupport: "",
    StreamingTV: "",
    StreamingMovies: "",
    Contract: "",
    PaperlessBilling: "",
    PaymentMethod: "",

    MonthlyCharges: 0,
    TotalCharges: 0,
    SeniorCitizen: 0,
    tenure: 0,
  });

  return (
    <div className="bg-app min-h-screen ">
      <Header />
      <div className="flex mx-2 flex-wrap">
        <TargetProvider>
          <Dashboard />
          <Prediction />
        </TargetProvider>
      </div>
    </div>
  )
}

export default App;


// gender = serializers.CharField()
// Partner = serializers.CharField()
// Dependents = serializers.CharField()
// PhoneService = serializers.CharField()
// MultipleLines = serializers.CharField()
// InternetService = serializers.CharField()
// OnlineSecurity = serializers.CharField()
// OnlineBackup = serializers.CharField()
// DeviceProtection = serializers.CharField()
// TechSupport = serializers.CharField()
// StreamingTV = serializers.CharField()
// StreamingMovies = serializers.CharField()
// Contract = serializers.CharField()
// PaperlessBilling = serializers.CharField()
// PaymentMethod = serializers.CharField()
//
// #Numeric features
// MonthlyCharges = serializers.FloatField( min_value = 0 )
// TotalCharges = serializers.FloatField( min_value = 0 )
// SeniorCitizen = serializers.IntegerField(min_value=0, max_value = 1)
// tenure = serializers.IntegerField( min_value = 0 )


