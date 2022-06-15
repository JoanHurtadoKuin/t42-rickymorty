import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
    path: 'home',
    component: PaginaHomeComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'informacion/:id',
    component: InformacionComponent,
  },
  {
    path: 'characters',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: CharactersListComponent,
  },
  {
    path: 'characters/:id',
    component: CharactersDetailsComponent,
  },
  {
    path: 'add',
    component: AddCharactersComponent,
  },
  {path:'register', component:  RegisterComponent},
  {path:'login', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
