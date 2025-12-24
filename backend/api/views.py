from rest_framework.status import HTTP_200_OK
from rest_framework.views import APIView, Response
from typing import Dict, Any, cast

from api.serializers import  ChurnPredictionSerializer
from api.ml_model import predict

class PredictChurnAPI(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ChurnPredictionSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        data = cast(Dict[str, Any], serializer.validated_data)
        response = predict(data)
            
        return Response(
            status=HTTP_200_OK,
            data = {
                "prediction": response["prediction"],
                "probability" : response["probability"],
            }
        )
