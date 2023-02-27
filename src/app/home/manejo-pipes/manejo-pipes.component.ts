import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manejo-pipes',
  templateUrl: './manejo-pipes.component.html',
  styleUrls: ['./manejo-pipes.component.css']
})
export class ManejoPipesComponent implements OnInit {

  arreglo: string[]=['auto','casa','arbol','mascota']
  fecha: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
