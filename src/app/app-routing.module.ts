import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentoComponent } from './components/pages/orcamento/orcamento.component';
import { DashBoardComponent } from './components/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent
  },
  {
    path: 'novoorcamento',
    component: OrcamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
