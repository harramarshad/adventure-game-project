import inquirer from "inquirer";


class Player {
    name!: string;
    fuel : number = 100;
    constructor(name:string){
        this.name= name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }

}
   
class Opponent {
    name!: string;
    fuel : number = 100;
    constructor(name:string){
        this.name= name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}


let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name:",

    }
])

let opponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your opponent",
        choices: ["Alien","Skeleton","Zombie"],
    }
])

let Player1 = new Player(player.name)
let opponent1 = new Opponent(opponent.select)

do{
    if (opponent.select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Weapon","Run for your life","Drink potion"],
            }
        ]);
        if(ask.opt == "Weapon"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                Player1.fuelDecrease()
                console.log(`${Player1.name} fuel is ${Player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(Player1.fuel <= 0){
                    console.log("You loose the game,better luck next time");
                    process.exit()
                }

            }
            if(num <= 0){
                opponent1.fuelDecrease()
                console.log(`${Player1.name} fuel is ${Player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(opponent1.fuel <= 0){
                    console.log("Yeahhhhh! You Won");
                    process.exit()
                }

            }
        }
        if(ask.opt =="Drink potion"){
           Player1.fuelIncrease()
           console.log(`You drink power portion. Your fuel is ${Player1.fuel}`);
        }
        if(ask.opt =="Run for your life"){
            console.log("You loose the game,better luck next time");
            process.exit()
        }
             
            }
        }
while(true)










