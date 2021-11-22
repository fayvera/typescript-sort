import {Sorter} from './sorter'
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './SLLCollection';

// const numbersCollection = new NumbersCollection([5, 0, -1, 10]);
// numbersCollection.sort();
// console.log(numbersCollection.data)

// const charactersCollection = new CharactersCollection('UQLZAa');
// charactersCollection.sort();
// console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print()