import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { LatIzComponent } from './components/lat-iz/lat-iz.component';
import { LatderComponent } from './components/latder/latder.component';
import { ProductosComponent } from './components/body/productos/productos.component';
import { LoginComponent } from './components/header/login/login.component';
import { CategoriasComponent } from './components/lat-iz/categorias/categorias.component';
import { CarritoComponent } from './components/latder/carrito/carrito.component';
import { NuevoUserComponent } from './components/body/nuevo-user/nuevo-user.component';
import { PrincipalComponent } from './components/body/principal/principal.component';
import { VerCarritoComponent } from './components/body/ver-carrito/ver-carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LatIzComponent,
    LatderComponent,
    ProductosComponent,
    LoginComponent,
    CategoriasComponent,
    CarritoComponent,
    NuevoUserComponent,
    PrincipalComponent,
    VerCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
