import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { BookCardComponent } from './book-card/book-card.component';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { BookInputComponent } from './book-input/book-input.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { DirectivesLearningComponent } from './directives-learning/directives-learning.component';
import { PipesLearningComponent } from './pipes-learning/pipes-learning.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { DatePipe } from '@angular/common'
import { provideHttpClient } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} 
from 
'@angular/material/icon'
import {MatListModule} 
from 
'@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { userReducer } from './ngrx/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    BooksComponent,
    DecoratorComponent,
    BookCardComponent,
    OrderbyPipe,
    BookInputComponent,
    AdminLoginComponent,
    HomeComponent,
    DirectivesLearningComponent,
    PipesLearningComponent,
    ViewNotFoundComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    StoreModule.forRoot({counter:counterReducer, user:userReducer}, {})
  ],
  providers: [DatePipe,provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
