from rest_framework import viewsets
from .models import FoodDonation
from .serializers import FoodDonationSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.http import HttpResponse

class FoodDonationViewSet(viewsets.ModelViewSet):
    queryset = FoodDonation.objects.all()
    serializer_class = FoodDonationSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
    @action(detail=False, methods=['post'])
    def create_food(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        subject = 'Food Donate'
        message = 'Your food donation request has been received. We will get back to you.'
        from_email = 'dhakalsarvesh18@gmail.com'
        recipient_list = [request.user]
        send_mail(subject, message, from_email, recipient_list)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
