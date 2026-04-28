import { ArrayBufferConverter } from "../ArrayBufferConverter.js";
import { getBuffer } from "../getBuffer.js";

describe('ArrayBufferConverter', () => {
    let converter;

    beforeEach(() => {
        converter = new ArrayBufferConverter();
    });

    test("должен корректно преобразовывать ArrayBuffer в строку", () => {
        converter.load(getBuffer());

        const result = converter.toString();

        expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    });

    test("метод load должен сохранять ArrayBuffer внутри объекта", () => {
        const buffer = getBuffer();

        converter.load(buffer);

        expect(converter.buffers).toBe(buffer);
    });

    test("конструктор должен инициализировать buffers как null", () => {
        expect(converter.buffers).toBeNull();
    });

    test("объект должен корректно работать при повторной загрузке буфера", () => {
        converter.load(getBuffer());
        const first = converter.toString();

        converter.load(getBuffer());
        const second = converter.toString();

        expect(first).toBe(second);
    });

    test("toString без load должен возвращать пустую строку", () => {
        const result = converter.toString();

        expect(result).toBe('');
    });
});
