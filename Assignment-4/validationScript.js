var form = document.getElementById("myForm");
console.log(form);
//var location = document.getElementById("options");
form.addEventListener("submit", submitted);
form.addEventListener("reset", myReset);

function myReset() {
  console.log("In reset...");
  var resetCheck = document.getElementById("optionsLabel");
  var resetCheckText = document.getElementById("checkText");
  if (resetCheck) {
    resetCheck.remove();
  }
  if (resetCheckText) {
    resetCheckText.remove();
  }
  document.getElementById("error_firstName").style.display = "none";
  document.getElementById("error_lastName").style.display = "none";
  document.getElementById("error_emailId").style.display = "none";
  document.getElementById("error_phoneNumber").style.display = "none";
  document.getElementById("error_city").style.display = "none";
  document.getElementById("error_state").style.display = "none";
  document.getElementById("error_zipcode").style.display = "none";
}

//onChange event
function mySelect() {
  var s = document.getElementById("job").value;
  var location = document.getElementById("options");
  //console.log(location);
  console.log(s);

  switch (s) {
    case "onCampus":
      var check = document.getElementById("optionsLabel");
      console.log(check);
      if (check) {
        console.log("Inside if block");
        check.remove(); //removing previously added checkbox
        var delcreateText = document.getElementById("checkText");
        console.log(delcreateText);
        if (delcreateText) {
          delcreateText.remove();
          console.log("Text box is deleted...");
        }
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="amazon" id="amazon" onchange="myCheckBox()" />Amazon ';
        console.log(createLabel);
        location.appendChild(createLabel);
      } else {
        //adding checkbox based on select
        console.log("Inside else block");
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="amazon" id="amazon" onchange="myCheckBox()" />Amazon  ';
        console.log(createLabel);
        location.appendChild(createLabel);
      }
      
      break;

    case "offCampus":
      var check = document.getElementById("optionsLabel");
      console.log(check);
      if (check) {
        console.log("Inside if block");
        check.remove(); //removing previously added checkbox
        var delcreateText = document.getElementById("checkText");
        console.log(delcreateText);
        if (delcreateText) {
          delcreateText.remove();
          console.log("Text box is deleted...");
        }
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="microsoft" id="microsoft" onchange="myCheckBox()" />Microsoft ';
        console.log(createLabel);
        location.appendChild(createLabel);
      } else {
        //adding checkbox based on select
        console.log("Inside else block");
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="microsoft" id="microsoft" onchange="myCheckBox()" />Microsoft ';
        console.log(createLabel);
        location.appendChild(createLabel);
      }

      break;

      case "intern":
        var check = document.getElementById("optionsLabel");
      console.log(check);
      if (check) {
        console.log("Inside if block");
        check.remove(); //removing previously added checkbox
        var delcreateText = document.getElementById("checkText");
        console.log(delcreateText);
        if (delcreateText) {
          delcreateText.remove();
          console.log("Text box is deleted...");
        }
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="meta" id="meta" onchange="myCheckBox()" />Meta ';
        console.log(createLabel);
        location.appendChild(createLabel);
      } else {
        //adding checkbox based on select
        console.log("Inside else block");
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="meta" id="meta" onchange="myCheckBox()" />Meta ';
        console.log(createLabel);
        location.appendChild(createLabel);
      }

      break;

      case "coop":
        var check = document.getElementById("optionsLabel");
      console.log(check);
      if (check) {
        console.log("Inside if block");
        check.remove(); //removing previously added checkbox
        var delcreateText = document.getElementById("checkText");
        console.log(delcreateText);
        if (delcreateText) {
          delcreateText.remove();
          console.log("Text box is deleted...");
        }
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="google" id="google" onchange="myCheckBox()" />Google ';
        console.log(createLabel);
        location.appendChild(createLabel);
      } else {
        //adding checkbox based on select
        console.log("Inside else block");
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="google" id="google" onchange="myCheckBox()" />Google ';
        console.log(createLabel);
        location.appendChild(createLabel);
      }

      break;

      case "fullTime":
        var check = document.getElementById("optionsLabel");
      console.log(check);
      if (check) {
        console.log("Inside if block");
        check.remove(); //removing previously added checkbox
        var delcreateText = document.getElementById("checkText");
        console.log(delcreateText);
        if (delcreateText) {
          delcreateText.remove();
          console.log("Text box is deleted...");
        }
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="facebook" id="facebook" onchange="myCheckBox()" />Facebook ';
        console.log(createLabel);
        location.appendChild(createLabel);
      } else {
        //adding checkbox based on select
        console.log("Inside else block");
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "optionsLabel");
        createLabel.innerHTML =
          '<input type="checkbox" name="facebook" id="facebook" onchange="myCheckBox()" />Facebook ';
        console.log(createLabel);
        location.appendChild(createLabel);
      }

      break;
  }
}

//validate CheckBox

function myCheckBox() {
  var checkLocation = document.getElementById("options");
  console.log("onclick of CheckBox...");
  var checkingCheckBox = document.getElementById("optionsLabel").firstChild;
  console.log(checkingCheckBox.checked);
  if (checkingCheckBox.checked) {
    console.log("Check Box is checked..");
    var createText = document.createElement("input");
    createText.setAttribute("type", "text");
    createText.setAttribute("name", "checkText");
    createText.setAttribute("id", "checkText");
    createText.setAttribute(
      "placeholder",
      "Please enter the role looking for.."
    );
    createText.setAttribute("required", "true");
    createText.style.width = "250px";
    console.log(createText);
    checkLocation.appendChild(createText);
  } else {
    console.log("check box is not checked...");
    var delcreateText = document.getElementById("checkText");
    if (delcreateText) {
      delcreateText.remove();
      console.log("Text box is deleted...");
    }
  }
}

//onChange event
var validName = false;
var validEmail = false;
var validPhone = false;
var validZipcode = false;
var validlastName = false;
var validCity = false;
var validState = false;

//regular expression
// regex checks variables
var regExName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern.edu\b/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZipcode = /\b\d{5}\b/;

//values
var firstName = document.getElementById("firstName");
console.log(firstName);
firstName.addEventListener("input", validate);
var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);
var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);
var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);
var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);
var city = document.getElementById("city");
city.addEventListener("input", validate);
var state = document.getElementById("state");
state.addEventListener("input", validate);

//validate function
function validate(e) {
  var value = e.target.value;
  var type = this.id;
  var em = "error_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validName = true;
      }
      break;
    
    case "lastName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validlastName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validlastName = true;
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;

    case "zipcode":
      if (!value.trim().match(regExZipcode)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZipcode = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZipcode = true;
      }
      break;

  case "city":
    if (!value.trim().match(regExName)) {
      document.getElementById(em).style.display = "block";
      this.style.border = "2px solid red";
      validCity = false;
    } else {
      document.getElementById(em).style.display = "none";
      this.style.border = "";
      validCity = true;
    }
    break;
  
    case "state":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validState = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validState = true;
      }
      break;
  }
}

//function
function submitted(e) {
  e.preventDefault();
  console.log(validName);
  console.log(validEmail);
  console.log(validPhone);
  console.log(validZipcode);
  console.log(validlastName);
  console.log(validCity);
  //myFormData();
  console.log(validName && validEmail && validPhone && validZipcode && validlastName && validCity && validState);
  if (validName && validEmail && validPhone && validZipcode && validlastName && validCity && validState) {
    alert("Data entered successfull");
    document.getElementById("feedbackData").style.display = "block";
    myTableData();
    form.reset();
  } else {
    alert("Please enter valid details");
  }
}

function myTableData() {
  //alert("Inside my table data");
  var title = document.querySelector(
    "input[type=radio][name=title]:checked"
  ).value;
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  var email = document.getElementById("emailId").value;
  var pNum = document.getElementById("phoneNumber").value;
  var stAd1 = document.getElementById("streetAddress1").value;
  var stAd2 = document.getElementById("streetAddress2").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zipcode").value;
  var hear = document.querySelectorAll(
    'input[type=checkbox][name="source"]:checked'
  );
  var comments = document.getElementById("comments").value;

  var jobType = document.getElementById("job").value;
  //var cName = document.getElementById("");
  //var jobRole = document.getElementById("");

  console.log("Inside my table data");
  console.log(title);
  console.log(fName);
  console.log(lName);
  console.log(email);
  console.log(pNum);
  console.log(stAd1);
  console.log(stAd2);
  console.log(city);
  console.log(state);
  console.log(zip);

  var array = [];
  var hearMultiple;

  for (var i = 0; i < hear.length; i++) {
    array.push(hear[i].value);
    console.log(array[i]);
  }

  if (hear.length == 1) {
    hearMultiple = array[0];
  } else if (hear.length == 2) {
    hearMultiple = array[0] + ", " + array[1];
  } else if (hear.length == 3) {
    hearMultiple = array[0] + ", " + array[1] + ",\n" + array[2];
  }

  console.log(hearMultiple);

  var tableRow = document.getElementById("myTable");
  console.log(tableRow);
  var newRow = tableRow.insertRow();
  var cell1 = newRow.insertCell();
  var cell2 = newRow.insertCell();
  var cell3 = newRow.insertCell();
  var cell4 = newRow.insertCell();
  var cell5 = newRow.insertCell();
  var cell6 = newRow.insertCell();
  var cell7 = newRow.insertCell();
  var cell8 = newRow.insertCell();
  var cell9 = newRow.insertCell();
  var cell10 = newRow.insertCell();
  var cell11 = newRow.insertCell();
  var cell12 = newRow.insertCell();
  var cell13 = newRow.insertCell();
  //var cell14 = newRow.insertCell();
  //var cell15 = newRow.insertCell();

  cell1.innerHTML = title;
  cell2.innerHTML = fName;
  cell3.innerHTML = lName;
  cell4.innerHTML = email;
  cell5.innerHTML = pNum;
  cell6.innerHTML = stAd1;
  cell7.innerHTML = stAd2;
  cell8.innerHTML = city;
  cell9.innerHTML = state;
  cell10.innerHTML = zip;
  cell11.innerHTML = hearMultiple;
  cell12.innerHTML = comments;
  cell13.innerHTML = jobType;
  //cell14.innerHTML = hear1;
  //cell15.innerHTML = comments;

  if(jobType=="none")
  {
    var cell14 = newRow.insertCell();
    var cell15 = newRow.insertCell();
    cell14.innerHTML = " ";
    cell15.innerHTML = " ";
  }else if(document.getElementById("optionsLabel").firstChild.checked)
  {
    var cName = document.getElementById("optionsLabel").firstChild.name;
    var jobRole = document.getElementById("checkText").value;
    console.log(cName);
    var cell14 = newRow.insertCell();
    var cell15 = newRow.insertCell();
    cell14.innerHTML = cName;
    cell15.innerHTML = jobRole;
  }else
  {
    var cell14 = newRow.insertCell();
    var cell15 = newRow.insertCell();
    cell14.innerHTML = " ";
    cell15.innerHTML = " ";
  }
  return false;
}
