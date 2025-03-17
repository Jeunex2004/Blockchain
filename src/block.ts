import { createHash } from 'crypto';

export class Block {
  private _index: number;
  private _data: string;
  private _hashPrevious: string;
  private _nonce: number;
  private _hash: string;

  constructor(index: number, data: string, hashPrevious: string, nonce: number) {
    this._index = index;
    this._data = data;
    this._hashPrevious = hashPrevious;
    this._nonce = nonce;
    this._hash = this.calcularHash();
  }

  private calcularHash(): string {
    const hash = `${this._index}${this._hashPrevious}${this._data}${this._nonce}`;
    return createHash('sha256').update(hash).digest('hex').toUpperCase();
  }

  //faltan getters!
  //variables privadas con getters son necesarias
  //para acceder en el test

  get index(): number {
    return this._index;
  }

  get data(): string {
    return this._data;
  }

  get hashPrevious(): string {
    return this._hashPrevious;
  }

  get nonce(): number {
    return this._nonce;
  }

}
