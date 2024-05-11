let click = document.getElementById("click");
let text = document.getElementById("text");
let reset = document.getElementById("RESET");
let decrease = document.getElementById("decrease")
let number = 0;

function increase() {
  number = number + 1;
  text.innerText = number;
}

function anti() {
  number = number - 1;
  text.innerText = number;
}

function empty() {
  number = number - number;
  text.innerText = number;
}

 setInterval(function messages() {
  if (number === 100) {
    number = number + 1
    window.alert("woW u faST, buT nEed FASTER") 
  } else if (number === 1000) {
    number = number + 1
    window.alert("halp, pls stop")
  }
  else if (number === 2500)  {
    number = number + 1
    window.alert ("EMOTIONAL DAAMAGE")
  }
  else if (number === 5000)   {
    number = number + 1
    window.alert ("... U HAVE NEEGATIVE IIIIQQQ")
  }
  else if (number === 10000)   {
    number = number + 1
    window.alert ("MAXIMUM, T-REX WITH NUNNNNCHUCKS OUT OF THIS WORLD...")
  }
  else if (number === 11111)   {
    window.alert ("EEEMMOOOOOTTTIOOONNAALLL DDDAAAAAAAAAAAAMMMMAMAAAAGGGEEE... I regret wat I say if u click 1 more time then...")
    number = 0
    text.innerText = number;
  }
  else if (number === -10)  {
    number = number - 1
    window.alert ("thass ur IQ")
  }
  else if (number === -13) {
    number = 0
    text.innerText = number;
    window.alert ("ok no more")
  }
} , 10 )