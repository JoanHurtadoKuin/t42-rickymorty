import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent implements OnInit {


  character: Characters = {
    name:  '',
    status:  '',
    species:  '',
    gender:  '',
    origin:  '',
    location:  '',
    image:  ''
  };
  isCharacterAdded = false;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

    // Add New
    addCharacter(): void {
      const data = {
        name: this.character.name,
        status: this.character.status,
        species:  this.character.species,
        gender:  this.character.gender,
        origin:  this.character.origin,
        location:  this.character.location,
        image:  this.character.image
      };
      if (!data.name) {
        alert('Please add name!');
        return;
      }

      this.charactersService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.isCharacterAdded = true;
          },
          error => {
            console.log(error);
          });
    }

    // Reset on adding new
    newCharacter(): void {
      this.isCharacterAdded = false;
      this.character = {
        name:  '',
        status:  '',
        species:  '',
        gender:  '',
        origin:  '',
        location:  '',
        image:  ''
      };
    }
}
