<!DOCTYPE html>
<html>
<body>

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html> 
<html>
<body>

<h2>The Time</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
<title>CSS Template</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the header */
.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* Create three unequal columns that floats next to each other */
.column {
  float: left;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Left and right column */
.column.side {
  width: 25%;
}

/* Middle column */
.column.middle {
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .column.side, .column.middle {
    width: 100%;
  }
}
</style>
</head>
<body>

<div class="header">
  <h2>Some Clips</h2>
</div>

<div class="row">
  <div class="column side"  style="background-color:#aaa;">#1</div>
  <div class="column middle" style="background-color:#bbb;">#2</div>
  <div class="column side" style="background-color:#ccc;">#3</div>
</div>
<iframe width="420" height="315"
src="https://youtube.com/clip/embed/Ugkxyu8QnZEVOngVPnX780qyuHII5PHHy7sf">
</iframe>
    <iframe width="420" height="315"
src="https://youtube.com/clip/embed/UgkxQqMs7JnmxhwMjZi-aTywG5wxPMQx_bn0">
</iframe>
    <iframe width="420" height="315"
src="https://youtube.com/clip/embed/Ugkx5MxXZWhGdvdCHESxrsZ7K07dx2RFVw7P">
</iframe>
    
<div class="footer">
  <p>Lorem Ipsum</p>
</div>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<button onclick="myFunction()">What Are Clips</button>

<script>
function myFunction() {
  alert("Clips are smaller like videos where you can shorten video just for the funny");
}
</script>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
<script>
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
</script>
</head>

<body onload="checkCookie()"></body>

</html>
