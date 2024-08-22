# calculator/urls.py
from django.urls import path
from .views import CalculateAPIView, RandomQuoteAPIView, index

urlpatterns = [
    path('', index, name='index'),  # Root URL
    path('api/calculate/', CalculateAPIView.as_view(), name='calculate'),
    path('api/quote/', RandomQuoteAPIView.as_view(), name='random-quote'),
]
