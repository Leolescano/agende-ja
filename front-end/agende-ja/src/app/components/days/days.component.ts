import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-days',
  standalone: true,
  imports: [],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css'
})

export class DaysComponent {
  array = Array.from({ length: this.getDaysInCurrentMonth() }, (_, i) => i + 1);
  selected = new Date().getDate();

  getDaysInCurrentMonth() {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }

  getDayOfWeek(day: number) {
    const now = new Date();
    const nowWithDay = new Date(now.getFullYear(), now.getMonth(), day);
    const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const strDay = days[nowWithDay.getDay()];
    return strDay.charAt(0).toUpperCase() + strDay.slice(1);
  }

  selectDay(day: number) {
    this.selected = day;
  }
}
