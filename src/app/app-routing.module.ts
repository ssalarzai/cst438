import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';
import { ItemDescriptionComponent } from './item-description/item-description.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';



   const routes: Routes = [
         
         { path: '', component: HomeComponent },
         { path: 'cart', component: CartComponent },
         { path: 'check-out', component: CheckOutComponent },
         { path: 'order-success', component: OrderSuccessComponent },
         { path: 'login', component: LoginComponent },
         { path: 'my/orders', component: MyOrdersComponent },
         { path: 'item-description', component: ItemDescriptionComponent},
         { path: 'item-description', component: ItemDescriptionComponent},
         { path: 'admin/products', component: AdminProductsComponent},
         { path: 'admin/products/new', component: ProductFormComponent},
         { path: 'admin/orders', component: AdminOrdersComponent},
         { path: 'products', component: ProductsComponent}
       ]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
