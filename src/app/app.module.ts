import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaHomeComponent,
    PersonajesComponent,
    AboutUsComponent,
    InformacionComponent,
    AddCharactersComponent,
    CharactersDetailsComponent,
    CharactersListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
