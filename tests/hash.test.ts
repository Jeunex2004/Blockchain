{/* 
    Test: Verificar la función de cálculo de hash
    ○ Implementar la función que genera el hash SHA256 a partir de la concatenación de
    index, hashPrevious, data y nonce
    ○ Verificar que el hash generado sea consistente y reproducible
*/}

import { Block } from '../src/block';

describe('Calcular hash', () => {
  it('Deberia generar un hash para el bloque', () => {
    const block = new Block(1, 'Datos de ejemplo', 'hashPrevio', 0);
    const hash1 = block.calculateHash();
    const hash2 = block.calculateHash();
    expect(hash1).toBe(hash2);
  });
});
