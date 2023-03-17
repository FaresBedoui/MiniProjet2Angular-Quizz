// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { QuestionService } from 'src/app/Services/question.service';

// @Component({
//   selector: 'app-add-question',
//   templateUrl: './add-question.component.html',
//   styleUrls: ['./add-question.component.css']
// })
// export class AddQuestionComponent implements OnInit {
//   questionForm!: FormGroup;

//   constructor(private fb: FormBuilder, private questionService: QuestionService) { }

//   ngOnInit(): void {
//     this.questionForm = this.fb.group({
//       subject: ['', Validators.required],
//       statement: ['', Validators.required],
//       choices: this.fb.group({
//         choice1: ['', Validators.required],
//         choice2: ['', Validators.required],
//         choice3: ['', Validators.required],
//         choice4: ['', Validators.required],
//         correctChoice: ['', Validators.required]
//       }),
//     });
//   }

//   onSubmit(): void {
//     if (this.questionForm.valid) {
//       const question = this.questionForm.value;
//       this.questionService.addQuestion(question);
//       this.questionForm.reset();
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/Services/question.service';
import { Question } from 'src/app/Models/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm!: FormGroup;

  constructor(private fb: FormBuilder, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      subject: ['', Validators.required],
      statement: ['', Validators.required],
      choices: this.fb.group({
        choice1: ['', Validators.required],
        choice2: ['', Validators.required],
        choice3: ['', Validators.required],
        choice4: ['', Validators.required],
        correctChoice: ['', Validators.required]
      }),
    });
  }

  onSubmit(): void {
    if (this.questionForm.valid) {
      const question = new Question();
      question.subject = this.questionForm.value.subject;
      question.statement = this.questionForm.value.statement;
      question.choices = this.questionForm.value.choices;
      this.questionService.addQuestion(question);
      this.questionForm.reset();
    }
  }
}
