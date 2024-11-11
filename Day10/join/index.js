// 아이디
const inputID = document.getElementById("inputID");
const idcheckBtn = document.getElementById("idchecnBtn");
const idcheck1 = document.getElementById("idcheck1");

inputID.addEventListener("input", (e) => {
  const idLength = e.target.value.length > 5 && e.target.value.length < 21;

  if (idLength) {
    idcheck1.style.color = "green";
  } else {
    idcheck1.style.color = "grey";
  }
});

// 비밀번호
const inputPW = document.getElementById("inputPW");
const pwcheck1 = document.getElementById("pwcheck1");
const pwcheck2 = document.getElementById("pwcheck2");

inputPW.addEventListener("input", (e) => {
  const hasSpecialChar = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "_",
    "+",
    "~",
  ].some((v) => e.target.value.includes(v));
  const pwLength = e.target.value.length > 7 && e.target.value.length < 21;

  if (hasSpecialChar) {
    pwcheck1.style.color = "green";
  } else {
    pwcheck1.style.color = "grey";
  }

  if (pwLength) {
    pwcheck2.style.color = "green";
  } else {
    pwcheck2.style.color = "grey";
  }
});

const eyeBtn = document.getElementById("eyeBtn");
eyeBtn.addEventListener("click", () => {
  eyeBtn.innerHTML =
    eyeBtn.innerHTML == `<i class="fa-solid fa-eye"></i>`
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;
  inputPW.type = inputPW.type == "password" ? "text" : "password";
});

// 이메일
const inputEmail = document.getElementById("inputEmail");
const emailcheck = document.getElementById("emailcheck");

inputEmail.addEventListener("input", (e) => {
  const validEmail =
    inputEmail.value.includes("@gmail.com") ||
    inputEmail.value.includes("@naver.com");
  if (validEmail) {
    emailcheck.style.color = "green";
  } else {
    emailcheck.style.color = "grey";
  }
});

const joinBtn = document.getElementById("joinBtn");
joinBtn.addEventListener("click", () => {
  const allgreen =
    idcheck1.style.color == "green" &&
    pwcheck1.style.color == "green" &&
    pwcheck2.style.color == "green" &&
    emailcheck.style.color == "green";
  if (allgreen) {
    alert("가입완료!");
  } else {
    alert("입력한 정보 다시 확인해보세요.");
  }
});
