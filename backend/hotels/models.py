from django.db import models
from django.utils.text import slugify
from django.conf import settings
# Create your models here.

class Hotel(models.Model):
    hotel_name = models.CharField(max_length= 100, unique=True)
    description = models.TextField(max_length= 500, blank=True)
    price = models.FloatField()
    image1 = models.ImageField(upload_to = 'media/hotels', null=True, blank=True, default="")
    image2 = models.ImageField(upload_to = 'media/hotels', null=True, blank=True, default="")
    image3 = models.ImageField(upload_to = 'media/hotels', null=True, blank=True, default="")
    image4 = models.ImageField(upload_to = 'media/hotels', null=True, blank=True, default="")
    image5 = models.ImageField(upload_to = 'media/hotels', null=True, blank=True, default="")
    top_deal = models.BooleanField(default=False)
    location = models.CharField(max_length=100, default='YourDefaultLocation')
        
    def __str__(self):
        return self.hotel_name

from django.db import models

class HotelReservation(models.Model):
    # hotels = models.ForeignKey(Hotel, on_delete= models.CASCADE, related_name="reservation")
    hotel_name = models.CharField(max_length= 100)
    full_name = models.CharField(max_length=100)
    contact_no = models.CharField(max_length=11)
    email = models.EmailField()
    check_in = models.DateField()
    check_out = models.DateField()
    adults = models.PositiveIntegerField()
    children = models.PositiveIntegerField()
    is_confirmed = models.BooleanField(default=False)
        
class Rating(models.Model):
    hotels = models.ForeignKey(Hotel, on_delete= models.CASCADE, related_name="rating")        
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    rating = models.PositiveIntegerField(choices=(
                                                    (1,"1 Star"),
                                                    (2,"2 Star"),
                                                    (3,"3 Star"),
                                                    (4,"4 Star"),
                                                    (5,"5 Star") 
                                                  ))
    rating_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.user} rating: {self.rating} hotels: {self.hotels}"
    
    class Meta:
        unique_together = ('hotels', 'user')