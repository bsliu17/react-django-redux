NAME=$(shell basename $(CURDIR) | tr A-Z a-z)
UNAME=$(shell basename $(CURDIR) | tr a-z A-Z)

\
django-install:
	pipenv install -r requirements.txt 
	pipenv shell

django:
	python src/manage.py migrate
	python src/manage.py runserver

.PHONY: django-install
