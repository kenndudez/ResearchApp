const submitBtn = document.querySelector('#login_btn');
const email = document.querySelector('#email');
async function handleSubmit(e) {
   try {
    e.preventDefault();
    const url = new URL("http://tolutope-001-site1.ctempurl.com/api/Project/userlogin");
    //const url = new URL("https://localhost:44389/api/Project/userlogin");

    const payLoad = {email: email.value};
  
    var response = await fetch(url, {
       method: 'POST',
       body: JSON.stringify(payLoad),
       headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
   const result = await response.json();
   debugger
   console.log(result);
   if(result.status === 200) {
    const {email, userId, roleId } = result.response[0];
    sessionStorage.setItem("user", JSON.stringify({email, userId, roleId }));
    window.location.href = "http://127.0.0.1:5502/pages/Userform/paymenttype.html";
   }
   } catch (error) {
    console.log(error);
   }
}

submitBtn.addEventListener("click", handleSubmit);
