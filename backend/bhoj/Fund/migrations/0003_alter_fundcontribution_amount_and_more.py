# Generated by Django 4.2.5 on 2023-09-28 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Fund', '0002_alter_fundcontribution_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fundcontribution',
            name='amount',
            field=models.TextField(max_length=20),
        ),
        migrations.AlterField(
            model_name='fundcontribution',
            name='organization',
            field=models.TextField(max_length=255),
        ),
        migrations.AlterField(
            model_name='fundcontribution',
            name='phone',
            field=models.TextField(max_length=20),
        ),
    ]
