var click = new Audio("sound/click.mp3");
var main = new Audio("sound/music.mp3");

  document.onclick = function() {
    click.volume = 0.2;
    click.play();
    main.play();
  }

function hideBoot() {
          var boot = document.getElementById("bootScreen");
          var start = document.getElementById("inhalt");
          if (boot.style.display = "block") {
            boot.style.display = "none";
            start.style.display = "block";

            const startMinuten = 20;
        let time = startMinuten * 60;
        setInterval(updateTimer, 1000);

        function updateTimer() {
          const minuten = Math.floor(time / 60);
          let sekunde = time % 60;

          sekunde = sekunde < 10 ? '0' + sekunde : sekunde; 

          document.getElementById("timer").innerHTML = minuten + ':' + sekunde;

          time--;
          time = time < 0 ? 0 : time; 

          if (minuten == 0 && sekunde == 0 ) { 
          document.getElementById ('inhalt').style.animation = 'fadeOut("slow")';
          document.getElementById ('inhalt').style.display = 'none';
          document.getElementById ('errorScreen').style.display = 'block';
          }
        } 
      }
}

function googleOpen() {
  var a = document.getElementById("googleBrowser");
    if (a.style.display = "none") {
      a.style.display = "block";
      document.getElementById("google").src="icons/google_clicked.png";
      }
    }

function einsoeffnen() {
  var x = document.getElementById("einsoeffnen");
  if (x.style.display = "none") {
    x.style.display = "block";
    document.getElementById("ordner").src="icons/ordner_clicked.png";
  } 
}

function noteOpen() {
  var x = document.getElementById("noteGeoeffnet");
  if (x.style.display = "none") {
    x.style.display = "block";
    document.getElementById("note").src="icons/note_clicked.png";
  } 
}

function passwordzwei() {
	var y = document.getElementById("passwordzwei");
		if (y.style.display = "none") {
			y.style.display = "block";
      document.getElementById("zip").src="icons/zip_clicked.png";
				} 
		}


function chatboxOpen() {
  var z = document.getElementById("chatbox");
    if (z.style.display = "none") {
      z.style.display = "block";
      document.getElementById("chat").src="icons/chat_clicked.png";
        } 
    }

function finaleOpen() {
  var b = document.getElementById("passwordDeaktivieren");
  if (b.style.display = "none") {
    b.style.display = "block";
    document.getElementById("deactivate").src="icons/deactivate_clicked.png";
  } 
}

function fotoOpen() {
  var c = document.getElementById("fotooeffnen");
  if (c.style.display = "none") {
    c.style.display = "block";
    document.getElementById("photo").src="icons/photo_clicked.png";
  } 
}

function infoOpen() {
  var c = document.getElementById("informationeins");
  if (c.style.display = "none") {
    c.style.display = "block";
    document.getElementById("doc").src="icons/doc_clicked.png";
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
  "21" : "Schoen dich zu sehen, keine Sorge… ich mach es dir nicht mehr so schwer… Hier findest du die Loesung:<br> Kennst du mich, so freut es d<i>ich</i>. Kennst du mich nicht, so suche mich. Du findest mich ganz sicherlich, <br>»Ich bin des Raetsels Loesung.«"
}

function cicadaRedet() {
  let eingabe = document.getElementById("userBox").value;
  document.getElementById("userBox").value = "";
  document.getElementById("chatLog").innerHTML += "DU: " + eingabe + "<br><br>";
  var online = 1;
  if (eingabe in antwort) { 
  document.getElementById("chatLog").innerHTML += "CICADA: " + antwort[eingabe] + "<br><br>";
  online += 1;
   if (online = 1 ) {
    document.getElementById("chatLog").innerHTML += "CICADA IST OFFLINE" + "<br><br>";
  } }}

  


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

  if (googleEingabe == 'Leetspeak' || googleEingabe == 'leetspeak') {
        document.getElementById ('leet').style.display = 'block';
        document.getElementById ('falsch').style.display = 'none'; }
  else {
        document.getElementById ('falsch').style.display = 'block';
        document.getElementById ('leet').style.display = 'none';
	}
}

function check_deactivate (input_element) {
  
  var passwordTwo = input_element.value;

  if (passwordTwo == 'ich' || passwordTwo == 'Ich') {
          document.getElementById ('inhalt').style.animation = 'fadeOut("slow")';
          document.getElementById ('inhalt').style.display = 'none';
          document.getElementById ('finalScreen').style.display = 'block';
  } else {
      	document.getElementById ('finalScreen').style.display = 'none';
  }
}

    main.addEventListener('ended', function() {
        main.currentTime = 0;
        main.play();
    }, false);
main.play();
