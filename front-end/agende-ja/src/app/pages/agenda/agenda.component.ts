import { Component } from '@angular/core';
import { DaysComponent } from '../../components/days/days.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { DateComponent } from '../../components/date/date.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HoursComponent } from '../../components/hours/hours.component';


@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [DaysComponent, CalendarComponent, DateComponent, HeaderComponent, HoursComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  horarios: string[] = [];
  isHidden: boolean = true;

  constructor() {
    for (let i = 8; i <= 18; i++) {
      this.horarios.push(`${i}:00`);
    }
  }

  onSelected(value: Date) {
    console.log(value)
    this.isHidden = !this.isHidden;
  }
}
