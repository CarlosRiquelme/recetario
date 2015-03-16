# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('principal', '0002_receta'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comentario',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('texto', models.TextField(help_text=b'Tu Comentario', verbose_name=b'Comentario')),
                ('receta', models.ForeignKey(to='principal.Receta')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
