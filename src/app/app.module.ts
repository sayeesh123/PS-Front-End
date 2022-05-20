import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModules } from './MaterialModules/materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Services } from './Services/services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModules,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [Services,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
