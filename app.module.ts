import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TopdfComponent} from './topdf/topdf.component';
import {ToimageComponent} from './toimage/toimage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopdfComponent,
    ToimageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
