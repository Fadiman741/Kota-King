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
import { MenuComponent } from './menu/menu.component';
import { WorkersComponent } from './workers/workers.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [									
    AppComponent,
      HomepageComponent,
      NavbarComponent,
      OurmissionComponent,
      ContactComponent,
      PupularMenusComponent,
      MenuComponent,
      WorkersComponent,
      FooterComponent,
      EventsComponent
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
