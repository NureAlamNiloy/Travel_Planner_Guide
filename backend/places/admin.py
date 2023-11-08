from django.contrib import admin
from .models import Place, PlacesRating,TripTracker

# Register your models here.
admin.site.register(Place)
admin.site.register(PlacesRating)
admin.site.register(TripTracker)