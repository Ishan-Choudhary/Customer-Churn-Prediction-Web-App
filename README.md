# Customer Churn Prediction Web App

An end-to-end **machine learning system** that predicts whether a telecom customer is likely to churn, built with a production-oriented mindset.

This project demonstrates the complete lifecycle of an ML-powered feature:

* model training
* backend inference API
* frontend integration
* clear data contracts between services

The focus is on **engineering correctness and system design**, not just model accuracy.

---

## 🚀 What This Project Does

Given structured customer information (demographics, services, and billing details), the system:

1. Validates input via a backend API
2. Runs the data through a trained ML pipeline
3. Returns:

   * a churn prediction (`Yes` / `No`)
   * the probability of churn
4. Presents the result clearly in a frontend dashboard

---

---

## 🏗️ Architecture Overview

```
React (Vite + Tailwind)
        ↓ JSON
Django REST Framework API
        ↓
Scikit-learn Pipeline
(Logistic Regression + preprocessing)
```

### Key design decisions

* **No notebooks** for training — only Python scripts
* **Single serialized pipeline** (preprocessing + model)
* **Backend is the source of truth** for validation
* **Frontend sends JSON**, not form-encoded data
* **UI uses qualitative verdicts** instead of raw confidence claims

---

## 🧪 Machine Learning Details

* Dataset: IBM Telco Customer Churn (Kaggle)
* Target:

  * `Yes` → churn (1)
  * `No` → no churn (0)

### Features Used (19 total)

**Categorical (15)**

* gender
* Partner
* Dependents
* PhoneService
* MultipleLines
* InternetService
* OnlineSecurity
* OnlineBackup
* DeviceProtection
* TechSupport
* StreamingTV
* StreamingMovies
* Contract
* PaperlessBilling
* PaymentMethod

**Numerical (4)**

* SeniorCitizen
* tenure
* MonthlyCharges
* TotalCharges

### Preprocessing

* Numerical features → `StandardScaler`
* Categorical features → `OneHotEncoder(handle_unknown="ignore")`
* Combined using `ColumnTransformer`

### Model

* Logistic Regression (baseline)
* Entire pipeline saved using `joblib`

---

## 🔌 Backend API

### Endpoint

```
POST /api/predict/
```

### Request (JSON)

```json
{
  "gender": "Male",
  "Partner": "No",
  "Dependents": "No",
  "PhoneService": "Yes",
  "MultipleLines": "No",
  "InternetService": "DSL",
  "OnlineSecurity": "No",
  "OnlineBackup": "Yes",
  "DeviceProtection": "No",
  "TechSupport": "No",
  "StreamingTV": "Yes",
  "StreamingMovies": "No",
  "Contract": "Month-to-month",
  "PaperlessBilling": "Yes",
  "PaymentMethod": "Electronic check",
  "SeniorCitizen": 0,
  "tenure": 12,
  "MonthlyCharges": 65.3,
  "TotalCharges": 780.2
}
```

### Response (JSON)

```json
{
  "prediction": "No",
  "probability": 0.13
}
```

* `prediction`: whether churn is expected
* `probability`: estimated probability of churn

---

## 🖥️ Frontend

* Built with **React (Vite)** and **Tailwind CSS**
* Uses a dark, internal-tool-style UI
* Groups inputs into:

  * Demographics
  * Services
  * Billing & Contract
* Sends requests as JSON
* Displays:

  * qualitative verdict (very unlikely → very likely)
  * color-coded risk indicator

The frontend is intentionally simple and honest, matching backend capabilities exactly.

---

## ▶️ Running Locally

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🛠️ Tech Stack

* Python
* pandas
* scikit-learn
* Django
* Django REST Framework
* React (Vite)
* Tailwind CSS

---

## 🔮 Future Improvements

* Dockerize backend and frontend
* Add batch inference
* Add explainability (e.g. SHAP)
* Improve model with advanced techniques
* Authentication and prediction history

---

## 📌 Author

**Ishan Choudhary**

This project is part of a broader roadmap focused on building **production-grade ML systems**, not just models.
