from django.contrib import admin
from .models import Hotel,Rating,HotelReservation


# Register your models here.
admin.site.register(Hotel)
admin.site.register(Rating)


# Hotels reservation regiter in admin panel with list_display all field
class HotelReservationAdmin(admin.ModelAdmin):
    list_display = ('hotel_name','full_name','contact_no','email','check_in','check_out','adults','children','is_confirmed')

admin.site.register(HotelReservation,HotelReservationAdmin)