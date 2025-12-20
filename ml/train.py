import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn import metrics
import joblib

from preprocess import build_preprocessing_pipeline

#Loading data
data = pd.read_csv("./data/churn.csv")
x = data.copy()
y = data["Churn"]

#Extracting Input Features and Output
x = x.drop(["customerID", "Churn"], axis = 1)
y= y.map({"Yes": 1, "No": 0})

#Evaluate Data
print(f"Shape of input features: {x.shape}")
print(f"Shape of output: {y.shape}")
# print("Data types of input features")
# print(x.dtypes)

# print(f"Categorical columns: {x.select_dtypes(include=['object']).columns}")
# print(f"Numerical columns: {x.select_dtypes(exclude=['object']).columns}")

x["TotalCharges"] = pd.to_numeric(x["TotalCharges"], errors="coerce")
x["TotalCharges"] = x["TotalCharges"].fillna(0)

# print(f"Categorical columns: {x.select_dtypes(include=['object']).columns}")
# print(f"Numerical columns: {x.select_dtypes(exclude=['object']).columns}")


#Train/Test split, getting the preprocessor ready
x_train, x_test, y_train, y_test = train_test_split(x, y, random_state=33, test_size=0.2)
preprocessor = build_preprocessing_pipeline(x_train)

#Creating and running the pipeline
pipe = Pipeline(
    steps=[
        ("preprocessing", preprocessor),
        ("model", LogisticRegression(max_iter=1000))
    ]
)
pipe.fit(x_train, y_train)

#Prediction and metrics
y_pred = pipe.predict(x_test)
accuracy_score = metrics.accuracy_score(y_test, y_pred)
precision_score = metrics.precision_score(y_test, y_pred)
recall_score = metrics.recall_score(y_test, y_pred)
f1_score = metrics.f1_score(y_test, y_pred)

print(f"Accuracy score: {accuracy_score}")
print(f"Precision score: {precision_score}")
print(f"Recall score: {recall_score}")
print(f"F1 score: {f1_score}")

joblib.dump(pipe, "model.pkl")
print("Model pipeline saved as pkl")
