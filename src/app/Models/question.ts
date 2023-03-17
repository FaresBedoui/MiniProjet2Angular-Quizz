export class Question {
  id: number;
  subject: string;
  statement: string;
  choices: {
    choice1: string,
    choice2: string,
    choice3: string,
    choice4: string,
    correctChoice: string
  };
  constructor() {
    this.id = 0;
    this.subject = '';
    this.statement = '';
    this.choices = {
      choice1: '',
      choice2: '',
      choice3: '',
      choice4: '',
      correctChoice: ''
    };
  }
}
