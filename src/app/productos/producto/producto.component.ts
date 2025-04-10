import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  /* productos = [
     { nombre: "productos 1", precio: 100 },
     { nombre: "productos 2", precio: 150 },
     { nombre: "productos 3", precio: 200 },
   ]
 }

  usuario = {
    nombre: 'jere',
    activo:false,
  };*/

  usuario = {
    nombre: ''
  };


}
