from django.db import models
from django.conf import settings


# Create your models here.
class Submission(models.Model):
    firstName = models.CharField(max_length = 200)
    lastName = models.CharField(max_length = 200)
    emailAddress = models.CharField(max_length = 200)
    category = models.CharField(max_length = 200)
    otherCategoryExplain = models.TextField()
    caption = models.CharField(max_length = 200)
    geoLocation = models.CharField(max_length = 200)
    photo = models.ImageField(upload_to="media")
    link = models.CharField(max_length = 200)

    def thumbnail(self):
        return u'<img src="%s" />' % (settings.MEDIA_URL + str(self.photo))
    thumbnail.short_description = "Preview"
    thumbnail.allow_tags = True

    def __str__(self):
        return self.geoLocation
