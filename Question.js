class Question{
    constructor(){
        this.input = createInput("Name");
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.question=createElement('h2');
        this.option1=createElement('h2');
        this.option2=createElement('h2');

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.title.hide();
      }
      display(){
          this.title.html("My Quiz Game ")
          this.title.position(350,50);
          this.question.html("Question- What starts and ends with letter 'E' but only has one letter?");
          this.question.position(130,80);
          this.option1.html("1:Everyone");
          this.option1.position(150,120);
          this.option2.html("2:Envelope");
          this.option2.position(150,160);
          this.input.position(100,20);
      }
}