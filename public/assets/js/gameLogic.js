let userHp;
let minDamage;
let maxDamage;
let healthFactor;
let username;
let enemyHp = 100;

$.get("/api/currentUser", data => {
    let username = data.name;
    $.get(`/api/class/${data.class}`, currentPlayer => {
        console.log(currentPlayer);
        userHp = currentPlayer.health;
        minDamage = currentPlayer.minDamage;
        maxDamage = currentPlayer.maxDamage;
        healthFactor = 100 / userHp;
    });
});

const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

function Enemy() {
    this.name = "Enemy",
        this.health = 100,
        this.attack = function attack() {
            let dmgVal = getRndInt(5, 15);

            let checkHit = getRndInt(1, 100);
            console.log(checkHit);

            if (checkHit >= 75) {
                console.log("attack succesful");
                tookDamage(dmgVal, currentPlayer);
                // dmgPlayer(dmgVal)
            } else {
                console.log("you're a failure");
            }
        };
    }

const generateEnemy = () => {
    const newEnemy = new Enemy();
    return newEnemy;
};

const baseAttack = (min, max) => {
    let dmgVal = getRndInt(min, max);
    console.log(min);
    console.log(max);
    damageEnemy(dmgVal, enemy);

    enemyTurn();
};

const heavyAttack = (min, max) => {
    let dmgVal = getRndInt(min*2, max*2);

    let checkHit = getRndInt(1, 100);

    if (checkHit >= 75) {
        damageEnemy(dmgVal, "Enemy");
    } else {
        console.log("you're a failure");
    }
    enemyTurn();
};

const potion = (min, max) => {
    let healVal = getRndInt(min, max);

    userHp += healVal;

    enemyTurn();
};

const damageEnemy = (damageDealt, target) => {
    target.health -= damageDealt;
    $('#commentary').prepend(`<div>Grandma took ${damageDealt} damage! O  o  F!</div>`);
    enemyHp -= damageDealt;
    $(".enemyHp").attr("value", enemyHp);

    if (target.health <= 0) {
        $('#commentary').prepend(`<div>Grandma took ${damageDealt} damage and has fallen. This is so great, Alexa play What's up pussycat</div>`);
    }
};

const damagePlayer = (damageDealt, target) => {
    userHp -= damageDealt;
    $('#commentary').prepend(`<div>${username} took ${damageDealt} damage! Ouchies</div>`);
    if (userHp <= 0) {
        $('#commentary').prepend(`<div>${username} took ${damageDealt} damage and has fallen. This is so sad, Alexa play Despacito II</div>`);
    }
};

const enemyTurn = () => {
    let dmgVal = getRndInt(0, 20);

    // damagePlayer(dmgVal, currentPlayer);
};

const attackBtn = () => {
    baseAttack(minDamage, maxDamage);
    console.log(minDamage, "min");
    console.log(maxDamage, "max");
};

const enemy = generateEnemy();

// Code Test