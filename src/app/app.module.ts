import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';

import { MaterialModule } from 'src/Material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsListComponent } from './Components/questions-list/questions-list.component';
import { EditQuestionComponent } from './Components/edit-question/edit-question.component';
import { ErrorsComponent } from './Components/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    QuestionsListComponent,
    EditQuestionComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
