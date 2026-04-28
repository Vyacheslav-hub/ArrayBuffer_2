import { Magician } from "../Magician.js";

test("Magician attack without stoned", () => {
    const m = new Magician(100, 2);

    expect(m.attack).toBeCloseTo(90);
});

test("distance 1 gives full damage", () => {
    const m = new Magician(100, 1);

    expect(m.attack).toBe(100);
});

test("stoned reduces attack", () => {
    const m = new Magician(100, 2);

    const normal = m.attack;
    m.stoned = true;
    const stoned = m.attack;

    expect(stoned).toBeLessThan(normal);
});
