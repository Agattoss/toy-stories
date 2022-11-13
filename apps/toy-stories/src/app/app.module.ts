import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< Updated upstream

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
=======
import { HeaderComponent } from './homepage/cointeiners/header/header.component';
import { HeroComponent } from './homepage/components/hero/hero.component';
import { FooterComponent } from './homepage/cointeiners/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
  ],
>>>>>>> Stashed changes
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
