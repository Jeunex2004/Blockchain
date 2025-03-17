import { Block } from './block';

export class Blockchain {
  public bloques: Block[] = [];

  constructor() {
    const genesisBlock = new Block(0, "Bloque Génesis", "0", 0);
    this.bloques.push(genesisBlock);
  }

  getBloques(): Block[] {
    return this.bloques;
  }

//terminar
  agregarBloque(data: string): Block {
    const ultimoBlock = this.bloques[this.bloques.length - 1]; 
    const nuevoBloque = new Block(this.bloques.length, data, ultimoBlock.hash, 0);

    this.bloques.push(nuevoBloque);
    return nuevoBloque;
  }
}
