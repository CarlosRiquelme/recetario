#encoding: utf-8
from django.forms import ModelForm
from django import forms
from principal.models import Receta, Comentario, Bebida

class ContactoForm(forms.Form):
	correo=forms.EmailField(label='Tu correo electronico')
	mensaje=forms.CharField(widget=forms.Textarea)

class RecetaForm(ModelForm):
	class Meta:
		model = Receta

class ComentarioForm(ModelForm):
	class Meta:
		model = Comentario

class BebidaForm(ModelForm):
	class Meta:
		model = Bebida