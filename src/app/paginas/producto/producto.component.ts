import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-producto',
  imports: [FormsModule, NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  /*
  productos = [
  {nombre: 'producto 1', precio:100},
  {nombre: 'producto 2', precio:200},
  {nombre: 'producto 3', precio:300},
  ];
  
  
  usuario= {
  nombre :'jere',
  activo: true
  };
  */

  productos = [
   { img: '', nombre: '', precio:2000},
   { img: '', nombre: '', precio:2000},
  ]
}
