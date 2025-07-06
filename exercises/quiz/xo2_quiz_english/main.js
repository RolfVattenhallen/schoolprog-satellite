function check(){

  //Get user input for every question in the form
  //Question 1:
  var question1 = document.quiz.q1.value;

  //Question 2:
  var question2a = document.getElementById("q2_n2o").checked;
  var question2b = document.getElementById("q2_co2").checked;
  var question2c = document.getElementById("q2_o2").checked;
  var question2d = document.getElementById("q2_n2").checked;
  var question2e = document.getElementById("q2_ch4").checked;

  //Question 3:
  var question3a = document.getElementById("q3_vegetation").checked;
  var question3b = document.getElementById("q3_oceanic_respiration").checked;
  var question3c = document.getElementById("q3_reforestation").checked;
  var question3d = document.getElementById("q3_deforestation").checked;
  var question3e = document.getElementById("q3_oceanic_photosynthesis").checked;
  var question3f = document.getElementById("q3_vegetation_respiration").checked;

  //Question 4:
  var question4a = document.getElementById("q4_forest_fires").checked;
  var question4b = document.getElementById("q4_volcanoes").checked;
  var question4c = document.getElementById("q4_animal_plant_decay").checked;
  var question4d = document.getElementById("q4_reforestation").checked;
  var question4e = document.getElementById("q4_burning_fossil_fuels").checked;
  var question4f = document.getElementById("q4_manure").checked;

  //Question 5:
  var question5 = document.quiz.q5.value;

  //Question 6:
  var question6 = document.quiz.q6.value;

  //Define variable to store correct answers:
  var correct = 0;

  //Check answers (radiobuttons):
  if (question1 == "n2"){
    correct++;
  }

  if (question5 == "spring"){
    correct++;
  }

  if (question6 == "photosynthesis"){
    correct++;
  }

  //Check answers (checkboxes):
  if (question2a && question2b && question2e && !question2c && !question2d){
    correct++;
  }

  if (question3a && question3c && question3e && !question3b && !question3d && !question3f){
    correct++;
  }

  if (question4a && question4b && question4c && question4e && !question4d && !question4f){
    correct++;
  }


  //Store output messages in list:
  var messages = ["Oops!<br>Time to start thinking about the climate...",
                  "Good!<br>You've taken the first step to becoming more climate-aware.<br>Take the next leap and inspire others to do the same!",
                  "Well done!<br>You are climate-aware.<br>Share your knowledge with others!",
                  "Congratulations!<br>You are a true climate champion!!!"];

  //Create list to store output gifs:
  var gifs = ["gifs/oops.gif", "gifs/novice.gif",
              "gifs/climate_aware.gif", "gifs/champion.gif"];

  //Declare variable to store index number for list of messages:
  var range;

  //Assign every message in list to corresponding number of correct answers:
  if (correct < 3){
    range = 0
  }
  else if (correct > 2 && correct < 4) {
    range = 1
  }
  else if (correct > 3 && correct < 6) {
    range = 2
  }
  else{
    range = 3
  }

  //Create list to store feedback for all options in question 1:
  var fb_ls_q1 = ['Approximately 0.04% of Earth\'s atmosphere consists of Carbon Dioxide (CO\u2082).',
                  'Approximately 20.95% of Earth\'s atmosphere consists of Oxygen (O\u2082).',
                  'Correct! Approximately 78% of Earth\'s atmosphere consists of Nitrogen (N\u2082). ',
                  'Approximately 0.93% of Earth\'s atmosphere consists of Argon (Ar)'];

  //Create list to store feedback for all options in question 2:
  var fb_ls_q2 = ['Correct! N\u2082O is released from nitrogen-fertilized farmland, among other sources.',
                  'Correct! CO\u2082 is released from burning fossil fuels, among other sources.',
                  'O\u2082 is not a greenhouse gas. All living organisms need O\u2082 to breathe.',
                  'N\u2082 is not a greenhouse gas. N\u2082 is the most common gas in Earth\'s atmosphere.',
                  'Correct! CH\u2084 is released from animals\' digestive processes, among other sources.'];

  //Create list to store feedback for all options in question 3:
  var fb_ls_q3 = ['Correct! Trees and vegetation absorb CO\u2082 during photosynthesis.',
                  'During oceanic respiration, CO\u2082 is released from the oceans.',
                  'Correct! Trees and vegetation absorb CO\u2082 during photosynthesis.',
                  'Fewer trees leads to reduced uptake of CO\u2082 for photosynthesis.',
                  'Correct! When ocean plants photosynthesize, they absorb CO\u2082.',
                  'When plants breathe, they release CO\u2082.'];

  //Create list to store feedback for all options in question 4:
  var fb_ls_q4 = ['Correct! Forest fires are responsible for large emissions of CO\u2082.',
                  'Correct! During volcanic eruptions, large amounts of CO\u2082 are released into the atmosphere.',
                  'Correct! When dead twigs & leaves decompose, CO\u2082 is released into the atmosphere.',
                  'More forest means more plants that absorb CO\u2082.',
                  'Correct! Burning fossil fuels releases CO\u2082.',
                  'During manure management, methane (CH\u2084) and nitrous oxide (N\u2082O) are released.'];

  //Create list to store feedback for all options in question 5:
  var fb_ls_q5 = ['Correct! During winter, CO\u2082 accumulates, so at the beginning of spring the highest CO\u2082 values are measured.',
                  'During summer, photosynthesis increases and more CO\u2082 is absorbed from the atmosphere.',
                  'During autumn, plants photosynthesize less and less CO\u2082 is absorbed.',
                  'During winter, photosynthesis decreases drastically and less CO\u2082 is absorbed.'];

  //Create list to store feedback for all options in question 6:
  var fb_ls_q6 = ['Livestock farming is responsible for large emissions of greenhouse gases.',
                  'Burning fossil fuels is responsible for large emissions of CO\u2082.',
                  'Forest fires are responsible for large emissions of CO\u2082.',
                  'Correct! During spring & summer, more CO\u2082 is absorbed by plants due to photosynthesis. Because of this, the lowest CO\u2082 values are measured at the beginning of autumn.'];

  //Create list with ids of correct answers:
  var corr_ls = ["fb_q1c", "fb_q2a", "fb_q2b", "fb_q2e",
                 "fb_q3a", "fb_q3c", "fb_q3e",
                 "fb_q4a", "fb_q4b", "fb_q4c", "fb_q4e",
                 "fb_q5a", "fb_q6d"]

  //Function that
  function print_feedback(corr_ans_ls) {

    //Get a list of feedback-elements:
    var fb_ls = document.getElementsByName("feedback");

    //Loop through every list-element:
    for(var i=0;i<fb_ls.length;i++){

      //Make element visible:
      fb_ls[i].style.visibility = "visible";

      //Check if element-id corresponds to correct answer:
      if(corr_ans_ls.includes(fb_ls[i].id)){

        //Correct answer -- > Set color to "green":
        fb_ls[i].style.color = "#228B22";
      }
      else{
        //Wrong answer -- > Set color to "orange":
        fb_ls[i].style.color = "orange";
      }
    }
  }

  //Update content of HTML form:
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = correct + "/6 correct answers";
  document.getElementById("gif").src = gifs[range];

  //Feedback:
  document.getElementById("fb_q1a").innerHTML = fb_ls_q1[0];
  document.getElementById("fb_q1b").innerHTML = fb_ls_q1[1];
  document.getElementById("fb_q1c").innerHTML = fb_ls_q1[2];
  document.getElementById("fb_q1d").innerHTML = fb_ls_q1[3];

  document.getElementById("fb_q2a").innerHTML = fb_ls_q2[0];
  document.getElementById("fb_q2b").innerHTML = fb_ls_q2[1];
  document.getElementById("fb_q2c").innerHTML = fb_ls_q2[2];
  document.getElementById("fb_q2d").innerHTML = fb_ls_q2[3];
  document.getElementById("fb_q2e").innerHTML = fb_ls_q2[4];

  document.getElementById("fb_q3a").innerHTML = fb_ls_q3[0];
  document.getElementById("fb_q3b").innerHTML = fb_ls_q3[1];
  document.getElementById("fb_q3c").innerHTML = fb_ls_q3[2];
  document.getElementById("fb_q3d").innerHTML = fb_ls_q3[3];
  document.getElementById("fb_q3e").innerHTML = fb_ls_q3[4];
  document.getElementById("fb_q3f").innerHTML = fb_ls_q3[5];

  document.getElementById("fb_q4a").innerHTML = fb_ls_q4[0];
  document.getElementById("fb_q4b").innerHTML = fb_ls_q4[1];
  document.getElementById("fb_q4c").innerHTML = fb_ls_q4[2];
  document.getElementById("fb_q4d").innerHTML = fb_ls_q4[3];
  document.getElementById("fb_q4e").innerHTML = fb_ls_q4[4];
  document.getElementById("fb_q4f").innerHTML = fb_ls_q4[5];

  document.getElementById("fb_q5a").innerHTML = fb_ls_q5[0];
  document.getElementById("fb_q5b").innerHTML = fb_ls_q5[1];
  document.getElementById("fb_q5c").innerHTML = fb_ls_q5[2];
  document.getElementById("fb_q5d").innerHTML = fb_ls_q5[3];

  document.getElementById("fb_q6a").innerHTML = fb_ls_q6[0];
  document.getElementById("fb_q6b").innerHTML = fb_ls_q6[1];
  document.getElementById("fb_q6c").innerHTML = fb_ls_q6[2];
  document.getElementById("fb_q6d").innerHTML = fb_ls_q6[3];

  //Call function to make feedback-notes visible:
  print_feedback(corr_ls);

  //Jump to location:
  var elmnt = document.getElementById("after_submit");
  elmnt.scrollIntoView();
}



//Function that unchecks all elements in a list:
function uncheck_item(item_list){
  if (item_list.length>0){
    for(var i=0;i<item_list.length;i++)
        item_list[i].checked = false;
  }
  else{
    console.log("Cannot uncheck list element!")
  }
}

//Function that hides the content of all elements in a list:
function hide_item(item_list){
  if (item_list.length>0){
    for(var i=0;i<item_list.length;i++)
        item_list[i].style.visibility = "hidden";
  }
  else{
    console.log("Cannot uncheck list element!")
  }
}


//Function that cleans the form from all inputs:
function init(){

  //Create variables to store a list of the checkbox-elements per question:
  var q1_val_ls = document.getElementsByName("q1");
  var q2_val_ls = document.getElementsByName("q2");
  var q3_val_ls = document.getElementsByName("q3");
  var q4_val_ls = document.getElementsByName("q4");
  var q5_val_ls = document.getElementsByName("q5");
  var q6_val_ls = document.getElementsByName("q6");

  //Create variables to store a list of the feedback-notes for all questions:
  var fb_ls = document.getElementsByName("feedback");

  //Uncheck all elements in list:
  uncheck_item(q1_val_ls)
  uncheck_item(q2_val_ls)
  uncheck_item(q3_val_ls)
  uncheck_item(q4_val_ls)
  uncheck_item(q5_val_ls)
  uncheck_item(q6_val_ls)

  //Hide content from all elements in a list:
  hide_item(fb_ls)

  //Clear output messages:
  document.getElementById("message").innerHTML = "";
  document.getElementById("number_correct").innerHTML = "";
  document.getElementById("gif").src = "";
  document.getElementById("after_submit").style.visibility = "hidden"

  //Delete feedback:
  document.getElementsByName("feedback").innerHTML = "";
}
