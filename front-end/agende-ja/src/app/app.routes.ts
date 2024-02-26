import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ServiceComponent } from './pages/service/service.component';
import { TesteComponent } from './pages/teste/teste.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { PrePagComponent } from './pages/pre-pag/pre-pag.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'servico', component: ServiceComponent },
    { path: 'agendamento', component: AgendamentoComponent },
    { path: 'pre-pag', component: PrePagComponent },
    { path: 'teste', component: TesteComponent },
    { path: '**', redirectTo: 'home' }
    // Adicione outras rotas conforme necessário
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }