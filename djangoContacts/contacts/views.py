from django.http import HttpResponse
from django.core import serializers
from rest_framework.decorators import api_view

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

@api_view(['GET', 'PUT', 'DELETE'])
def show(request, contact_id):
    contact = Contact.objects.get(id = contact_id)

    if request.method == 'GET':
        output = serializers.serialize('json', [contact])
        return HttpResponse(output, 'application/json')

    elif request.method == 'DELETE':
        contact.delete()
        return HttpResponse(status=204)

    elif request.method == 'PUT':
        serializer = ContactSerializer(contact, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(status=204)
