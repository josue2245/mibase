import { Routes } from '@angular/router';
import { UsersComponent } from '../app/components/users/users.component';
import { BienvenidoComponent } from '../app/components/bienvenido/bienvenido.component';
import { ContenidoComponent } from '../app/components/contenido/contenido.component';


export const routes: Routes = [
    {path:'usuario',component:UsersComponent},
    {path:'bienvenido',component:BienvenidoComponent},
    {path:'lugares',component:ContenidoComponent},
    
];
