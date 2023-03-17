import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  questionForm!: FormGroup;
  question!: Question;
  questionIndex!: number;

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let A = parseInt(params.get('i')!);
      this.questionIndex = A;
      this.question = this.questionService.getQuestion(this.questionIndex);
    
      this.questionForm = this.formBuilder.group({
        subject: [this.question.subject, Validators.required],
        statement: [this.question.statement, Validators.required],
        choices: this.formBuilder.group({
          choice1: [this.question.choices.choice1, Validators.required],
          choice2: [this.question.choices.choice2, Validators.required],
          choice3: [this.question.choices.choice3, Validators.required],
          choice4: [this.question.choices.choice4, Validators.required],
          correctChoice: [this.question.choices.correctChoice, Validators.required]
        })
      });
    });
    
  }

  onSubmit() {
    const updatedQuestion: Question = {
      id : this.questionIndex,
      subject: this.questionForm.value.subject,
      statement: this.questionForm.value.statement,
      choices: this.questionForm.value.choices
    };

    this.questionService.updateQuestion(updatedQuestion);
    this.router.navigate(['/questionsList']);
  }
}
