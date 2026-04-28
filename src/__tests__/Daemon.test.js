import { Daemon } from "../Daemon.js";

test("Daemon attack works same as Magician", () => {
    const d = new Daemon(100, 2);

    expect(d.attack).toBeCloseTo(90);
});

test("Daemon stoned reduces attack", () => {
    const d = new Daemon(100, 2);

    const normal = d.attack;
    d.stoned = true;
    const stoned = d.attack;

    expect(stoned).toBeLessThan(normal);
});
