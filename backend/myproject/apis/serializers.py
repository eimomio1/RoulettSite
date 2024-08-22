
from rest_framework import serializers

class CalculatorSerializer(serializers.Serializer):
    number1 = serializers.FloatField()
    number2 = serializers.FloatField()
    operation = serializers.ChoiceField(choices=['add', 'subtract', 'multiply', 'divide'])
