let userHp;
let minDamage;
let maxDamage;
let healthFactor;
let username;
let enemyHp = 100;
let percentHp;
let uses = 3;
let dodgeVal = false;

$.get("/api/currentUser", data => {
    username = data.name;
    $.get(`/api/class/${data.class}`, currentPlayer => {
        console.log(currentPlayer);
        userHp = currentPlayer.health;
        percentHp = currentPlayer.health;
        console.log(userHp)
        minDamage = currentPlayer.minDamage;
        maxDamage = currentPlayer.maxDamage;
        healthFactor = 100 / userHp;
        $(".playerHp").attr("max", userHp)
        $(".playerHp").attr("value", userHp)
    });
});

const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

function Enemy() {
    this.name = "Enemy",
    this.health = 100
    }

const generateEnemy = () => {
    const newEnemy = new Enemy();
    return newEnemy;
};

const baseAttack = (min, max) => {
    let dmgVal = getRndInt(min, max);
    console.log(dmgVal)
    damageEnemy(dmgVal, enemy);

    enemyTurn();
};

const heavyAttack = (min, max) => {
    let dmgVal = getRndInt(min*2, max*2);

    let checkHit = getRndInt(1, 100);

    if (checkHit >= 50) {
        damageEnemy(dmgVal, enemy);
    } else {
        $('#commentary').prepend(`<div>${username} swings wildly but Grandma Gertrude was too fast!</div>`);
    }
    enemyTurn();
};

const potion = (min, max) => {    
    if (uses > 0) {
        let healVal = getRndInt(min, max);
        console.log(userHp + "before")
        userHp += healVal;
        percentHp += healVal;
        console.log(userHp + "healed")

        $('.playerHp').attr("value", percentHp)
        $('#commentary').prepend(`<div>${username} drinks a potion and heals for ${healVal} HP! ${uses - 1} potions remaining!</div>`);
        enemyTurn();
    } else {
        $('#commentary').prepend(`<div>${username} reaches for their health potion but realizes they are out! Try something else!`)
    }
    uses-= 1;
};

const dodge = () => {
    dodgeVal = true;
}

const damageEnemy = (damageDealt, target) => {
    target.health -= damageDealt;
    $('#commentary').prepend(`<div>Grandma took ${damageDealt} damage! O  o  F!</div>`);
    enemyHp -= damageDealt;
    $(".enemyHp").attr("value", enemyHp);

    if (target.health <= 0) {
        $('#commentary').prepend(`<div>Grandma took ${damageDealt} damage and has fallen. This is so great, Alexa play What's up pussycat</div>`);
    }
};

const damagePlayer = (damageDealt) => {
    if (dodgeVal){
        $('#commentary').prepend(`<div>${username} rolls out of the way of Grandma Gertrude's attack, and avoids damage!</div>`);
    } else {
        userHp -= damageDealt;
        $('#commentary').prepend(`<div>${username} took ${damageDealt} damage! Ouchies</div>`);
        percentHp -= damageDealt;
        $(".playerHp").attr("value", percentHp);
    
        if (userHp <= 0) {
            $('#commentary').prepend(`<div>${username} took ${damageDealt} damage and has fallen. This is so sad, Alexa play Despacito II</div>`);
        }
    }
    dodgeVal = false;
};



const enemyTurn = () => {
    let dmgVal = getRndInt(0, 25);
    damagePlayer(dmgVal)
};

const attackBtn = () => {
    baseAttack(minDamage, maxDamage);
};

const specialBtn = () => {
    heavyAttack(minDamage, maxDamage)
}

const potionBtn = () => {
    potion(15, 30)
}

const dodgeBtn = () => {
    dodge();
}

const enemy = generateEnemy();

// Code Test