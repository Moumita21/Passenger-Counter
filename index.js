// document.getElementById("count-el").innerText=5
// let firstBatch=5
// let secondBatch=7
// let count=firstBatch+secondBatch

// console.log(count)
// let myAge=20
// console.log(myAge)

// let myAge=20
// let humanDogRatio=7
// let myDogAge=myAge*humanDogRatio
// console.log(myDogAge)
//initialize the count to 0
//increment per click 
//change count-el in HTML
// function increment(){
//     console.log("This button is clicked")
// }

// function countdown(){
//   console.log(5)  
//   console.log(4)  
//   console.log(3)  
//   console.log(2)  
//   console.log(1)  
// }
// countdown()  
// function calling(){
//     console.log(42)
// }
// calling()

// let lap1=34
// let lap2=33
// let lap3=36
// function counting(){
//     let result=lap1+lap2+lap3
//     console.log(result)
// }
// counting()

// let lapscompleted=0
// function count(){
//     lapscompleted+=1;
// }
// count()
// count()
// count()
// console.log(lapscompleted)
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("previous-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countSet = count + " - "
    saveEl.textContent += countSet
    console.log(count)
}

function reset(){
    countEl.textContent=0
    count=0
}