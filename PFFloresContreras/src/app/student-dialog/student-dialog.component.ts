import { Component,Inject} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'; 
import { MAT_DIALOG_DATA }from '@angular/material/dialog';
import { Student } from '../Models/student';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent  {

  nombreControl = new FormControl('')
  apellidoControl = new FormControl('')
  notaControl = new FormControl('')
  studentForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    nota: this.notaControl,
  })

  constructor(private readonly dialoRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null, 
  ){
    console.log(data);
    if(data){
      this.studentForm.patchValue(data)
    }
  }

  close(){
    this.dialoRef.close()
  }
}