$.get("/api/currentUser", data => {
    $.get(`/api/class/${data.class}`, currentPlayer => {
        console.log(currentPlayer)
        let userHp = currentPlayer.health

        let healthFactor = 100 / userHp
        

        function Enemy() {
            this.name = "Enemy",
                this.health = 100,
                this.attack = function attack() {
                    let dmgVal = getRndInt(5, 15);

                    let checkHit = getRndInt(1, 100);
                    console.log(checkHit);

                    if (checkHit >= 75) {
                        console.log("attack succesful");
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

            tookDamage(dmgVal, enemy);

            enemyTurn();
        }

        const heavyAttack = (min, max) => {
            let dmgVal = getRndInt(min, max);

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

            currentPlayer.health += healVal;

            enemyTurn();
        }

        const tookDamage = (damageDealt, target) => {
            target.health -= damageDealt;
            console.log(`${target.name} took ${damageDealt} damage!`)
            if (target.hp <= 0) {
                console.log(`${target.name} has died!`)
            }
        }

        const enemyTurn = () => {
            let dmgVal = getRndInt(0, 20)

            tookDamage(dmgVal, currentPlayer)
        }
        // Code Test
        const enemy = generateEnemy()
        console.log(enemy)
        tookDamage(20, enemy)
        console.log(enemy)
        tookDamage(20, enemy)
        tookDamage(15, currentPlayer)

        enemy.attack();

    })
})
