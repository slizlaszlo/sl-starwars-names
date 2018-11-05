import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';
import * as first from "./first/first";

const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
  getSomething: getSomething,
  getNothing: getNothing,
  doit: first.doit
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

function getSomething() {
  return "something";
}

function getNothing() {
  return "nothing";
}