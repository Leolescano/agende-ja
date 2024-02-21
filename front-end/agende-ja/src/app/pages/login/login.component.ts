import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/buttons/button.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [HeaderComponent, InputComponent, ButtonComponent, RouterModule]
})
export class LoginComponent {
  constructor(private router: Router) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
}