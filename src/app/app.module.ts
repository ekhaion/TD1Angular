import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { CapardComponent } from './capard/capard.component';
import { BienvenudosComponent } from './bienvenudos/bienvenudos.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FourOhFourComponent,
    HomePageComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    CapardComponent,
    BienvenudosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
