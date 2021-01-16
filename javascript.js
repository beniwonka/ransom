function googleOpen() {
  var a = document.getElementById("googleBrowser");
    if (a.style.display === "none") {
      a.style.display = "block";
      document.getElementById("google").src="icons/google_clicked.png";
        } else {
      a.style.display = "none";
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
      document.getElementById("chat").src="icons/chat_clicked.png";
        } else {
      z.style.display = "none";
      }
    }

function finaleOpen() {
  var b = document.getElementById("passwordDeaktivieren");
  if (b.style.display === "none") {
    b.style.display = "block";
    document.getElementById("deactivate").src="icons/deactivate_clicked.png";
  } else {
    b.style.display = "none";
  }
}

function fotoOpen() {
  var c = document.getElementById("fotooeffnen");
  if (c.style.display === "none") {
    c.style.display = "block";
    document.getElementById("photo").src="icons/photo_clicked.png";
  } else {
    c.style.display = "none";
  }
}

function infoOpen() {
  var c = document.getElementById("informationeins");
  if (c.style.display === "none") {
    c.style.display = "block";
    document.getElementById("doc").src="icons/doc_clicked.png";
  } else {
    c.style.display = "none";
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
  "21" : "Schoen dich zu sehen, keine Sorge… ich mach es dir nicht mehr so schwer… Hier findest du die Loesung. Kennst du mich, so freut es dich. Kennst du mich nicht, so suche mich: Du findest mich ganz sicherlich. Ich bin des Raetsels Loesung",
}

function unknownRedet() {
  let eingabe = document.getElementById("userBox").value;
  document.getElementById("userBox").value = "";
  document.getElementById("chatLog").innerHTML += "Du: " + eingabe + "<br><br>";
  if (eingabe in antwort) {
  document.getElementById("chatLog").innerHTML += "Unknown: " + antwort[eingabe] + "<br><br>";
    } else {
    document.getElementById("chatLog").innerHTML += "Unknown: Ich warte auf die Loesung." + "<br><br>";
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

