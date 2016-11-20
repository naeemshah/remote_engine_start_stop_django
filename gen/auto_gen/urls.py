from django.conf.urls import url


from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^start_slip/$', views.start_slip, name='start_slip'),
    url(r'^stop_slip/$', views.stop_slip, name='stop_slip'),
    url(r'^turn_off/$', views.turn_off, name='turn_off'),
]