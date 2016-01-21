/// <reference path="_reference.ts" />

import Person = objects.Person;
import Student = objects.Student;
console.log("Game Started...");

var person: Person = new Person("Gurpreet Benipal");
person.speaks();

var student: Student = new Student("Balpreet", 300822);
student.speaks();
student.studies();