
export class Magician {
    constructor(attack, distance) {
        this._attack = attack;
        this.distance = distance;
        this._stoned = false;
    }

    get attack () {
        let result = this._attack * (1 - (this.distance - 1) * 0.1);
        if (this._stoned) result -= Math.log2(this.distance) * 5;
        return result
    }

    set stoned(value) {
        this._stoned = value
    }

}
