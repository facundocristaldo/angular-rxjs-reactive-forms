import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl("")
  },[
     MathValidators.isCorrect("answer","a","b")
  ])
  constructor() { }

  ngOnInit(): void {
  }

  randomNumber():number{
    return Math.floor(Math.random() * 10)
  }
  
  get a(){
    return this.mathForm.value.a;
  }
  get b(){
    return this.mathForm.value.b;
  }
  
}
