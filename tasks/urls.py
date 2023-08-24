from django.urls import path, include
from rest_framework import routers
from .views import TaskView
# from rest_framework.schemas import get_schema_view

router = routers.DefaultRouter()
router.register(r'tasks', TaskView, 'tasks')

# schema_view = get_schema_view(title="Tasks API")

urlpatterns = [
    path('api/v1/', include(router.urls)),
    # path('schema', schema_view),
]
