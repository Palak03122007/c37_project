class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    question.hide();

    //write code to change the background color here

    background("yellow");

    //write code to show a heading for showing the result of Quiz

    textSize(30);
    fill("black");
    text("Result of the Quiz", 300, 40);

    //call getContestantInfo( ) here    

    Contestant.getContestantInfo();
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("NOTE: The contestant who answered correctly is highlighted in green colour",130,230);
    

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("green")
      else
        fill("red");

      textSize(15);
      text(allContestants[plr].name + ": " + allPlayers[plr].answer, 120);
    }
    }
  }

}
