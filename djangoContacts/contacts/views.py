from django.http import HttpResponse
from django.core import serializers

from .models import Contact

# Create your views here.
def retrieve(request):
    if request.method == 'GET':
        allcontacts = Contact.objects.all()
        output = serializers.serialize('json', allcontacts)
        return HttpResponse(output, 'application/json')

    # elif request.method == 'POST':

def show(request, contact_id):
    contact = Contact.objects.get(id = contact_id)

    if request.method == 'GET':
        output = serializers.serialize('json', [contact])
        return HttpResponse(output, 'application/json')

    elif request.method == 'DELETE':
        contact.delete()
        return HttpResponse(status=204)
