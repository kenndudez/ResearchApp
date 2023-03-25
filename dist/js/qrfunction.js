

var currentTab = 0; // Current tab is set to be the first tab (0)
const submitBtn = document.querySelector('#submit');
// let questionNumbe1 = document.getElementById("step1");
// let questionNumbe2 = document.getElementById("step2");
// let questionNumbe3 = document.getElementById("step3");
// let questionNumbe4 = document.getElementById("step4");
// let questionNumbe5 = document.getElementById("step5");
// let questionNumbe6 = document.getElementById("step6");
// let questionNumbe7 = document.getElementById("step7");
// let questionNumbe8 = document.getElementById("step8");
// let questionNumbe9 = document.getElementById("step9");
// let questionNumbe10 = document.getElementById("step10");
let allQuestions = [];
let count = 0;
const questionRadio = {
  question1: {state:false, id:1}, 
  question2: {state:false, id:2}, 
  question3: {state:false,id:3},

};
const question1_Yes = document.querySelector(".question1_Yes");
const question1_No = document.querySelector(".question1_No");
const question2_Yes = document.querySelector(".question2_Yes");
const question2_No = document.querySelector(".question2_No");
const question3_Yes = document.querySelector(".question3_Yes");
const question3_No = document.querySelector(".question3_No");
// showTab(currentTab); // Display the current tab
async function showTab(n) {
  //e.preventDefault();
  // This function will display the specified tab of the form ...

  currentQuestion = getCurrentQuestion(count,allQuestions);
  console.log(currentQuestion,"new current");
  renderToDom(currentQuestion);

  // var x = document.getElementsByClassName("tab");
  // x[n].style.display = "block";

  // ... and fix the Previous/Next buttons:
  // if (n == 0) {
  //   document.getElementById("prevBtn").style.display = "none";
  //   const userData = JSON.parse(sessionStorage.getItem("user"))
  //    const url = new URL("http://localhost:3000/api/response");
  //    const question1 = {userId: userData.userId, isUserResponse: questionRadio.question1.state, QuestionId: currentQuestion.questions[0].QuestionId};
  //    const question2 = {userId: userData.userId, isUserResponse: questionRadio.question2.state, QuestionId: currentQuestion.questions[1].QUestionId};
  //    const question3 = {userId: userData.userId, isUserResponse: questionRadio.question3.state, QuestionId: currentQuestion.questions[2].QUestionId};

//      var response1 = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(question1),
//       headers: { 'Content-Type': 'application/json; charset=utf-8' },
//    });

//    var response2 = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(question2),
//     headers: { 'Content-Type': 'application/json; charset=utf-8' },
//  });

//  var response3 = await fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(question3),
//   headers: { 'Content-Type': 'application/json; charset=utf-8' },
// });
//   const result1 = await response1.json();
//   const result2 = await response2.json();
//   const result3 = await response3.json();
//   console.log(result1, result2, result3);
  //} 
  // else {
  //   document.getElementById("prevBtn").style.display = "inline";
  //   document.getElementById("prevBtn").style.display = "none";
  //   const userData = JSON.parse(sessionStorage.getItem("user"))
  //    const url = new URL("http://localhost:3000/api/response");
  //    const question1 = {userId: userData.userId, isUserResponse: questionRadio.question1, QuestionId: 3 };
  //    const question2 = {userId: userData.userId, isUserResponse: questionRadio.question2, QuestionId: 4};
  //    const question3 = {userId: userData.userId, isUserResponse: questionRadio.question3, QuestionId: 5};

//      var response1 = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(question1),
//       headers: { 'Content-Type': 'application/json; charset=utf-8' },
//    });

//    var response2 = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(question2),
//     headers: { 'Content-Type': 'application/json; charset=utf-8' },
//  });

//  var response3 = await fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(question3),
//   headers: { 'Content-Type': 'application/json; charset=utf-8' },
// });
  // }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  let route = JSON.parse(sessionStorage.getItem("userRoute"));
  if(route) {
    let amazon = route[0];
    sessionStorage.removeItem("userRoute");
    window.location.href = "http://127.0.0.1:5502/pages/Userform/amazonqr.html";
  }
  }
   else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

async function nextPrev(n) {
  // This function will figure out which tab to display
  const url = new URL("http://tolutope-001-site1.ctempurl.com/api/Project/userresponse");
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const question1 = {userId: userData.userId, isUserResponse: questionRadio.question1, questionId: currentQuestion.questions[0].questionId };
  const question2 = {userId: userData.userId, isUserResponse: questionRadio.question2, questionId: currentQuestion.questions[1].questionId };
  const question3 = {userId: userData.userId, isUserResponse: questionRadio.question3, questionId: currentQuestion.questions[2].questionId };

     var response1 = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(question1),
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
       });
    
       var response2 = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(question2),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
     });
    
     var response3 = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(question3),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
    Promise.all([response1, response2, response3]).then((response)=> console.log(response))
    if (count >= allQuestions.length) {
      //...the form gets submitted:
      document.getElementById("nextBtn").innerHTML = "Submit";
      document.getElementById("regForm").submit();
      let route = JSON.parse(sessionStorage.getItem("userRoute"));
      if(route) {
        let amazon = route[0];
        sessionStorage.removeItem("userRoute");
        window.location.href = "http://127.0.0.1:5502/pages/Userform/amazonqr.html";
      }
      else {
        window.location.href = "http://127.0.0.1:5502/pages/Userform/summary.html";
      }
    }
  currentQuestion = getCurrentQuestion(count,allQuestions);
  count++;
   

  console.log(currentQuestion,"new current");
  renderToDom(currentQuestion);
  var x = document.getElementsByClassName("tab");

  // Exit the function if any field in the current tab is invalid:

  //if (n == 1 && !validateForm()) return false;

  // // Hide the current tab:
  // // x[currentTab].style.display = "none";
  // // Increase or decrease the current tab by 1:

  currentTab = currentTab + n;

  fixStepIndicator(currentTab);

  
  questionRadio.question1= "";
  questionRadio.question2= "";
  questionRadio.question3= "";

  question1_Yes.checked= false;
  question1_No.checked= false;
  question2_Yes.checked= false;
  question2_No.checked= false;
  question3_Yes.checked= false;
  question3_No.checked= false;

  // if (currentTab >= x.length) {
  //     //...the form gets submitted:
  //     document.getElementById("regForm").submit();
  //     return false;
  //   }

  // // if you have reached the end of the form... :
  // // if (currentTab >= x.length) {
  // //   //...the form gets submitted:
  // //   document.getElementById("regForm").submit();
  // //   return false;
  // // }
  // // Otherwise, display the correct tab:
  // showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].querySelectorAll("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
function getCurrentQuestion (count, questions) {
  if(count === questions.length - 1) {
    const temp = questions.slice(count)[0];
    console.log(temp);
    return temp;
  } 
  const temp = questions.slice(count, count+1)[0];
  
  return temp;
}

function renderToDom(current) {
  const nodes = document.querySelectorAll("#question-desc");
  const text = document.querySelector("#question-text");
  text.textContent = `${current.categoryName} ${current.subCategoryName ? `(${current.subCategoryName})`: "" }`;

  for(let i = 0; i < current.questions.length; i++) {
    nodes[i].textContent = current.questions[i].descriptions;
  }
}

async function getAllData() {
  try {
    //const url = new URL("http://localhost:3000/api/questionAll");
    const url = new URL("http://tolutope-001-site1.ctempurl.com/api/Project/revolut");
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

      allQuestions = data.response;
      console.log(allQuestions);
      currentQuestion = getCurrentQuestion(count,allQuestions);
      count++;
      console.log(currentQuestion,"new current");
      renderToDom(currentQuestion);
  } catch (error) {
    console.log(error)
  }
}
getAllData();


question1_Yes.addEventListener('click', () => questionRadio.question1= true)
question1_No.addEventListener('click', () => questionRadio.question1= false)
question2_Yes.addEventListener('click', () => questionRadio.question2= true)
question2_No.addEventListener('click', () => questionRadio.question2= false)
question3_Yes.addEventListener('click', () => questionRadio.question3= true)
question3_No.addEventListener('click', () => questionRadio.question3= false)





