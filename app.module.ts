import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { LoginComponent } from './components/login/login.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { RemoveProductComponent } from './components/remove-product/remove-product.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'checkout', component: CheckOutComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'remove-product/:id', component: RemoveProductComponent},
  {path: 'update-product/:id', component: UpdateProductComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckOutComponent,
    LoginStatusComponent,
    LoginComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    RegisterComponent,
    LoginComponent,
    LoginStatusComponent,
    UpdateProductComponent,
    RemoveProductComponent,
    AddProductComponent,
    CheckOutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
