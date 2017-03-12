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
var newPlayer

$(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
    name = $("input#name").val();
    cryptidType = $("#cryptidType").val();
    newPlayer = new Player(name, cryptidType, keys, evidence, allies);
    console.log(newPlayer);
    $("#start").hide();

  }) //end userForm Submit







}); //end jquery
