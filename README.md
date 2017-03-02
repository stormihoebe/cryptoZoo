# _Escape CryptoZoo_

#### A Click Adventure 3/03/17

### By Stormi Hoebelheinrich

## Description

#### This website is a point and click adventure game. The objective is to collect items in order to successfully escape the zoo.

### GAME 1 Specifications

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| clicking key adds to keys array | key| keys = [key] |
| clicking evidence adds to evidence array | evidence | evidence = [evidence] |
| clicking ally adds to allies array | ally| allies = [ally] |
| clicking doors lead to new rooms | enterForest| forestRoom.show();|
| clicking danger ends game | danger| game over |
| Win game with 2 keys, 1 ally, 5 pieces of evidence in entrance | | Win Game |
| Prevent leaving through entrance without all items | | return to game and collect more items|

###This is the initial release (1.0):
https://github.com/stormihoebe/cryptoZoo


## Setup/Installation Requirements
Open the terminal and preform the following:
* clone repository
* open index.html in web browser
* enter your name and select a cryptid to play as
* click on objects to collect them
* click through the environment to find your way to the entrance
* avoid being caught

## Known Bugs


## Support and contact details

Contact Stormi at Epicodus

#Built with the following tools:

* Atom (https://atom.io/)
* GitHub (https://github.com/)
* Git (https://git-scm.com/)
* Bootstrap (http://getbootstrap.com/)
* jQuery (https://jquery.com/)

#License

*This software is licensed under the MIT license.*

Copyright (c) 2017 Stormi Hoebelheinrich
