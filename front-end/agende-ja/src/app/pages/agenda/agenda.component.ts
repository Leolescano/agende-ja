import { Component } from '@angular/core';
import { DaysComponent } from '../../components/days/days.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [DaysComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

}
