import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {


characters?: Characters[];
currentCharacters: Characters = {};
currentIndex = -1;
name = '';

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

   // Get list
   getAllCharacters(): void {
    this.characterService.list()
      .subscribe(
        (characters: any) => {
          this.characters = characters;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Delete action
  deleteCharacters(id:number){
    this.characterService.delete(id)
    .subscribe(
      response => {
        this.getAllCharacters();
      },
      error => {
        console.log(error);
      });
  }

  // Search items
  searchByName(): void {
    this.characterService.filterByName(this.name)
      .subscribe(
        characters => {
          this.characters = characters;
        },
        error => {
          console.log(error);
        });
  }
}
