import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() producto : string;

  @Output() fnProducto = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  
  gvproducto(){
    this.fnProducto.emit(this.producto);
  }
}
