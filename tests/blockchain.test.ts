import { Blockchain } from '../src/blockchain';

const miBlockchain = new Blockchain();

miBlockchain.agregarBloque("Test 1");
miBlockchain.agregarBloque("Test 2");

console.log(miBlockchain.getBloques());