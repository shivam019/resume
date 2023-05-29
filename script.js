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

  document.getElementById("skillp").innerHTML = document.getElementById(
    "skillf"
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



  //we

  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //aq

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//print cv
function printCV() {
  window.print();
}