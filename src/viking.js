// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return this.name + " has received " + damage + " points of damage"
        }
        return this.name + " has died in act of combat";
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return "A Saxon has received " + damage + " points of damage"
        }
        return "A Saxon has died in combat";
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let v = this.vikingArmy.length;
        let s = this.saxonArmy.length;
        let vIndex = Math.floor(Math.random()*v); 
        let sIndex = Math.floor(Math.random()*s);
        let randomViking = this.vikingArmy[vIndex];
        let randomSaxon = this.saxonArmy[sIndex];
        let damage = randomViking.strength;
        if(randomSaxon.health - damage <= 0) {
            this.saxonArmy.splice(sIndex, 1);
        } 
        let ans = randomSaxon.receiveDamage(damage);
        return ans;
    }

    saxonAttack() {
        let v = this.vikingArmy.length;
        let s = this.saxonArmy.length;
        let vIndex = Math.floor(Math.random()*v); 
        let sIndex = Math.floor(Math.random()*s);
        let randomViking = this.vikingArmy[vIndex];
        let randomSaxon = this.saxonArmy[sIndex];
        let damage = randomSaxon.strength;
        if(randomViking.health - damage <= 0) {
            this.vikingArmy.splice(vIndex, 1);
        } 
        return randomViking.receiveDamage(damage);
    }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
