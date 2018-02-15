import { RouterModule, Routes } from "@angular/router";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import {  TareasComponent} from "./components/tareas/tareas.component";
import { AppComponent } from "./app.component";

const APP_ROUTES: Routes = [
    {path:  'usuarios', component: UsuariosComponent },
    {path:  'tareas', component: TareasComponent},
    {path: '**', pathMatch: 'full', redirectTo:'Tareas'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
