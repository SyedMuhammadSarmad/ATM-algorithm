#! /usr/bin/env node

import inquirer from "inquirer"

console.log("WELCOME TO ABC ATM")

const setpin = 1234

let setbalance = 10000

let inputpin = await inquirer.prompt([
    {"message":"Kindly enter your pin" ,  "name" : "pin" , "type":"number"},

])

if(inputpin.pin == setpin){

    let question = await inquirer.prompt([
        {
            "message":"What do you want to do?", 
            "name":"tasks", 
            "type":"list" , 
            "choices" : ["Check balance","Withdraw Amount"]
        }
    ])

    if(question.tasks == "Check balance"){
        console.log("Your current balance is "+setbalance);
    }
    else if(question.tasks == "Withdraw Amount"){
        const inputamount = await inquirer.prompt([
            {
                "message":"Please enter your amount" , 
                "name":"amount" , 
                "type":"list",
                "choices":["1000","5000","10000","15000","20000","25000","Custom amount"]
            },
        ])
        
        if(inputamount.amount == "Custom amount"){
            const inputcustomamount = await inquirer.prompt([
                {"message":"enter custom amount" , "name":"customamount" ,"type" : "number"}
            ])
            if(inputcustomamount.customamount<0){
                console.log("Invalid amount");
            }
            else{
                inputamount.amount = inputcustomamount.customamount

                if(inputamount.amount>setbalance){
                    console.log("Insufficient balance")
                }

                else{
                    setbalance-= inputamount.amount
                    console.log("Your remanining balance is "+setbalance)
                }
            }
        }

        else{
            if(inputamount.amount>setbalance){
                console.log("Insufficient balance")
            }
            else{
                setbalance = setbalance - inputamount.amount
                console.log("Your remanining balance is "+setbalance)
            }
        }
    }
    
}

