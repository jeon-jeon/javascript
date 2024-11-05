// document[=html]
// element[=tag]
// const btn = document.createElement("button");
// btn.innerHTML = "점메추";
// btn.style.backgroundColor = "red";
// document.body.appendChild(btn);

// const img = document.createElement("img");
// img.src ="https://www.google.com/imgres?q=%EC%95%84%EB%A7%9D%EC%B6%94&imgurl=https%3A%2F%2Fwww.ediya.com%2Ffiles%2Fmenu%2FIMG_1718954961563.png&imgrefurl=https%3A%2F%2Fblog.naver.com%2Fwntjgusxnd%2F223514779931%3FfromRss%3Dtrue%26trackingCode%3Drss&docid=znW6tDoSNZF6QM&tbnid=yD21Udp2CtSszM&vet=12ahUKEwjZtPawqcSJAxXUcfUHHdlTCMcQM3oECHUQAA..i&w=328&h=328&hcb=2&ved=2ahUKEwjZtPawqcSJAxXUcfUHHdlTCMcQM3oECHUQAA"
// document.body.appendChild(img);

const div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

const btn = document.createElement("button");
btn.innerHTML = "아망추";

div.appendChild(btn);

document.body.appendChild(div);
