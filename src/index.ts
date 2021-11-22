import {Sorter} from './sorter'
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([5, 0, -1, 10]);
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data)