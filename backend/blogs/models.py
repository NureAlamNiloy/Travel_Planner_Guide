from django.db import models

# Create your models here.
from account.models import User

class blog(models.Model):
    username = models.CharField(max_length=50)
    image1 = models.ImageField(upload_to='blogs/', null=True,blank=True)
    image2 = models.ImageField(upload_to='blogs/', null=True,blank=True)
    image3 = models.ImageField(upload_to='blogs/', null=True,blank=True)
    image4 = models.ImageField(upload_to='blogs/', null=True,blank=True)
    image5 = models.ImageField(upload_to='blogs/', null=True,blank=True)
    title = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    description = models.TextField(max_length=555)
    post_date = models.DateTimeField(auto_now_add=True)