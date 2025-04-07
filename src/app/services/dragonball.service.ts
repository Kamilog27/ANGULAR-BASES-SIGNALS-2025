import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const loadFromLocalStorage=():Character[]=>{
    const characters = localStorage.getItem('characters');
    
    return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallServices {
    constructor() { }
    characters=signal<Character[]>(loadFromLocalStorage());
    saveToLocalStorage=effect(()=>{
        // console.log(`Character count ${this.characters().length}`)
        localStorage.setItem('characters',JSON.stringify(this.characters()));
    })

    // powerClasses=computed(()=>{
    //     return {
    //         'text-danger':true
    //     }
    // })
    addCharacter (character:Character){
        this.characters.update(
            (list)=>[...list,character]
        );
    }
}