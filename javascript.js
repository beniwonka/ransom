function googleOpen() {
  var a = document.getElementById("googleBrowser");
    if (a.style.display === "none") {
      a.style.display = "block";
        } else {
      a.style.display = "block";
      }
    }

function einsoeffnen() {
  var x = document.getElementById("einsoeffnen");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("ordner").src="icons/ordner_clicked.png";
  } else {
    x.style.display = "none";
  }
}


function passwordzwei() {
	var y = document.getElementById("passwordzwei");
		if (y.style.display === "none") {
			y.style.display = "block";
      document.getElementById("zip").src="icons/zip_clicked.png";
				} else {
			y.style.display = "none";
			}
		}


function chatboxOpen() {
  var z = document.getElementById("chatbox");
    if (z.style.display === "none") {
      z.style.display = "block";
        } else {
      z.style.display = "block";
      }
    }

function finaleOpen() {
  var b = document.getElementById("passwordDeaktivieren");
  if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "block";
  }
}

function toggle_visibility(id, icon) {
       var e = document.getElementById(id);
       var f = document.getElementById(icon); 
       if(e.style.display == 'block') {
          e.style.display = 'none';
          f.src="icons/" + icon + ".png";
       }
    }


/* Cheaten ist uncool */


let antwort = {  
  "21" : "Schön dich zu sehen, keine Sorge… ich mach es dir nicht mehr so schwer… Hier findest du die Lösung.<br> Kennst du mich, so freut es dich. <br> Kennst du mich nicht, so suche mich: <br> Du findest mich ganz sicherlich. <br> Ich bin des Rätsels Lösung",
}

function unknownRedet() {
  let eingabe = document.getElementById("userBox").value;
  document.getElementById("userBox").value = "";
  document.getElementById("chatLog").innerHTML += "Du: " + eingabe + "<br>";
  if (eingabe in antwort) {
  document.getElementById("chatLog").innerHTML += "Unknown: " + antwort[eingabe] + "<br>";
    } else {
    document.getElementById("chatLog").innerHTML += "Unknown: Ich warte auf die Loesung." + "<br>";
    }
}

function check_password (input_element) {
  
  var password = input_element.value;
  
  if (password == '3301')
      	document.getElementById ('textdatei').style.display = 'block',
        document.getElementById("zip").src="icons/zip.png",
  		  document.getElementById ('passwordzwei').style.display = 'none';
  else {
      	document.getElementById ('passwordzwei').style.display = 'block';
	}
}

function check_google (input_element) {
  
  var googleEingabe = input_element.value;

  if (googleEingabe == 'Leetspeak') {
        document.getElementById ('leet').style.display = 'block';
        document.getElementById ('falsch').style.display = 'none'; }
  else {
        document.getElementById ('falsch').style.display = 'block';
        document.getElementById ('leet').style.display = 'none';
	}
}

function check_deactivate (input_element) {
  
  var passwordTwo = input_element.value;

  if (passwordTwo == 'Ich')
      	document.getElementById ('finale').style.display = 'block',
  		document.getElementById ('passwordDeaktivieren').style.display = 'none';
  else
      	document.getElementById ('finale').style.display = 'none';
}

