import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { CoreHeaderComponent } from './core/core-header/core-header.component';
import { CartComponent } from './core/cart/cart.component';
import { WishlistComponent } from './core/wishlist/wishlist.component';
import { SigninComponent } from './core/signin/signin.component';
import { SignupComponent } from './core/signup/signup.component';
import { FooterComponent } from './core/footer/footer.component';
import { ItemCardComponent } from './core/item-card/item-card.component';
import { ProductComponent } from './core/product/product.component';
import { ProductsComponent } from './core/products/products.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    CoreHeaderComponent,
    CartComponent,
    WishlistComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    ItemCardComponent,
    ProductComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
