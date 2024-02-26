import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/buttons/button.component';

@Component({
  selector: 'app-pre-pag',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './pre-pag.component.html',
  styleUrl: './pre-pag.component.css'
})
export class PrePagComponent {
  @Input() chave: string = '123.456.789-00'
  pago: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.pago = false;
    }, 10000);
  }
  onSelected() {
    const queryParams = { isHidden: false, };

    this.router.navigate(['/agendamento'], { queryParams: queryParams });
  }
}
