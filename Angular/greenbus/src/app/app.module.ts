import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookBusComponent } from './book-bus/book-bus.component';
import { HeaderComponent } from './book-bus/header/header.component';
import { FooterComponent } from './book-bus/footer/footer.component';
import { SelectBusComponent } from './book-bus/select-bus/select-bus.component';
import { BusSelectionService } from './services/bus-selection.service';
import { LoginComponent } from './book-bus/login/login.component';
import { RegisterComponent } from './book-bus/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    BookBusComponent,
    HeaderComponent,
    FooterComponent,
    SelectBusComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    BusSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
