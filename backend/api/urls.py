from django.urls import path
from api.views import PredictChurnAPI 

urlpatterns = [
    path("predict/", PredictChurnAPI.as_view())
]
