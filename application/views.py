from django.shortcuts import render

# Create your views here.

from django.shortcuts import render

# Create your views here.
def default(request):
    return render(request,'home.html')