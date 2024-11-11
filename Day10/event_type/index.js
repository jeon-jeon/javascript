// const inputID = document.getElementById("inputID");
// const span = document.querySelector("span");

// inputID.addEventListener("input", (e) => {
//   console.log(e.target.value.length);
//   span.innerText = e.target.value.length;
// });

// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   const result = input1.value == input2.value ? "통과!" : "에러!";
//   alert(result);
// });

// const input1 = document.getElementById("input1");
// const btn = document.getElementById("btn");

// input1.addEventListener("input", (e) => {
//   const isValid = e.target.value.length >= 4 && e.target.value.length <= 12;
//   btn.innerText = isValid ? "확인" : "안됨";
// });

// const input1 = document.getElementById("input1");

// input1.addEventListener("input", (e) => {
//   if (e.target.value.length > 5) {
//     e.target.value = e.target.value.slice(0, 5);
//   }
// });

const password = document.getElementById("inputPW");
const eye = document.getElementById("eye");

eye.addEventListener("click", () => {
  eye.innerHTML =
    eye.innerHTML == `<i class="fa-solid fa-eye"></i>`
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;
  password.type = password.type == "text" ? "password" : "text";
});
