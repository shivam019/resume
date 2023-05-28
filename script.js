function generateResume() {


    // document.getElementById("namep").innerHTML = namef;
    document.getElementById("mobilep").innerHTML = mobf;
    document.getElementById("emailp").innerHTML = emailf;
    document.getElementById("addressp").innerHTML = addressf;

    let namef = document.getElementById("namef").value;
    let namep = document.getElementById("namep");
     namep.innerHTML = namef;



  
    // //direct
  
    // document.getElementById("namep").innerHTML = nameField;
  
    // //contact
    // document.getElementById("mobilep").innerHTML = document.getElementById(
    //   "MobField"
    // ).value;

    // //contact
    // document.getElementById("contactT").innerHTML = document.getElementById(
    //     "contactField"
    //   ).value;
  
    // //address
    // document.getElementById("addressp").innerHTML = document.getElementById(
    //   "addressField"
    // ).value;
    // document.getElementById("fbT").innerHTML = document.getElementById(
    //   "fbField"
    // ).value;
    // document.getElementById("instaT").innerHTML = document.getElementById(
    //   "instaField"
    // ).value;
    // document.getElementById("linkedT").innerHTML = document.getElementById(
    //   "linkedField"
    // ).value;
  
    //objective
  
    document.getElementById("objectiveT").innerHTML = document.getElementById(
      "objectiveField"
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