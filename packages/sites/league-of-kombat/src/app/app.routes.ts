import { Routes } from '@angular/router';
import { EscolhaDeEquipeComponent } from './escolha-de-equipe/escolha-de-equipe.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {
        path: 'escolha-de-equipe',
        component: EscolhaDeEquipeComponent
    },
    {
        path: '**',
        component: MenuComponent
    }
];
