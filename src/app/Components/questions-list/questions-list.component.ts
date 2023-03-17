import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = []; // initialisation avec un tableau vide

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getAllQuestions();
  }

  onDelete(index: number) {
    const questionToDelete = this.questions[index];
    if (confirm("Voulez-vous vraiment supprimer cette question ?")) {
      this.questionService.deleteQuestion(questionToDelete);
      this.questions.splice(index, 1);
    }
  }
}
