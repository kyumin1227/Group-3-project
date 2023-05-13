const logoImg = document.querySelector(".main_title__logo");

// function $(colorChange() {
//     $(variable).css({
//         "--color1": "#FEFF86",
//         "--color2": "#B0DAFF",
//         "--color3": "#B9E9FC",
//         "--color4": "#DAF5FF"
//     })
//     console.log("change color!");
// })

// logoImg.addEventListener("click", colorChange);

const categoryBtn1 = document.querySelector(".btn1");
const categoryBtn2 = document.querySelector(".btn2");
const categoryBtn3 = document.querySelector(".btn3");

const radio1 = document.querySelector("#one");
const radio2 = document.querySelector("#two");
const radio3 = document.querySelector("#three");

const colorChange1 = (event) => {
    categoryBtn1.style.backgroundColor = "#B2B2B2";
    categoryBtn2.style.backgroundColor = "#EAEAEA";
    categoryBtn3.style.backgroundColor = "#EAEAEA";
    radio1.checked = true;
}

const colorChange2 = (event) => {
    categoryBtn1.style.backgroundColor = "#EAEAEA";
    categoryBtn2.style.backgroundColor = "#B2B2B2";
    categoryBtn3.style.backgroundColor = "#EAEAEA";
    radio2.checked = true;
}

const colorChange3 = (event) => {
    categoryBtn1.style.backgroundColor = "#EAEAEA";
    categoryBtn2.style.backgroundColor = "#EAEAEA";
    categoryBtn3.style.backgroundColor = "#B2B2B2";
    radio3.checked = true;
}

categoryBtn1.addEventListener("click", colorChange1);
categoryBtn2.addEventListener("click", colorChange2);
categoryBtn3.addEventListener("click", colorChange3);
