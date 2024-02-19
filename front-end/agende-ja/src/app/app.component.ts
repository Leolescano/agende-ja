import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnJoinComponent } from './components/buttons/btn-join/btn-join.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agende-ja';
}
