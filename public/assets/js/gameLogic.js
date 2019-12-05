let userHp;
let minDamage;
let maxDamage;
let healthFactor;

$.get("/api/currentUser", data => {
    $.get(`/api/class/${data.class}`, currentPlayer => {
        console.log(currentPlayer)
        userHp = currentPlayer.health;
        minDamage = currentPlayer.minDamage;
        maxDamage = currentPlayer.maxDamage;
        healthFactor = 100 / userHp
    })
})

function Enemy() {
    this.name = "Enemy",
        this.health = 100,
        this.attack = function attack() {
            let dmgVal = getRndInt(5, 15);

            let checkHit = getRndInt(1, 100);
            console.log(checkHit);

            if (checkHit >= 75) {
                console.log("attack succesful");
                tookDamage(dmgVal, currentPlayer)
                // dmgPlayer(dmgVal);
            } else {
                console.log("you're a failure");
            }
        }
}

const generateEnemy = () => {
    const newEnemy = new Enemy();
    return newEnemy;
}

const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
const baseAttack = (min, max) => {
    let dmgVal = getRndInt(min, max);
    console.log(min)
    console.log(max)
    damageEnemy(dmgVal, enemy);

    $('.title').prepend(`<div>Grandma took ${dmgVal} damage! O  o  F!</div>`)
    enemyTurn();
}

const heavyAttack = (min, max) => {
    let dmgVal = getRndInt(min*2, max*2);

    let checkHit = getRndInt(1, 100);

    if (checkHit >= 75) {
        tookDamage(dmgVal, enemy);
    } else {
        console.log("you're a failure");
    }
    enemyTurn();
}

const potion = (min, max) => {
    let healVal = getRndInt(min, max);

    userHp += healVal;

    enemyTurn();
}

const damageEnemy = (damageDealt, target) => {
    target.health -= damageDealt;
    console.log(`${target.name} took ${damageDealt} damage!`)
    if (target.hp <= 0) {
        console.log(`${target.name} has died!`)
    }
}

const damagePlayer = (damageDealt, target) => {

}

const enemyTurn = () => {
    let dmgVal = getRndInt(0, 20)

    damagePlayer(dmgVal, currentPlayer)
}

const attackBtn = () => {
    baseAttack(minDamage, maxDamage)
    console.log(minDamage, "min")
    console.log(maxDamage, "max")
}

// Code Test