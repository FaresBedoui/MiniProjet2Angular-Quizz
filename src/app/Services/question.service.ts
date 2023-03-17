import { Injectable } from '@angular/core';
import { Question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly QUESTION_KEY = 'questions';

  constructor() { }

  getAllQuestions(): Question[] {
    return JSON.parse(localStorage.getItem(this.QUESTION_KEY) ?? '[]');
  }

  addQuestion(question: Question): void {
    let questions = this.getAllQuestions();
    questions.push(question);
    localStorage.setItem(this.QUESTION_KEY, JSON.stringify(questions));
  }

  deleteQuestion(question: Question): void {
    let questions = this.getAllQuestions();
    const index = questions.findIndex(q => q.id === question.id);
    if (index !== -1) {
      questions.splice(index, 1);
      localStorage.setItem(this.QUESTION_KEY, JSON.stringify(questions));
    }
  }

  updateQuestion(question: Question): void {
    let questions = this.getAllQuestions();
    // console.log(questions)
    const index = question.id;
    // console.log(index)
    if (index !== -1) {
      questions[index] = question;
      localStorage.setItem(this.QUESTION_KEY, JSON.stringify(questions));
    }
  }

  getQuestion(index: number): Question {
    let questions = this.getAllQuestions();
    return questions[index];
  }
}
