from django.db import models

# Create your models here.
class url(models.Model):
    urls_text = models.CharField(max_length=400)