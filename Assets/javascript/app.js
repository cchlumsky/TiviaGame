$('#start').on('click', function (){
  game.start();
})

$(document).on('click','#end', function(){
  game.done();
})

var questions = [{
  question: "What is the name of the Alter Ego of DAREDEVIL?",
  answers:["Bruce Banner ", "Peter Parker", "Anthony Stark", "Matthew Murdock"],
  correctAnswer: "Matthew Murdock",
},
{
  question: 'Based on the character catchphrase, who is the "strongest one there is!"?',
  answers:["Thor", "Iron Man", "Hulk", "Thanos"],
  correctAnswer: "Hulk",
},
{
  question: "Who is the signifcant other of Tony Stark?",
  answers:["Pepper Potts", "Mary Jane", "Jean Grey", "Peggy Carter"],
  correctAnswer: "Pepper Potts",
},
{
  question: "Who would not be considered an X-men?",
  answers:["QuickSilver", "Wanda Maximoff", "Luke Cage", "Magneto"],
  correctAnswer: "Luke Cage",
},
{
  question: "Iron Fist was the most common antagonist for what superhero?",
  answers:["Daredevil", "Starlord", "Ghost Rider", "Power Man"],
  correctAnswer: "Daredevil",
},
{
  question: "What year did Starlord first appear?",
  answers:["1962", "1976", "1988", "2014"],
  correctAnswer: "1976",
},
{
  question: "Franklin Richards was know by several superhero names, which one does not apply?",
  answers:["Avatar", "Squirt", "Tattletale", "Reed"],
  correctAnswer: "Reed",
},
{
  question: "What team of superheros was Wonder Man not a part of?",
  answers:["Fantastic Four", "Avengers", "S.H.I.E.L.D.", "Lethal Legion"],
  correctAnswer: "Fantastic Four",
},
{
  question: "What was the name of the movie that Apocalypse first appeared in?",
  answers:["X-men: Apocalypse", "X-men", "X2 X-men United", "X-men: First Class"],
  correctAnswer: "X-men: Apocalypse",
},
{
  question: "DeadPool was created by whom?",
  answers:["Stan Lee", "Fabian Nicieza", "Steve Englehart", "Steve Gan"],
  correctAnswer: "Fabian Nicieza",
}]

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function(){
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter<=0){
      console.log("Time is up!");
      game.done();

    }
  },
  start: function(){
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
    $('#start').remove();
    $('#image').remove();
    for(var i=0; i<questions.length;i++){
      $('#subwrapper').append('<h2>'+ questions[i].question+'</h2>');
    for(var j=0;j<questions[i].answers.length;j++){
      $("#subwrapper").append('<h4>'+"<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]+'</h4>')
      }
    }

    $('#subwrapper').append('<h2>'+'<br>'+'<br>'+'<button id="end">Finished</button>' + '</h2>')
  },
  done: function(){
        $.each($('input[name="question-0"]:checked'), function() {
          if($(this).val()==questions[0].correctAnswer){
            game.correct++;
          } else {
            game.incorrect++;
          }
        });
        $.each($('input[name="question-1"]:checked'), function() {
            if($(this).val()==questions[1].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-2"]:checked'), function() {
            if($(this).val()==questions[2].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-3"]:checked'), function() {
            if($(this).val()==questions[3].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-4"]:checked'), function() {
            if($(this).val()==questions[4].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-5"]:checked'), function() {
            if($(this).val()==questions[5].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-6"]:checked'), function() {
            if($(this).val()==questions[6].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-7"]:checked'), function() {
            if($(this).val()==questions[7].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-8"]:checked'), function() {
            if($(this).val()==questions[8].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-9"]:checked'), function() {
            if($(this).val()==questions[9].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });
        $.each($('input[name="question-10"]:checked'), function() {
            if($(this).val()==questions[10].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });

          this.result();
        },

        result: function(){
          clearInterval(timer);
          $('#subwrapper h2').remove();

          $('#subwrapper').html("<h2>Trivia Questions Completed!</h2>");
          $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
          $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
          $('#subwrapper').append("<h3>Unanswered Questions: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }

}
