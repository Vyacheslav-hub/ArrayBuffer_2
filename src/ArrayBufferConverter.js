export class ArrayBufferConverter {
    constructor() {
        this.buffers = null;
    }

    load(buffer) {
        this.buffers = buffer;
    }

    toString () {
        const view = new Uint16Array(this.buffers);
        return String.fromCharCode(...view);
    }
}
