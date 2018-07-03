NAME=$(shell basename $(CURDIR) | tr A-Z a-z)
UNAME=$(shell basename $(CURDIR) | tr a-z A-Z)

\
django-install:
	pipenv install -r django_backend/requirements.txt 
	pipenv shell

django:
	python django_backend/src/manage.py migrate
	python django_backend/src/manage.py runserver

.PHONY: django-install
