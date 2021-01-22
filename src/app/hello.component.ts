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

Backend-Entwickler  / Spring Boot Fizz Buzz

 

Write a little Spring Boot Application with an REST-API, that receives an input value and returns a result list in JSON format !

By entering a number the application returns a list of values starting from 1 up the entered number considering the following rules:

 

If number is divisible by 3, then you need to output Fizz
If number is divisible by 5, then you need to output Buzz
If number is divisible by 3 and 5 both, then you need to output FizzBuzz
Else you just need to output the next number
 

Hints: Use TDD, explain the steps you took, and mind error conditions. There is no need to develop a user interface. 

 

Frontend-Entwickler  / Angular CRUD Application

 

Write a small Angular Application to manage persons.

A person has the following attributes: id, first name, last name, email address.

You should be able to list all persons by name, show details for a person, edit a person and delete a person from the list.

It’s sufficient to have a mock/fake backend-service, but requests / responds should be provided in JSON-Format.

 

Hints: Try to follow an TDD approach and document your development steps and explain the decisions you took.

 

 */
