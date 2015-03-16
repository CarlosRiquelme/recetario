from principal.models import Bebida, Receta, Comentario
from django.contrib import admin
from django.shortcuts import render_to_response, get_object_or_404

admin.site.register(Bebida)
admin.site.register(Receta)
admin.site.register(Comentario)