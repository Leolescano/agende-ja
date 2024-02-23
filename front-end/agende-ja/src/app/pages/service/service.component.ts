import { Component } from '@angular/core';
import { RadioComponent } from '../../components/radio/radio.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/buttons/button.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RadioComponent, HeaderComponent, ButtonComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
