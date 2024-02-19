import { Component } from '@angular/core';
import { BtnJoinComponent } from '../../components/buttons/btn-join/btn-join.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnJoinComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
