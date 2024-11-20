import { Component } from '@angular/core';
import { Horario } from '../horario';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  horario: Horario = {
    id: 1,
    name: 'Chicago'
  };
}
