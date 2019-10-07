import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertContainerComponent } from './alert-container/alert-container.component';
import { AlertContentComponent } from './alert-content/alert-content.component';
import { HeaderComponent } from './trangchu/header/header.component';
import { FooterComponent } from './trangchu/footer/footer.component';
import { MainComponent } from './trangchu/main/main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    AlertContainerComponent,
    AlertContentComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertContentComponent]
})
export class AppModule { }
