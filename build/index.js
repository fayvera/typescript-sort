"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SLLCollection_1 = require("./SLLCollection");
// const numbersCollection = new NumbersCollection([5, 0, -1, 10]);
// numbersCollection.sort();
// console.log(numbersCollection.data)
// const charactersCollection = new CharactersCollection('UQLZAa');
// charactersCollection.sort();
// console.log(charactersCollection.data)
var linkedList = new SLLCollection_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
