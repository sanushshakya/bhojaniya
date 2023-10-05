from rest_framework import viewsets, serializers
from .models import FundContribution
from .serializers import FundContributionSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.http import HttpResponse

class FundContributionViewSet(viewsets.ModelViewSet):
    queryset = FundContribution.objects.all()
    serializer_class = FundContributionSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['post'])
    def create_fund(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        subject = 'Fund Donte'
        message = 'Your fund donation request has been received. We will get back to you.'
        from_email = 'dhakalsarvesh18@gmail.com'
        recipient_list = [request.user]
        send_mail(subject, message, from_email, recipient_list)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
   