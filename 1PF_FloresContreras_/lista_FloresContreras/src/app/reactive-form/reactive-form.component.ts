import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {


  constructor(private router:Router) { }

  nombre = new FormControl('', [Validators.required])
  apellido =new FormControl('', [Validators.required])

registreForm = new FormGroup({

  fisrtName: this.nombre,
  apellido:this.apellido
}


)

singUp(){

this.router.navigateByUrl('/lista');

}

}


