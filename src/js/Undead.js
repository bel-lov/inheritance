import Character from "./Character";

export default class Undead extends Character{
    constructor(name) {
        super(name, level, health);
        this.type = "Undead";
        this.attack = 25;
        this.defence = 25;
    }
}