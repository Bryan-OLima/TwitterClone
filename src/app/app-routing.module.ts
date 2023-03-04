import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';

const twitter: string = 'Twitter'

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    title:`Página Inicial / ${twitter}`
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: `Erro 404 / ${twitter}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
