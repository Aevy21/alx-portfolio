# Generated by Django 4.2.15 on 2024-08-13 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_category_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='monthlybudget',
            name='month',
            field=models.DateField(),
        ),
    ]
