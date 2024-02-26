import { Component } from '@angular/core';
import { HoursComponent } from '../../components/hours/hours.component';
import { BoxComponent } from '../../components/box/box.component';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [HoursComponent, BoxComponent],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {

}
