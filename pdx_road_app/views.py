from django.shortcuts import render
from models import Submission
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def make_submission(request):
    if request.POST:
        print(request.FILES)
        submission = Submission()
        submission.firstName = request.POST["firstName"]
        submission.lastName = request.POST["lastName"]
        submission.emailAddress = request.POST["emailAddress"]
        submission.category = request.POST["category"]
        submission.otherCategoryExplain = request.POST["otherExplain"]
        submission.caption = request.POST["caption"]
        submission.geoLocation = request.POST["geoLocation"]
        submission.photo = request.FILES["photo"]
        submission.link = request.POST["link"]
        submission.save()
        return HttpResponse(str(submission.id))


