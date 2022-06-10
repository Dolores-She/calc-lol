const calc = document.querySelector('.calc');
const result =document.querySelector ('#result')

calc.addEventListener('click', function(event) {
if(!event.target.classList.contains('calc__btn')) return;
const value= event.target.innerText;

switch(value) {
  case 'C':
     result.innerText = '';
break;
   
  case '=':
    result.innerText= eval (result.innerText).toFixed (2);
    break;
    default:
      result.innerText += value;
}

});

var checkBox = document.getElementById("mute_button");

function muteButton()
{
    work:
    if (checkBox.checked)
    {
       if ( confirm ("Вы уверены?"))
       {

        var oD = document.getElementById("od");
        oD.volume = 0;
        var Dv = document.getElementById("dva");
        Dv.volume = 0;
        var tR = document.getElementById("tri");
        tR.volume = 0;
        var cH = document.getElementById("che");
        var Pa = document.getElementById("pat");
        Pa.volume = 0;
        var Sh = document.getElementById("she");
        Sh.volume = 0;
        var sE = document.getElementById("sem");
        sE.volume = 0;
        var vO = document.getElementById("vos");
        vO.volume = 0;

        var dEv = document.getElementById("dev");
        dEv.volume = 0;
        var pl = document.getElementById("pl");
        pl.volume = 0;

        var uM = document.getElementById("umn");
        uM.volume = 0;
        var Raz = document.getElementById("lol");
        Raz.volume = 0;

        var rAv = document.getElementById("rav");
        rAv.volume = 0;
        var nu = document.getElementById("nu");
        nu.volume = 0;
      
        
       }
       else 
       {
       checkBox.checked = false;
       }
    }
    else {
        alert ("Правильный выбор");
        var oD = document.getElementById("od");
        oD.volume = 1;
        var Dv = document.getElementById("dva");
        Dv.volume = 1;
        var tR = document.getElementById("tri");
        tR.volume = 1;
        var cH = document.getElementById("che");
        var Pa = document.getElementById("pat");
        Pa.volume = 1;
        var Sh = document.getElementById("she");
        Sh.volume = 1;
        var sE = document.getElementById("sem");
        sE.volume = 1;
        var vO = document.getElementById("vos");
        vO.volume = 1;
        var dEv = document.getElementById("dev");
        dEv.volume = 1;
        var pl = document.getElementById("pl");
        pl.volume = 1;
        var uM = document.getElementById("umn");
        uM.volume = 1;
        var Raz = document.getElementById("lol");
        Raz.volume = 1;
        var rAv = document.getElementById("rav");
        uM.volume = 1;
        var nu = document.getElementById("nu");
        Raz.volume = 1;
    }
}


     function od() {

     document.getElementById("od").play();

     }

    function dva() {

     document.getElementById("dva").play();
    }

     function tri() {

      document.getElementById("tri").play();
 
      }
     function che() {
 
      document.getElementById("che").play();
     }
      function pat() {

        document.getElementById("pat").play();
   
        }
   
       function she() {
   
        document.getElementById("she").play();
       }
       function sem() {

        document.getElementById("sem").play();
   
        }
   
       function vos() {
   
        document.getElementById("vos").play();
       }

       function dev() {

        document.getElementById("dev").play();
   
        }
   
       function pl() {
   
        document.getElementById("pl").play();
       }
       function lol() {

        document.getElementById("lol").play();
   
        }
   
       function mi() {
   
        document.getElementById("mi").play();
       }
       function umn() {

        document.getElementById("umn").play();
   
        }
   
       function rav() {
   
        document.getElementById("rav").play();
       }
       function nu(){
        document.getElementById("nu").play();
       }