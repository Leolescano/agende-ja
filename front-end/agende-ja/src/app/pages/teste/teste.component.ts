import { Component } from '@angular/core';
import { HoursComponent } from '../../components/hours/hours.component';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [HoursComponent],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {

}
