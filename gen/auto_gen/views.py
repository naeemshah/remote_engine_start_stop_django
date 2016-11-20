from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
import os
import RPi.GPIO as GPIO
import time
from django.template import loader
from django_ajax.decorators import ajax
from django.views.decorators.csrf import ensure_csrf_cookie
@ensure_csrf_cookie




def index(request):
    template = loader.get_template('auto_gen/home.html')
    context = {
        'latest_question_list': "",
    }
    return HttpResponse(template.render(context, request))

@ajax
def start_slip(request):
    GPIO.setmode(GPIO.BCM) 
    GPIO.setup(18, GPIO.OUT)  # set up pin 17
    GPIO.output(18, 0)  # turn on pin 17
    c = 2 + 3
    return {'result': c}



@ajax
def stop_slip(request):
    GPIO.setmode(GPIO.BCM) 
    GPIO.setup(18, GPIO.OUT)  # set up pin 17
    GPIO.output(18, 1)  # turn on pin 17
    c = 2 + 3
    return {'result': c}


@ajax
def turn_off(request):
     GPIO.setmode(GPIO.BCM) 

     GPIO.setup(23, GPIO.OUT)  # set up pin 18

        
     GPIO.output(23, 0)  # turn on pin 18
     time.sleep(5)
        
     GPIO.output(23, 1)  # turn on pin 18
     c = 2 + 3
     return {'result': c}
