from principal.models import Bebida, Receta, Comentario
from django.shortcuts import render_to_response, get_object_or_404
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.template import RequestContext 


def lista_bebidas(request):
	bebidas = Bebida.objects.all()
	return render_to_response('lista_bebidas.html',{'lista':bebidas})

def sobre(request):
	html="<html><body>Proyecto de Ejemplo en MDW</body></html>"
	return HttpResponse(html)

def inicio(request):
	recetas=Receta.objects.all()
	bebidas=Bebida.objects.all()
	return render_to_response('inicio.html',{'recetas':recetas,'bebidas':bebidas})

def usuarios(request):
	usuarios=User.objects.all()
	recetas=Receta.objects.all()
	bebidas=Bebida.objects.all()
	return render_to_response('usuarios.html',{'usuarios':usuarios,'recetas':recetas,'bebidas':bebidas})

def lista_recetas(request):
	recetas= Receta.objects.all()
	return render_to_response('recetas.html',{'datos':recetas}, context_instance=RequestContext(request))

def detalle_receta(request, id_receta):
	dato=get_object_or_404(Receta, pk=id_receta)
	comentarios=Comentario.objects.filter(receta=dato)
	return render_to_response('receta.html',{'receta':dato,'comentarios':comentarios},context_instance=RequestContext(request))