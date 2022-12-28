import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService {
  private lights = new BehaviorSubject<string>('verde')
  public lights$ = this.lights.asObservable() 
  private lastValue: string | null = 'verde'

  constructor() { 
    this.lights.subscribe((valor) => (this.lastValue = valor)) 
    interval(6000).subscribe(() => this.lastValue === 'verde' ? this.lights.next('rojo') : this.lights.next('verde'))
   
  }
}
