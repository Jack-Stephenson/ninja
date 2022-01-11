class Ninja{
    constructor(name, health = 10, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this);
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom = 10){
        super(name, health, strength, speed)
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake()
        console.log("Seahorses don't have stomachs")
    }
}

const sensei = new Sensei("Sensei");
sensei.showStats()
sensei.speakWisdom()
sensei.showStats()