import { Component } from '@angular/core';
import { DaysComponent } from '../../components/days/days.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { DateComponent } from '../../components/date/date.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [DaysComponent, CalendarComponent, DateComponent, HeaderComponent,],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

}
