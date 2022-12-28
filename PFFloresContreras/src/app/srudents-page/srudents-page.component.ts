import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../Models/student';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';


@Component({
  selector: 'app-srudents-page',
  templateUrl: './srudents-page.component.html',
  styleUrls: ['./srudents-page.component.css']
})
export class SrudentsPageComponent{

  students: Student[] = [
    new Student(1,"Joaquin","Salas","20",true),
    new Student(2,"Pedro","Castillo","12",true),
    new Student(3,"Keiko","Fujimori","12",true),
    new Student(4,"Alan","Garcia","12",true),  
  ]

  displayedColumns = ['id','nombre','apellido','nota','esActivo','editar','eliminar']

  constructor(private readonly dialogService: MatDialog){}

  addStudent(){
   const dialog = this.dialogService.open(StudentDialogComponent)

   dialog.afterClosed().subscribe((value) =>{
    if (value){
      const lastId = this.students[this.students.length - 1]?.id;
      this.students = [...this.students, new Student(lastId+1, value.nombre, value.apellido, value.nota, true)];
    }
   })
  }

  removeStudent(student: Student){
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }

  editStudent(student: Student){
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) =>{
      if (data){
        this.students = this.students.map((stu) => stu.id === student.id?{...stu, ...data}:stu)
      }
    })
  }
}