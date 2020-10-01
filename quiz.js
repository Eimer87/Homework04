

//Questions
(function() 
 {
  var allQuestions = [{
    question: "The tree sends downroots from its branches to the soil is know as:",
    options: ["Oak", "Pine", "Banyan", "Palm"],
    answer: 2
  }, {
    question: "Electric bulb filament is made of",
    options: ["Copper", "Aluminum", "lead", "Tungsten"],
    answer: 3
  }, {
    question: "Non Metal that remains liquid at room temprature is",
    options: ["Phophorous", "Bromine", "Clorine","Helium"],
    answer: 1
  },{
    question: "Which of the following is used in Pencils ?",
    options: ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
    answer: 0
  }, {
    question: "Chemical formula of water ?",
    options: ["NaA1O2", "H2O", "Al2O3", "H2o"],
    answer: 1
  },{
    question: "The gas filled in electric bulb is ?",
    options: ["Nitrogen", "Hydrogen", "Carbon Dioxide", "Oxygen"],
    answer: 0
  },{
    question: "Whashing soda is the comman name for",
    options: ["Sodium Carbonate", "Calcium Bicarbonate", "Sodium Bicarbonate", "Calcium Carbonate"],
    answer: 0
  },{
    question: "Which gas is not known as green house gas ?",
    options: ["Methane", "Nitrous oxide", "Carbon Dioxide", "Hydrogen"],
    answer: 3
  },{
    question: "The hardest substance availabe on earth is",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2
  },{
    question: "Used as a lubricant",
    options: ["Graphite", "Silica", "Iron Oxide", "Diamond"],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
   //if no answer is chosen 
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Make up your mind !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  // Results
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;

  }
})();




var total_seconds = 60 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
  document.getElementById("count").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

  if (total_seconds <= 0) {
    score();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(CheckTime, 1000);
  }
}
timer = setTimeout(CheckTime, 1000);


function score() {
  // stop timer
  clearInterval(timer);

  //Referencing the value of the questions
  var quesCounter = document.allQuestions.length
 
  // disable form
  var elements = document.getElementById('allQuestions').elements;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].disabled = true;
  }
}