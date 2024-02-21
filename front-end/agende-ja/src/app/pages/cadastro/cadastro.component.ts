import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from "../../components/buttons/button.component";
import { InputComponent } from '../../components/input/input.component';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css'],
    standalone: true,
    imports: [HeaderComponent, InputTextModule, InputComponent, ButtonComponent]
})
export class CadastroComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}