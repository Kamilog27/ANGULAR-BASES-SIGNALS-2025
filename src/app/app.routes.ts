import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/heroe/heroe-page.component';

export const routes: Routes = [{
    path:'',
    component:CounterPageComponent
},{
    path:'heroe',
    component:HeroPageComponent
}];
