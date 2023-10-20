let body = document.querySelector("body");
let main = document.getElementById("main");
let box = document.getElementById("box");
let btn = document.getElementById("button");
let div2 = document.getElementById("div2");
let D1 = document.getElementById("D1");
let p = document.getElementById("p");
let D2 = document.getElementById("D2");
let textarea = document.getElementById("textarea");

let para = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nostrum minus doloribus fugiat commodi quidem assumenda incidunt ducimus enim alias, sit dolorem, voluptatibus eligendi laboriosam ut in deserunt a nulla",
];

function textgen(params) {
  let arr1 = Math.floor(Math.random() * 100);
  let arr2 = Math.floor(Math.random() * (220 - 100) + 100);
  let tx = para[0].slice(arr1, arr2);
  return (p.innerText = tx);
}
btn.addEventListener("click", textgen);

function int(params) {
  let a = this.value;
  let t = [];
  t.push(p.innerText);
  console.log(t);
  let b = t[0];
  console.log(b);

  if (a == b) {
    console.log("good");
  } else {
    alert("wrong");
  }
}

textarea.addEventListener("input", int);





// btn2.addEventListener("click", st2);

// // ---------------------------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // create and adding element-----------------------------
// let main=document.createElement("div");
// body.appendChild(main);

// let box=document.createElement("div");
// main.appendChild(box);

// let divp=document.createElement("div");
// box.appendChild(divp);

// let p = document.createElement("p");
// p.innerHTML = "rendum image & background gunerater";
// divp.appendChild(p);
// let ps1=p.style;

// let div0 = document.createElement("div");

// let div1 = document.createElement("div");
// let h3 = document.createElement("h3");
// h3.innerText = "color";
// let div2 = document.createElement("div");
// let indiv1 = document.createElement("div");
// indiv1.innerHTML = "indiv1";

// let indiv2 = document.createElement("div");
// indiv2.innerHTML = "indiv2";

// box.appendChild(div0);
// div0.appendChild(div1);
// div1.appendChild(h3);

// div0.appendChild(div2);
// div2.appendChild(indiv1);
// div2.appendChild(indiv2);

// let btn2 = document.createElement("button");
// btn2.innerHTML = "clik Me";
// div2.insertAdjacentElement("afterbegin", btn2);

// let btn3 = document.createElement("button");
// btn3.innerHTML = "clik Me";
// div2.insertAdjacentElement("beforeend", btn3);

// // create and adding element------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // style----------------------------------------------------------
// let main1=main.style;

// let box1=box.style;

// let divps=divp.style;

// let p_st = p.style;
// p_st.textAlign = "center";
// p_st.fontSize="2em";
// p_st.fontWeight="800";
// p_st.color="white"
// p_st.textShadow="3px 2px 3px black, 0 0 5em white, 0 0 2em white";
// p.position = "absolute";
// p_st.textTransform="uppercase";
// p_st.margin = "15px auto 15px";
// p_st.padding="10px";

// let d0 = div0.style;

// let d1 = div1.style;

// let h3_1 = h3.style;
// h3_1.color = "rgba(255,255,255,1)";

// let d2 = div2.style;

// // let ids1 = indiv1.style;
// // indiv1.classList.add("in2");
// // ids1.backgroundColor = "white";
// // ids1.width = "100px";
// // ids1.height = "100px";
// // ids1.textAlign = "center";
// // ids1.margin = "13px";

// // let ids2 = indiv2.style;
// // indiv2.classList.add("in2");
// // ids2.backgroundColor = "white";
// // ids2.width = "100px";
// // ids2.height = "100px";
// // ids2.margin = "13px";
// // // ids2.margin="15px";

// // style-------------------------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // Manipulating Attribute---------------------------------
// // let sdiv = document.querySelector("indiv1");

// // let id = indiv1.setAttribute("class", "di1");
// // id = indiv1.setAttribute("class", "in2");

// // let peran = indiv1.getAttribute("class");
// // document.write(peran);
// // Manipulating Attribute------------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // dom even onclick---------------------------------------

// console.dir(btn2);

// // ids1st = {
// //   backgroundColor: "green",
// //   width: "200px",
// //   height: "200px",
// // };

// function st1(params) {
//   ids1.backgroundColor = "white";
//   ids1.width = "350px";
//   ids1.height = "220px";
//   ids1.borderRadius = "50%";
//   ids1.display = "flex";
//   ids1.direction = "col";
//   ids1.justifyContent = "center";
//   ids1.alignItems = "top";
//   // indiv1.innerText = "st1";
//   ids1.backgroundSize = "cover";
//   ids1.border= "0px solid black";
//   ids1.boxShadow = "-4px -4px  20px  black";
//   ids1.fontWeight="700";
// }
// function st2(params) {
//   ids1.backgroundColor = "green";
//   ids1.width = "150px";
//   ids1.height = "120px";
//   ids1.borderRadius = "50%";
//   // indiv1.innerText = "st2";
//   ids1.display = "flex";
//   ids1.direction = "col";
//   ids1.justifyContent = "center";
//   ids1.alignItems = "top";
//   ids1.backgroundSize = "cover";
//   ids1.border= "0px solid black";
//   ids1.boxShadow = "-4px -4px  20px  black";
//   ids1.fontWeight="700";
//   ids1.padding="7px";
// }

// // let bt2 = document.querySelector("btn2");
// // let bt3 = document.querySelector("btn3");

// function st3(params) {
//   ids2.backgroundColor = "green";
//   ids2.width = "200px";
//   ids2.height = "150px";
//   // indiv2.innerText = "st3";
//   ids2.direction = "col";
//   ids2.justifyContent = "center";
//   ids2.alignItems = "top";
//   ids2.borderRadius = "50%";
//   ids2.backgroundSize = "cover";
//   ids2.border= "0px solid black";
//   ids2.boxShadow = "-4px -4px  20px  black";
//   ids2.fontWeight="700";
// }
// // btn2.onclick= st3;

// function st4(params) {
//   ids2.backgroundColor = "white";
//   ids2.width = "350px";
//   ids2.height = "220px";
//   // indiv2.innerText = "st4";
//   ids2.display = "flex";
//   ids2.direction = "col";
//   ids2.justifyContent = "center";
//   ids2.alignItems = "top";
//   ids2.borderRadius = "50%";
//   ids2.backgroundSize = "cover";
//   ids2.border= "0px solid black";
//   ids2.boxShadow = "-4px -4px  20px  black";
//   ids2.fontWeight="700";

// }

// function st5(params) {
//   d2.border = "2px solid black";
//   d2.borderRadius = "10px";
// }
// function st6(params) {
//   d2.border = "2px solid black";
//   d2.borderRadius = "10px";
// }

// function reco(params) {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let colo = `rgb(${red},${green},${blue})`;

//   return (
//     (d2.backgroundColor = colo),
//     (this.style.backgroundColor=colo)
//   );
// }
// function reco1(params) {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let colo1 = `rgba(${red},${green},${blue},0.7)`;

//   return (d1.backgroundColor = colo1),(h3.innerText = colo1), (h3_1.color = "white"),(this.style.backgroundColor=colo1),(this.style.width="70px"),(this.style.height="30px"),(this.style.padding="4px"),(this.style.margin="2px"),(this.style.borderRadius="5px"),(this.style.boxShadow = "-8px -8px 18px  black"),(this.style.fontWeight="500"),(this.style.fontSize="1.15em"),console.log(event);
// }

// function imageGunret(params) {
//   let img = [
//     "URL(p1/1.JPG)",
//     "URL(p1/2.JPG)",
//     "URL(p1/3.JPG)",
//     "URL(p1/4.JPG)",
//     "URL(p1/5.JPG)",
//     "URL(p1/6.JPG)",
//     "URL(p1/7.JPG)",
//     "URL(p1/8.JPG)",
//     "URL(p1/9.JPG)",
//     "URL(p1/10.JPG)",
//     "URL(p1/11.JPG)",
//     "URL(p1/12.JPG)",
//     "URL(p1/13.JPG)",
//     "URL(p1/14.JPG)",
//     "URL(p1/15.JPG)",
//     "URL(p1/16.JPG)",
//     "URL(p1/17.JPG)",
//     "URL(p1/18.JPG)",
//   ];

//   let textuer1 = [
//     "URL(back/11.BMP)",
//     "URL(back/12.jpg)",
//     "URL(back/13.BMP)",
//     "URL(back/14.jpg)",
//     "URL(back/15.BMP)",
//     "URL(back/16.jpg)",
//     "URL(back/17.jpg)",
//     "URL(back/18.jpg)",
//     "URL(back/19.jpg)",
//     "URL(back/20.jpg)",
//     "URL(back/21.jpg)",
//     "URL(back/22.jpg)",
//     "URL(back/23.jpg)",
//     "URL(back/24.jpg)",
//     "URL(back/25.jpg)",
//     "URL(back/26.jpg)",
//     "URL(back/27.jpg)",
//   ];
//   for (i = 0; i <= img.length; i++) {
//     let bg = img[Math.floor(Math.random() * img.length)];
//     let bc = img[Math.floor(Math.random() * img.length)];

//   for (i = 0; i <= textuer1.length; i++) {
//     let back = textuer1[Math.floor(Math.random() * textuer1.length)];

//   return (ids1.backgroundImage = bg), (ids2.backgroundImage = bc),(d2.backgroundImage = back), (indiv1.innerText = bg.slice(4,12)),(indiv2.innerText = bc.slice(4,12));// indiv2.innerText = "st3";

//   }}
// }

// // btn3.onclick= st4;
// btn2.addEventListener("click", st2);
// btn2.addEventListener("click", st4);
// btn2.addEventListener("click", st5);
// btn2.addEventListener("click", reco);
// btn2.addEventListener("click", reco1);
// btn2.addEventListener("click", imageGunret);
// // btn3.addEventListener("click", reco3);

// btn3.addEventListener("click", st1);
// btn3.addEventListener("click", st3);
// btn3.addEventListener("click", st6);
// btn3.addEventListener("click", reco);
// btn3.addEventListener("click", reco1);
// btn3.addEventListener("click", imageGunret);
// // btn3.addEventListener("click", reco3);
