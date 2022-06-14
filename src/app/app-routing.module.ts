import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'user',
    component: BoardUserComponent,
  },
  {
    path: 'mod',
    component: BoardModeratorComponent,
  },
  {
    path: 'admin',
    component: BoardAdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
