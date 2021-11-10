from django.http import HttpResponse
from django.core import serializers
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Contact
from .serializers import ContactSerializer
from .form import ContactForm

# Create your views here.
@api_view(['GET', 'POST'])
def retrieve(request):
    context = {}

    if request.method == 'GET':
        allcontacts = Contact.objects.all()
        output = serializers.serialize('json', allcontacts)
        return HttpResponse(output, 'application/json')

    elif request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(status=204)

        # form = ContactForm(request.POST)
        # context['form'] = form
        # if form.is_valid():
        #     form.save()
        #     return HttpResponse(status=204)
        # return render(request, 'index.html', context)

@api_view(['GET', 'PUT', 'DELETE'])
def show(request, contact_id):
    contact = Contact.objects.get(id = contact_id)

    if request.method == 'GET':
        output = serializers.serialize('json', [contact])
        return HttpResponse(output, 'application/json')

    elif request.method == 'DELETE':
        contact.delete()
        return HttpResponse(status=204)

    # elif request.method == 'PUT':
    #     serializer = StudentSerializer(student, data=request.data,context={'request': request})
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(status=status.HTTP_204_NO_CONTENT)
