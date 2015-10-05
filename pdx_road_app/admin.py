from django.contrib import admin
from .models import Submission
from django.contrib.contenttypes.admin import GenericTabularInline

class ImageInline(GenericTabularInline):
    model = Submission


# class SubmissionAdmin(admin.ModelAdmin):
#     inlines = [
#         ImageInline,
#     ]


class SubmissionAdmin(admin.ModelAdmin):
    model = Submission
    readonly_fields=('thumbnail',)

# Register your models here.

# admin.site.register(Submission)
admin.site.register(Submission, SubmissionAdmin)
