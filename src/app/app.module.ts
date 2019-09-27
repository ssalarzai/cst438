import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
 import { HomeComponent } from './home/home.component';
 import { LoginComponent } from './login/login.component';
 import { ProductsComponent} from './products/products.component';
 import { NavComponent } from './nav/nav.component';
 import { CheckOutComponent } from './check-out/check-out.component';
 import { CartComponent } from './cart/cart.component';
 import { ItemDescriptionComponent } from './item-description/item-description.component';
 import { OrderSuccessComponent } from './order-success/order-success.component';
 import { MyOrdersComponent } from './my-orders/my-orders.component';
 import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
 import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
 import { ProductFormComponent } from './admin/product-form/product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCardModule } from '@angular/material';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    CheckOutComponent,
    CartComponent,
    ItemDescriptionComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsComponent,
    ProductFormComponent,
    //MatCardModule
    //
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
