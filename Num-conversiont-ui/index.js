// Variable Declaretion
const from = document.querySelector("#type-from");
const to = document.querySelector("#type-to");
const num = document.querySelector("#number");
const submit = document.querySelector("#submit");

function formHandlr() {
  const obj = {
    from: from.value,
    to: to.value,
    num: num.value,
  };
  console.log(obj);
  return obj;
}

submit.addEventListener("click", formHandlr);
