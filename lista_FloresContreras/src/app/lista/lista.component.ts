import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  public listaAlumnos = ['Vianey','Nicole','Luz','Barbara','Alfredo','Alfredo','Santi'];
  public listaFiltrada = [''];

  constructor() { }

  ngOnInit(): void {
  }

  //ok
  startWithA = () =>{
    this.listaFiltrada = this.listaAlumnos.filter(element => element.startsWith("A",0,))
  }
  startWithJ = () =>{
    this.listaFiltrada = this.listaAlumnos.filter(element => element.startsWith("J",0,))
  }
  resetFilter = () =>{
    this.listaFiltrada = ['']
  }
  //ok
}
