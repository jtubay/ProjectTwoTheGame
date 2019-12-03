$.ajax("/")

function Enemy () {
    this.hp = 100,
    this.attack = function attack() {
        let dmgVal = getRndInt(5, 15)

        let checkHit = getRndInt(1, 100)
        console.log(checkHit)

        if (checkHit >= 75) {
            console.log("attack succesful")
            // dmgPlayer(dmgVal);
        } else {
            console.log("you're a failure")
        }
    }
}

const battleStart = () => {
    const newEnemy = new Enemy();
    return newEnemy;
}

const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
const baseAttack = (min, max) => {
    let dmgVal = getRndInt(min, max)

}

const heavyAttack = (min, max) => {
    let dmgVal = getRndInt(min, max)
    
    let checkHit = getRndInt(1, 100)

    if (checkHit >= 75) {
        dmgEnemy(dmgVal);
    } else {
        console.log("you're a failure")
    }
}



const enemyTurn = (damageDealt) => {
    
}

// Code Test
const enemy = battleStart()
console.log(enemy)
console.log(enemy.hp -= 50)
console.log(enemy)
enemy.attack();
