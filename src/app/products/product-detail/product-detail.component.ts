import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }
    
  ngOnInit() {
    //no tan entendible 
    this.route.params.subscribe(
      params => this.id = params['id']);
  }

  

}
