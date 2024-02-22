import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {

  constructor(private config: PrimeNGConfig) { }

  ngOnInit() {
    this.config.setTranslation({
      apply: 'Aplicar',
      clear: 'Limpar',
      accept: 'Sim',
      reject: 'Não',
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje'
    });
  }
}
