import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ScrollerModule } from 'primeng/scroller';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [ScrollerModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.css'
})
export class HoursComponent {
  horarios: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getHours();
  }


  getHours() {
    for (let i = 8; i <= 17; i++) {
      if (i == 12) { }
      else
        this.horarios.push(`${i}:00` + " - " + `${i + 1}:00`);
    }
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  @Output() onSelectedHour = new EventEmitter<any>();
  onSelect(value: any) {
    this.onSelectedHour.emit(value);
  }
}
