import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModules } from './MaterialModules/materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Services } from './Services/services';
import { HomeComponent } from './Home/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModules,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
