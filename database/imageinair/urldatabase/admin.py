from django.contrib import admin

from .models import url

# Register your models here.
# username: ImageinairChad mdp: KermitzeFrog
class UrlAdmin(admin.ModelAdmin):
    list = ('urls_text')

admin.site.register(url, UrlAdmin)