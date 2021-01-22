import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

/*
Test Driven Development :
http://learnitmyway.com/tdd-example/
https://openclassrooms.com/fr/courses/3504461-testez-linterface-de-votre-site/4270571-apprenez-le-test-driven-development-tdd

Recherche Google : fizzbuzz spring boot
https://github.com/joow/FizzBuzz-SpringBoot

https://spring.io/guides/tutorials/rest/


Angular CRUD cvtech:https://github.com/aymensellaouti/cvTech

Backend-Entwickler / Spring Boot Fizz Buzz

Écrivez une petite application Spring Boot avec une API REST, qui reçoit une valeur d'entrée et renvoie une liste de résultats au format JSON!

En entrant un nombre, l'application renvoie une liste de valeurs à partir de 1 jusqu'au nombre saisi en tenant compte des règles suivantes:

Si le nombre est divisible par 3, vous devez sortir Fizz
Si le nombre est divisible par 5, vous devez générer Buzz
Si le nombre est divisible par 3 et 5 à la fois, vous devez sortir FizzBuzz
Sinon, il vous suffit de sortir le numéro suivant
 

Conseils: utilisez TDD, expliquez les étapes que vous avez suivies et faites attention aux conditions d'erreur. Il n'est pas nécessaire de développer une interface utilisateur.

 

Application Frontend-Entwickler / Angular CRUD

Écrivez une petite application angulaire pour gérer les personnes.

Une personne possède les attributs suivants: identifiant, prénom, nom, adresse e-mail.

Vous devriez pouvoir répertorier toutes les personnes par nom, afficher les détails d'une personne, modifier une personne et supprimer une personne de la liste.

Il suffit d'avoir un faux / faux service de backend, mais les demandes / réponses doivent être fournies au format JSON.

 

Conseils: essayez de suivre une approche TDD et documentez vos étapes de développement et expliquez les décisions que vous avez prises.


*********************************************************************************
Backend-Entwickler  / Spring Boot Fizz Buzz

 

Write a little Spring Boot Application with an REST-API, that receives an input value and returns a result list in JSON format !

By entering a number the application returns a list of values starting from 1 up the entered number considering the following rules:

 

If number is divisible by 3, then you need to output Fizz
If number is divisible by 5, then you need to output Buzz
If number is divisible by 3 and 5 both, then you need to output FizzBuzz
Else you just need to output the next number
 

Hints: Use TDD, explain the steps you took, and mind error conditions. There is no need to develop a user interface. 

 

Frontend-Entwickler  / Angular CRUD Application

 

Write a small Angular Application to manage persons.

A person has the following attributes: id, first name, last name, email address.

You should be able to list all persons by name, show details for a person, edit a person and delete a person from the list.

It’s sufficient to have a mock/fake backend-service, but requests / responds should be provided in JSON-Format.

 

Hints: Try to follow an TDD approach and document your development steps and explain the decisions you took.

 */
