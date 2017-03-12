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

//checking if you are ready to leave
checkReady = function(){
  if ((keys.length >= 2) && (evidence.length >= 3) && (allies.length >=1)){
    readyToLeave = "yes";
  } else {
    readyToLeave = "no";
  };
  return readyToLeave;
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
  });

  $(".evidence").click(function(){
    evidence.push("evidence");
    $("#amountOfEvidence").text(evidence.length);
  });
  $(".ally").click(function(){
    allies.push("ally");
    $("#amountOfAllies").text(allies.length);
  });

  $(".showForest").click(function(){
    $(".rooms").hide();
    $("#forestRoom").show();
  });

  $(".showCloset").click(function(){
    $(".rooms").hide();
    $("#closetRoom").show();
  });

  $(".showCage").click(function(){
    $(".rooms").hide();
    $("#cageRoom").show();
  });

  $(".showEntrance").click(function(){
    $(".rooms").hide();
    $("#entranceRoom").show();
  });

  $(".exit").click(function(){
    checkReady();
    console.log(readyToLeave);
    console.log("KEYS " + keys.length);
    console.log("EV " + evidence.length);
    console.log("ALIES " + allies.length);
    if( readyToLeave === "yes") {
        alert("congratulations, you were able to collect items and leave without being caught!");
    } else {
      alert("Not so fast, " + cryptidType + ", you haven't collected enough items. Return to the cage area and start collecting.");
      $(".rooms").hide();
      $("#cageRoom").show();
    };
  });

}); //end jquery
