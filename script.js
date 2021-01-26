let userYear;
let userAge;

$("button").click(function(){
  // this code will run whenever user clicks button  
  // 1. get the user input (name and birth year)
  // Hint: use .val()
  let userName = $(".name").val()
  let userYear = Number($(".year").val()) // string "2013" --> 2013

  // 2. calculate their age
  // 2021-1995 = 26 -- example
  userAge = 2021 - userYear;

  // 3. show this on screen: 
  // "Hey {user} your age is {age}"
  // $(".message").text(" Hey " + userName + " your age is " + userAge)
  
  // fancy way of doing!
  // this is called: String Interpolation
  // money sign, ticks and curly brackets
  $(".message").text(`Hey ${userName} your age is ${userAge}`)
 
});
