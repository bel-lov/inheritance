import Character from "./Character";

export default class Bowerman extends Character{
    constructor(name) {
        super(name, level, health);
        this.type = "Bowerman";
        this.attack = 25;
        this.defence = 25;
    }
}