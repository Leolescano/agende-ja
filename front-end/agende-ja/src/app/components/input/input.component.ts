import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputTextModule, FormsModule, CalendarModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() icon: string = '';
}
