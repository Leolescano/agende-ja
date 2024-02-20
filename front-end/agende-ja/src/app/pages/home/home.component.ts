import { Component } from '@angular/core';
import { BtnJoinComponent } from '../../components/buttons/btn-join/btn-join.component';
import { BtnRegComponent } from '../../components/buttons/btn-reg/btn-reg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnJoinComponent, BtnRegComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
