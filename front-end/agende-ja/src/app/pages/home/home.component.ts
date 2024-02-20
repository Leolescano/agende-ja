import { Component } from '@angular/core';
import { BtnJoinComponent } from '../../components/buttons/btn-join/btn-join.component';
import { BtnRegComponent } from '../../components/buttons/btn-reg/btn-reg.component';
import { Script } from 'vm';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnJoinComponent, BtnRegComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
}


