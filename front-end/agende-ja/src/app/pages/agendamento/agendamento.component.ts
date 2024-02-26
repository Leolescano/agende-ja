import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { BoxComponent } from '../../components/box/box.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [RouterModule, BoxComponent, HeaderComponent],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css'
})
export class AgendamentoComponent {
  isHidden: boolean = true;


  constructor(private route: ActivatedRoute, private router: Router) { }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      if (params.hasOwnProperty('isHidden') && params['isHidden'] === 'false') {
        this.isHidden = !this.isHidden; // Inverte o valor de isHidden
      }
    });
  }
}
