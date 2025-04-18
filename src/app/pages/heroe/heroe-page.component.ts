import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    templateUrl:'./heroe-page.component.html',
    imports:[UpperCasePipe]
})
export class HeroPageComponent{
    name  = signal('Ironman');
    age  = signal(45);

    getHeroDescription(){

        return `${ this.name() } - ${ this.age() }`;
    }
    heroeDescription= computed(()=>{
        const description=`${this.name()} - ${this.age()}`;
        return description;
    });
    capitalizedName = computed(()=>this.name().toUpperCase());
    changeHero(){
       this.name.set('Spiderman');
        this.age.set(22);
    }
    resetForm(){
        this.name.set('Ironman');
        this.age.set(45);

    }
    changeAge(){
        this.age.set(60);
    }
}