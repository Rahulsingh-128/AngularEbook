import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookInputComponent } from './book-input/book-input.component';
import { BooksComponent } from './books/books.component';
import { DirectivesLearningComponent } from './directives-learning/directives-learning.component';
import { PipesLearningComponent } from './pipes-learning/pipes-learning.component';
import { authGuard } from './guards/AuthGuard';
import { leaveView } from './guards/LeavePage';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
const childsroutes:Routes=[
  {
    path:'directive',
    component:DirectivesLearningComponent
  },
  {
    path:'pipes',
    component:PipesLearningComponent
  }
  
]
const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    children:childsroutes
  },
  {
    path:'showBook',
    component:BooksComponent
  },
  {
    path:'login',
    component:AdminLoginComponent
  },
  {
    path:'add',
    component:BookInputComponent,
    canActivate:[authGuard],
    canDeactivate:[leaveView]
  },
  {
    path:'editBook/:id',
    component:BookInputComponent
  },
  {
    path:'directive',
    component:DirectivesLearningComponent
  },
  {
    path:'directive2',
    component:DirectivesLearningComponent
  },
  {
    path:'pipes',
    component:DirectivesLearningComponent
  },
  {
    path:'editpic/:id',
    component:FileUploadComponent
  },
  {
    path:'**',
    component:ViewNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
