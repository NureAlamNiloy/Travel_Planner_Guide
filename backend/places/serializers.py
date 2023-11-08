from rest_framework import serializers
from .models import Place, PlacesRating, TripTracker
from django.db import models


class  PlacesSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Place
        fields = '__all__'

class PlacesRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlacesRating
        fields = ["places", "description","rating"]

class TripTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripTracker
        fields = "__all__"