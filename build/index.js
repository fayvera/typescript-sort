"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([5, 0, -1, 10]);
// const sorter = new Sorter(numbersCollection)
// sorter.sort();
// console.log(numbersCollection.data)
var charactersCollection = new CharactersCollection_1.CharactersCollection('UQLZAa');
var sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
