import { Component, OnInit } from '@angular/core';

import {Produto} from "src/app/products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //products: Produto;
  products=['cd','disk','note'];

  constructor() { }

  ngOnInit(): void {
    
  }

  share(){
    
  }

}
