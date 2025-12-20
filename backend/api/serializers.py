from rest_framework import serializers

class ChurnPredictionSerializer(serializers.Serializer):
    
    #Categorical features
    gender = serializers.CharField()
    Partner = serializers.CharField()
    Dependents = serializers.CharField()
    PhoneService = serializers.CharField()
    MultipleLines = serializers.CharField()
    InternetService = serializers.CharField()
    OnlineSecurity = serializers.CharField()
    OnlineBackup = serializers.CharField()
    DeviceProtection = serializers.CharField()
    TechSupport = serializers.CharField()
    StreamingTV = serializers.CharField()
    StreamingMovies = serializers.CharField()
    Contract = serializers.CharField()
    PaperlessBilling = serializers.CharField()
    PaymentMethod = serializers.CharField()
    
    #Numeric features
    MonthlyCharges = serializers.FloatField( min_value = 0 )
    TotalCharges = serializers.FloatField( min_value = 0 )
    SeniorCitizen = serializers.IntegerField(min_value=0, max_value = 1)
    tenure = serializers.IntegerField( min_value = 0 )

