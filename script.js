function addNewWEField() {
  //   console.log("Adding new field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("input");
  newNode.classList.add("wef");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("input");
  newNode.classList.add("aqf");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewSKILLField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("input");
  newNode.classList.add("skillf");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("skillid");
  let aqAddButtonOb = document.getElementById("skillAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}


function generateResume() {

  // Social Section Name, Mob, Links etc

  document.getElementById("namep").innerHTML = document.getElementById(
    "namef"
  ).value;

  document.getElementById("namep1").innerHTML = document.getElementById(
    "namef"
  ).value;

  document.getElementById("emailp").innerHTML = document.getElementById(
    "emailf"
  ).value;

  document.getElementById("mobilep").innerHTML = document.getElementById(
    "mobf"
  ).value;

  document.getElementById("addressp").innerHTML = document.getElementById(
    "addressf"
  ).value;

 

  document.getElementById("githubp").innerHTML = document.getElementById(
    "githubf"
  ).value;


  document.getElementById("linkdinp").innerHTML = document.getElementById(
    "linkdinf"
  ).value;

  // Role & objective
  document.getElementById("rolep").innerHTML = document.getElementById(
    "rolef"
  ).value;
  document.getElementById("objp").innerHTML = document.getElementById(
    "objf"
  ).value;



  // Work Experiance

  let wes = document.getElementsByClassName("wef");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;




  //aq

  let aqs = document.getElementsByClassName("aqf");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqp").innerHTML = str1;



  //code for setting image

  let file = document.getElementById("imgf").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgp").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//print cv
function printCV() {
  window.print();
}