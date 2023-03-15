const name = document.querySelector("#user-name");
const email = document.querySelector("#user-email");
const password = document.querySelector("#user-password");
const termsAgree = document.querySelector("#checkbox");
const signup = document.querySelector("#signup-btn");

//Get data from user input
function getData() {
  return {
    name: name.value,
    email: email.value,
    pass: password.value,
    termsAgree: termsAgree.checked,
  };
}
function formClear(str1, str2, str3, check) {
  return (
    (str1.value = ""),
    (str2.value = ""),
    (str3.value = ""),
    (check.checked = false)
  );
}

document.querySelector("section").onchange = () => {
  const x = getData();
  if (x.name && x.email && x.pass && x.termsAgree) {
    signup.removeAttribute("disabled");
    console.log("form is ready to send");
  }
};

//-------
async function sendPostReq(url, body) {
  const req = axios.post(url, body);
  return await req.data;
}

var uri = "http://localhost:3000/signup/";
var body = {
  name: "mojahid",
  email: "moujdf7@gmal.com",
  pass: "ije83ij2$%d",
};
signup.addEventListener("click", () => {
  axios
    .post(uri, getData())
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  formClear(name, email, password, termsAgree);
});
