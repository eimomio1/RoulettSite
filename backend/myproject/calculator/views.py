# calculator/views.py
import random
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from .serializers import CalculatorSerializer

class CalculateAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = CalculatorSerializer(data=request.data)
        
        if serializer.is_valid():
            number1 = serializer.validated_data['number1']
            number2 = serializer.validated_data['number2']
            operation = serializer.validated_data['operation']

            if operation == 'add':
                result = number1 + number2
            elif operation == 'subtract':
                result = number1 - number2
            elif operation == 'multiply':
                result = number1 * number2
            elif operation == 'divide':
                if number2 == 0:
                    return Response({"error": "Division by zero is not allowed."}, status=400)
                result = number1 / number2
            else:
                return Response({"error": "Invalid operation."}, status=400)

            return Response({"result": result}, status=200)
        
        return Response(serializer.errors, status=400)

class RandomQuoteAPIView(APIView):
    def get(self, request, *args, **kwargs):
        quotes = [
            {"quote": "Life is what happens when you’re busy making other plans.", "author": "John Lennon"},
            {"quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama"},
            {"quote": "Get busy living or get busy dying.", "author": "Stephen King"},
            {"quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.", "author": "Brian Tracy"},
            {"quote": "Believe you can and you’re halfway there.", "author": "Theodore Roosevelt"},
        ]
        random_quote = random.choice(quotes)
        return Response(random_quote)

def index(request):
    return HttpResponse("Welcome to the Backend. Use /api/calculate/ to perform calculations. and /api/quote to randomize quotes")