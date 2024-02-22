import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  day: number;

  constructor() {
    const now = new Date();
    this.day = now.getDate();
  }

  getMonth() {
    const now = new Date();
    const nowMonth = new Date(now.getMonth());
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const month = months[Number(nowMonth)];
    return month;
  }

}
