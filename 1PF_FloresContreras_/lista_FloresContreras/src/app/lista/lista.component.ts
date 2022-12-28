import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  public listaAlumnos = ['Vianey','Nicole','Luz','Barbara','Alfredo','Alfredo','Santi'];
  public calificaciones = ['Vianey : 8','Nicole : 10','Luz : 10','Barbara : 5','Alfredo : 8','Alfredo : 8','Santi : 5'];

  public listaFiltrada = [''];

  constructor() { }

  ngOnInit(): void {
  }

  //ok
  reprobados = () =>{
    this.listaFiltrada = this.calificaciones.filter(element => element.endsWith("5",11,))
  }

  resetFilter = () =>{
    this.listaFiltrada = ['']
  }
  //ok
}
