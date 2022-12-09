import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {
url :string= '/portalAdministrativo';
  constructor(private router:Router) { }

  nombre = new FormControl()
  apellido = new FormControl()

registreForm = new FormGroup({

  fisrtName: this.nombre,
  apellido:this.apellido
}


)

singUp(){

this.router.navigate([this.url]);
window.alert('Sing up');
}

}
