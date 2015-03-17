from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings

admin.autodiscover()

urlpatterns = patterns('',
   	url(r'^inicio/bebbidas','principal.views.lista_bebidas'),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^media/(?P<path>.*)$','django.views.static.serve',
		{'document_root':settings.MEDIA_ROOT,}
	),
	url(r'^sobre/$','principal.views.sobre'),
	url(r'^$','principal.views.inicio'),
	url(r'^usuarios/$','principal.views.usuarios'),
	url(r'^recetas/$','principal.views.lista_recetas'),
	url(r'^receta/(?P<id_receta>\d+)$','principal.views.detalle_receta'),
	url(r'^contacto/$','principal.views.contacto'),
	url(r'^bebidas/$','principal.views.lista_bebidas'),
	url(r'^receta/nueva/$','principal.views.nueva_receta'),
	url(r'^comenta/$','principal.views.nuevo_comentario'),

)