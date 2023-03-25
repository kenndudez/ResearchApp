const revolut_Yes = document.querySelector(".revolut_input_Yes");
const revolut_No = document.querySelector(".revolut_input_No");
const amazon_Yes = document.querySelector(".amazon_input_Yes");
const amazon_No = document.querySelector(".amazon_input_No");
const submitBtn = document.querySelector('#submit');
const radio = {revolut: false, amazon: false};

revolut_Yes.addEventListener('click', () => radio.revolut= true)
revolut_No.addEventListener('click', () => radio.revolut= false)
amazon_Yes.addEventListener('click', () => radio.amazon= true)
amazon_No.addEventListener('click', () => radio.amazon= false)


async function handleSubmit(e) {
    try {
     e.preventDefault();
     const userData = JSON.parse(sessionStorage.getItem("user"));
     const url = new URL("http://tolutope-001-site1.ctempurl.com/api/Project/casestudy");
     //const url = new URL("http://localhost:3000/api/casestudy");
     const revolutPayLoad = {userId: userData.userId, isResponse: radio.revolut, cstid: 3 };
     const amazonPayLoad = {userId: userData.userId, isResponse: radio.amazon, cstid: 4};
     if(!radio.amazon && !radio.revolut) {
       return window.location.href = "";
     }
     var revolutResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(revolutPayLoad),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
     });

     var amazonResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(amazonPayLoad),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
     });
    const amazonResult = await amazonResponse.json();
    const revolutResult = await revolutResponse.json();
    Promise.all([amazonResult, revolutResult]).then(()=> handleRouting(radio));
    sessionStorage.setItem("user", JSON.stringify({email, userId, roleId }));
    console.log(amazonResult, revolutResult);
    } catch (error) {
     console.log(error);
    }
 }
 submitBtn.addEventListener("click", handleSubmit);


 function handleRouting(radio) {
    if(radio.revolut && radio.amazon) {
        sessionStorage.setItem("userRoute", JSON.stringify(["http://127.0.0.1:5502/pages/Userform/amazonqr.html"]));
        window.location.href = "http://127.0.0.1:5502/pages/Userform/revolutqr.html";  // First Route
    }
    else if(radio.revolut){
        window.location.href = "http://127.0.0.1:5502/pages/Userform/revolutqr.html";
    }
   else {
    window.location.href = "http://127.0.0.1:5502/pages/Userform/amazonqr.html";
   }
 }


