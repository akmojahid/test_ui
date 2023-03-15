const name = document.querySelector("#user-name");
const email = document.querySelector("#user-email");
const password = document.querySelector("#user-password");
const termAgree = document.querySelector("#checkbox");
const signup = document.querySelector("#signup-btn");

//Get data from user input
function getData() {
  return {
    name: name.value,
    email: email.value,
    pass: password.value,
    termAgree: termAgree.checked,
  };
}

document.querySelector("section").onchange = () => {
  const x = getData();
  if (x.name && x.email && x.pass && x.termAgree) {
    signup.removeAttribute("disabled");
    console.log("form is ready to send");
    console.log(x);
  }
};

signup.addEventListener("click", async () => {
  try {
    const sendReq = await axios.post("http://localhost:3000/signup", getData());
    console.log(sendReq.data);
    return (window.location.pathname = "ragistration/signin.html");
  } catch (error) {
    alert("An Error occure :(");
    console.log(error);
  }
});
