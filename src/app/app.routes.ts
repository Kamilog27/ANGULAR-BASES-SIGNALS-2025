import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/heroe/heroe-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [{
    path:'',
    component:CounterPageComponent
},{
    path:'heroe',
    component:HeroPageComponent
},{
    path:'dragonball',
    component:DragonballPageComponent
},{
    path:'dragonball-super',
    component:DragonballSuperPageComponent
}
,{
    path:'**',
    redirectTo:''
}];
