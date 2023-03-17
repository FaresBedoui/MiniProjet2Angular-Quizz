// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { QuestionsListComponent } from './Components/questions-list/questions-list.component';
import { EditQuestionComponent } from './Components/edit-question/edit-question.component';
import { ErrorsComponent } from './Components/errors/errors.component';


import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '//questionsList', pathMatch: 'full' },
  { path: 'addQuestion', component: AddQuestionComponent },
  { path: 'questionsList', component: QuestionsListComponent },
  { path: 'questionsList/edit/:i', component: EditQuestionComponent },
  { path: '404', component: ErrorsComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
