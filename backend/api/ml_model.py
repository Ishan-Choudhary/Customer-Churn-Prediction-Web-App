from django.conf import settings
from pathlib import Path
import joblib
from pandas import DataFrame as df

MODEL_PATH = Path(settings.BASE_DIR).parent / "ml" / "model.pkl"
model = joblib.load(MODEL_PATH)

def predict(input_data: dict):

    x_pred = df([input_data])

    return {
        "prediction": "Yes" if model.predict(x_pred)[0] == 1 else "No",
        "probability": float(model.predict_proba(x_pred)[0][1]) 
    }



