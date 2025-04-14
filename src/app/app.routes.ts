import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactosComponent },
    { path: 'productos', component: ProductoComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'quienes somos', component: QuienessomosComponent },


    

];
