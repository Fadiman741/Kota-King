import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurmissionComponent } from './ourmission/ourmission.component';
import { ContactComponent } from './contact/contact.component';
import { PupularMenusComponent } from './pupular-menus/pupular-menus.component';

@NgModule({
  declarations: [					
    AppComponent,
      HomepageComponent,
      NavbarComponent,
      OurmissionComponent,
      ContactComponent,
      PupularMenusComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
