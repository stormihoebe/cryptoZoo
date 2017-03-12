//Pizza Constructor
function Player(name, cryptid, keys, evidence, allies){
this.name = name;
this.cryptid = cryptid;
this.keys = keys;
this.evidence = evidence;
this.allies = allies;
};
Player.prototype.Report = function() {
};
//Global variables
var name;
var cryptidType
var keys = [];
var evidence = [];
var allies = [];
var newPlayer;
var started;
var readyToLeave;
var dice;
var luck;

//checking if you are ready to leave
checkReady = function(){
  if ((keys.length >= 2) && (evidence.length >= 3) && (allies.length >=1)){
    readyToLeave = "yes";
  } else {
    readyToLeave = "no";
  };
  return readyToLeave;
};

var diceRoll = function(){
  dice = Math.floor(Math.random() * 6) + 1;
  return dice;
};
var goodLuck = function(dice) {
  if (dice > 2) {
    luck = "good";
  } else {
    luck = "bad";
  };
  return luck;
};


$(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
    name = $("input#name").val();
    cryptidType = $("#cryptidType").val();
    newPlayer = new Player(name, cryptidType, keys, evidence, allies);
    $("#start").hide();
    $("#messageBoard").show();
    $("#amountOfKeys").text(keys.length);
    $("#amountOfEvidence").text(evidence.length);
    $("#amountOfAllies").text(allies.length);
    $("#message").text("Hello, " + name + ", let me fill you in on what is going on here. You are a " + cryptidType + " and now is a golden opportunity to escape CryptoZoo where you are being held captive. To escape you must find 3 peices of evidence, 2 keys, and an ally before making it to the entrance of the facility. Click through rooms and collect items. Also, try not to get caught.");
  }); //end userForm Submit

  $("#getStarted").click(function(){
    $("#message").text("You have found the cage to your exhibit open. This is a very special moment. Do not waste any time. Collect items as you make your way through the Zoo to the entrance.");

    $("#cageRoom").show();
    $("#getStarted").hide();
    started = "yes";
  });

  $("#hideMessage").click(function(){
    if (started === "yes") {
      $("#messageBoard").hide();
      $("#showMessage").show();
    } else {
      alert("Please click Get Started before hiding message");
    };
  });

  $("#showMessage").click(function(){
    $("#messageBoard").show();
    $("#showMessage").hide();
  });

  $(".key").click(function(){
    keys.push("key");
    $("#amountOfKeys").text(keys.length);
    $("#message").text("Oh good, a key. Can't have too many of those.");

  });

  $(".evidence").click(function(){
    evidence.push("evidence");
    $("#amountOfEvidence").text(evidence.length);
    $("#message").text("You have found some evidence. Well done! This evidence will be helpful to free not only yourself, but also the other sorry cryptids trapped in this horrible place.");
  });

  $(".ally").click(function(){
    allies.push("ally");
    $("#amountOfAllies").text(allies.length);
    $("#message").text("You have found an ally. Thank goodness. Good friends can be hard to come by.");
  });

  $(".showForest").click(function(){
    $(".rooms").hide();
    $("#forestRoom").show();
    $("#message").text("You seem to have found the forest. It is dark but you are able to make out the shapes of some possible items to collect.");
  });

  $(".showCloset").click(function(){
    $(".rooms").hide();
    $("#closetRoom").show();
    $("#message").text("Ah, a dark closet. Looks like there might be some items to collect. Beware of possible danger.");

  });


  $(".danger-chance").click(function(){
    $("#messageBoard").show();
    $("#showMessage").hide();
    $("#dice").show();
  });
  $(".light").click(function(){
    $("#message").text("Oh Dear, you touched the light switch and the small room fills with light. There's a chance you might get caught. I hope you are a lucky " + cryptidType + ". Roll the dice to determine your future. With a 3 or better, you are safe. Roll a 1 or 2 and you'll have to start over.");
  });
  $(".alarm").click(function(){
    $("#message").text("Oh Dear, you touched the alarm system and it has started to sound. There's a chance you might get caught. I hope you are a lucky " + cryptidType + ". Roll the dice to determine your future. With a 3 or better, you are safe. Roll a 1 or 2 and you'll have to start over.");
  });

  $("#dice").click(function(){
    diceRoll();
    $("#message").text("You rolled a " + dice + ".");
    goodLuck(dice);
    if (luck === "good") {
      $("#message").append(" That was a very close call. Keep collecting items and find your way to get out of this place.");
    } else {
      $("#message").append(" Yikes! Looks like you will have to start over");
    };
    if (luck === "bad"){
      alert("Bummer. You rolled a " + dice + ". The page will refresh so you can start from the beginning.");
      location.reload();
    };
    $("#dice").hide();
  });


  $(".showCage").click(function(){
    $("#message").text("The open cage. Looks familiar. Collect items and find your way to the entrance.");
    $(".rooms").hide();
    $("#cageRoom").show();
  });

  $(".showEntrance").click(function(){
    $("#message").text("Here you are at the entrance. I hope you are ready. If not, looks like there are still some items to be collected. You can always turn back and visit old rooms again. Do your best not to set off the alarm. And only exit when you have all of your items.");
    $(".rooms").hide();
    $("#entranceRoom").show();
  });


  $(".exit").click(function(){
    checkReady();
    if( readyToLeave === "yes") {
        alert("congratulations, you were able to collect items and leave without being caught!");
    } else {
      alert("Not so fast, " + cryptidType + ", you haven't collected enough items. Return to the cage area and start collecting.");
      $(".rooms").hide();
      $("#cageRoom").show();
    };
  });

}); //end jquery
