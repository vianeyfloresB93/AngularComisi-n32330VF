import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cursos } from 'src/app/models/cursos.models';
import { CursoDialogComponent } from 'src/app/shared/components/curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-pagina-cursos',
  templateUrl: './pagina-cursos.component.html',
  styleUrls: ['./pagina-cursos.component.scss']
})
export class PaginaCursosComponent {
  cursos: Cursos[] = [
    new Cursos(1,"Español","Brigitte Ramirez"),
    new Cursos(2,"Matemáticas","Alfonso Ortega"),
    new Cursos(3,"Educación Fisica","Miranda Rios"),
    new Cursos(4,"Musica","Florencia  Tapia"),  
  ]

  displayedColumns = ['id','nombre','profesor','editar','eliminar']

  constructor(private readonly dialogService: MatDialog){}

  addCurso(){
   const dialog = this.dialogService.open(CursoDialogComponent)

   dialog.afterClosed().subscribe((value) =>{
    if (value){
      const lastId = this.cursos[this.cursos.length - 1]?.id;
      this.cursos = [...this.cursos, new Cursos(lastId+1, value.nombre, value.profesor)];
    }
   })
  }

  removeCurso(curso: Cursos){
    this.cursos = this.cursos.filter((cur) => cur.id !== curso.id);
  }

  editCurso(curso: Cursos){
    const dialog = this.dialogService.open(CursoDialogComponent, {
      data: curso,
    })

    dialog.afterClosed().subscribe((data) =>{
      if (data){
        this.cursos = this.cursos.map((cur) => cur.id === curso.id?{...cur, ...data}:cur)
      }
    })
  }
}
