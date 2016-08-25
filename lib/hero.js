'use strict';

// let batman = {
//   name: 'Bruce Wayne',
//   alias: 'The Bat-man',
//
//   usePower: function() {
//     return 'Spend money and hit people';
//   },
// };

const Hero = function Hero(name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;

  // DOING THE BAD THING
  this.usePower = function () {
    // this is an example of a getter
    return this._power;
  };
};

// let batman = new Hero('Bruce Wayne',
//                       'The Bat-man',
//                       'Spend money and hit people');
//
// batman._power; // THIS IS BAD DON'T DO THIS SEE THE UNDERSCORE!!?? OMG
// batman._power = 'something'// THIS IS EVEN WORSE THERES NO JUSTIFIABLE REASON WTF ARE YOU DOING

module.exports = Hero;
