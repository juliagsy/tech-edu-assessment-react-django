from django.urls import path

from . import views

urlpatterns = [
    path('', views.retrieve, name='retrieve'),
    path('<int:contact_id>', views.show, name='show')
]
