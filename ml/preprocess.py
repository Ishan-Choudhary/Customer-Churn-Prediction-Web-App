from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

def build_preprocessing_pipeline(X):
    """
    Docstring for building_preprocessing_pipeline
    
    :param X: (pandas Dataframe)
    :return : sklearn ColumnTransformer
    """

    categorical_cols = X.select_dtypes(include=["object"]).columns
    numerical_cols = X.select_dtypes(exclude=["object"]).columns

    preprocessor = ColumnTransformer(
        transformers=[
            ("scaler", StandardScaler(), numerical_cols),
            ("ohe", OneHotEncoder(handle_unknown="ignore"), categorical_cols)
        ],
    )

    return preprocessor