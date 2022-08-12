import Character from "./Character";

export default class Daemon extends Character {
    constructor(name) {
        super(name, level, health);
        this.type = "Daemon";
        this.attack = 10;
        this.deffence = 40;
    }
}