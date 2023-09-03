from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name="home/index.html"), name="index"),
    path("breakfast", TemplateView.as_view(template_name="home/breakfast.html"), name="breakfast"),
    path("lunch", TemplateView.as_view(template_name="home/lunch.html"), name="lunch"),
    path("desserts", TemplateView.as_view(template_name="home/desserts.html"), name="desserts"),
    path("drinks", TemplateView.as_view(template_name="home/drinks.html"), name="drinks"),
]