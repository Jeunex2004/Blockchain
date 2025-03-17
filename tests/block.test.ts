{/* 
    1. Test: Verificar la creación de un bloque con las propiedades requeridas
    ○ Crear un bloque con index, data, hashPrevious, nonce y hash
    ○ Verificar que el bloque tenga todas las propiedades correctamente inicializadas
*/}

import { Block } from '../src/block';
import { Blockchain } from '../src/blockchain';

describe('Deberia crear un bloque', () => {
  it('Debe crear un bloque con la estructura', () => {
    const block = new Block(1, 'ejemplo', 'hashPrevio', 0);
    expect(block.index).toBe(1);
    expect(block.data).toBe('ejemplo');
    expect(block.hashPrevious).toBe('hashPrevio');
    expect(block.nonce).toBe(0);
  });
});

describe("Test", () => {
  const blockchain = new Blockchain();
  
  blockchain.agregarBloque("Ejemplo");
  const bloqueUno = blockchain["bloques"][1];
  
  it("Test bloque 1", () => {
      expect(bloqueUno).toBeInstanceOf(Bloque);
      expect(bloqueUno.index).toBe(1);
      expect(bloqueUno.hashPrevious).toBe(blockchain["bloques"][0].hash);
  });
});
