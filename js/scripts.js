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


$(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
    name = $("input#name").val();
    cryptidType = $("#cryptidType").val();
    console.log(name);
    console.log(cryptidType);

  }) //end userForm Submit







}); //end jquery
