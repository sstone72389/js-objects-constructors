'use strict'

const usePower = function () {
  return this._power
}

const Hero = function Hero (name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
  this.usePower = usePower
}

const wonderWoman = new Hero('Diana Prince', 'Wonder Woman', 'Deflect bullets with bracelets')

wonderWoman

module.exports = Hero
