import { createHash } from 'crypto';
//clase test
export class Block {
    private index: number;
    private data: string;
    private hashPrevious: number;
    private nonce: number;
    private hash: string;

    constructor(index: number, data: string, hashPrevious: number, nonce: number) {
        this.index;
        this.data;
        this.hashPrevious;
        this.nonce;
        this.hash = this.calcularHash();
    }

    calcularHash(): string {
        const hash = `${this.index}${this.hashPrevious}${this.data}${this.nonce}`;
        return createHash('sha256').update(hash).digest('hex').toUpperCase();
    }
}
