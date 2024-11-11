const inputID = document.getElementById("inputID");
const msg = document.getElementById("msg");

inputID.addEventListener("input", (e) => {
  const lengthUnder4 = e.target.value.length < 4;
  const lengthOver16 = e.target.value.length > 16;
  const hasSpecialChar = ["!", "@", "#", "*"].some((v) =>
    e.target.value.includes(v)
  );
  // e.target.value.includes("!") ||
  // e.target.value.includes("@") ||
  // e.target.value.includes("#") ||
  // e.target.value.includes("*");

  if (lengthUnder4) {
    msg.innerText = "ID 길이가 짧습니다";
    msg.style.color = "red";
  } else if (lengthOver16) {
    msg.innerText = "ID 길이가 너무 깁니다";
    msg.style.color = "red";
  } else if (!hasSpecialChar) {
    msg.innerText = "!,@,#,* 특수문자를 꼭 포함해야 합니다.";
    msg.style.color = "red";
  } else {
    msg.innerText = "해당 아이디는 유효합니다";
    msg.style.color = "blue";
  }
});
