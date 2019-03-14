import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  lista = [ 
    {id: 1,"name": "anderson"},
    {id: 2,"name": "miguel"}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  evento(lista){
    this.router.navigate(['/home/product',lista.id]);
  }

}
