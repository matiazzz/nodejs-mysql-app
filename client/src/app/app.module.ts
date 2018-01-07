import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PosticksContainerComponent } from './components/posticks-container/posticks-container.component';
import { PostickService } from './services/postick/postick.service';

@NgModule({
  declarations: [
    AppComponent,
    PosticksContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostickService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
