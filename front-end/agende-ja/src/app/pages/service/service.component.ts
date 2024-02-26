import { Component } from '@angular/core';
import { RadioComponent } from '../../components/radio/radio.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/buttons/button.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RadioComponent, HeaderComponent, ButtonComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
}
