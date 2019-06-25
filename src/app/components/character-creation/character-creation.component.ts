import { Component } from '@angular/core';
import { CharacterOptions } from '../../models/characterOptions'
 
@Component({
    selector: "character-creation-component",
    templateUrl: "./character-creation.component.html",
    styleUrls: ["./character-creation.components.css"]
})
export class CharacterCreationComponent{
    character = {
        race: '--Choose--',
        class: '--Choose--',
        gender: undefined,
        name: undefined
    }

    characterComplete: boolean = false;

    races = CharacterOptions.races;
    classes = CharacterOptions.classes;
    genders = CharacterOptions.genders;

    changeRace(race: string){
        this.character.race = race;
        this.checkCompleted();
    }

    changeClass(newClass: string){
        this.character.class = newClass;
        this.checkCompleted();
    }

    changeGender(gender: string){
        this.character.gender = gender;
        this.checkCompleted();
    }

    changeName(){
        this.checkCompleted();
    }

    checkCompleted(){
         this.characterComplete = this.character.race !== "--Choose--"
            && this.character.class !== "--Choose--"
            && this.character.gender !== undefined
            && this.character.name
    }

    createCharacter(){
        if(!this.characterComplete){
            return;
        }

        console.log(this.character);
    }
}
