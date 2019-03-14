import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: 'home',component: AppComponent,
    children: [
      {path:'', redirectTo:'product', pathMatch: 'full'},
      {path:'product', component: ProductsComponent},
      {path: 'product/:id', component: ProductDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
