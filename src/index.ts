import {Sorter} from './sorter'
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([5, 0, -1, 10]);
// const sorter = new Sorter(numbersCollection)
// sorter.sort();
// console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('UQLZAa');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection)