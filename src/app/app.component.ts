import { Component } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Produtos';

  products=['cd','disk','note'];

  MostraP(){
    location.href = "product-list.component.html"
 }
}


