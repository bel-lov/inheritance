import Character from "./Character";

export default class Magician extends Character{
    constructor(name) {
        super(name, level, health);
        this.type = "Magician";
        this.attack = 10;
        this.defence = 40;
    }
}
