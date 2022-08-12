import Character from "./Character";

export default class Swordsman extends Character{
    constructor(name) {
        super(name, level, health);
        this.type = "Swordsman";
        this.attack = 40;
        this.defence = 10;
    }
}