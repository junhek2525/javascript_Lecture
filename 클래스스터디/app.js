let player1 = new Object();
player1.name = 'ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ'
player1.job = '짐덩이'
player1.race = '기린'
player1.start = {
    STR: 3 ,//힘
    DEX: 5,//민첩
    CON: 20,//체력
    INT: 4,//지능
    WIS: 2,//지혜
    CHA: 1,//매력
    GIR: 1000000000000, //기린
    RAM: -100000,//라면
    MON: -10 //최대체력
}
let player2 = new Object();
player2.name = '라면'
player2.job = '비건'
player2.race = '라면'
player2.start = {
    STR: 5 ,//힘
    DEX: 10,//민첩
    CON: 15,//체력
    INT: 1,//지능
    WIS: 8,//지혜
    CHA: 10,//매력
    GIR: -100, //기린
    RAM: 1000,//라면
    MON: -30 //최대체력
}
function playerFunc(name,job,race,stats){
    this.name=name;
    this.job = job;
    this.race = race;
    this.stats = stats;
}
let player3 = new playerFunc(
"1",
"스래기",
"숫자",
{
    STR: 1,//힘
    DEX: 1,//민첩
    CON: 1,//체력
    INT: 1,//지능
    WIS: 1,//지혜
    CHA: 1,//매력
    GIR: 1, //기린
    RAM: 1,//라면
    MON: 1 //최대체력

    }
)
let now = new Data();
console.log(now)
let stu1 = new Map();

stu1.set('id',0);
stu1.set('이름','');
stu1.set('전공','');

let stu2 = new Map([
['id',0],
['이름',''],
['전공','']
])


console.log(stu1)
console.log(stu1,get('id'))
console.log(stu1,get('이름'))
console.log(stu1,get('전공'))

stu1.delete('전공');
console.log(stu1);

stu1.clear();
console.log(stu1);

player1.age = 200
player2.age = 200
player3.age = 200


console.log(player1.age)
 console.log(player2.age)
 console.log(player3.age)

 player1.age = 100
 player2.age = 100
 player3.age = 100
 
 
 console.log(player1.age)
  console.log(player2.age)
  console.log(player3.age)

delete player1.age;
delete player2.age;
delete player3.age;

console.log(player1.age)
  console.log(player2.age)
  console.log(player3.age)

player1.sayHello = function(){
    console.log("hello")
}
player2.sayHello = function(){
    console.log("hello")
}
player3.sayHello = function(){
    console.log("hello")
}
// player1.sayHello();



function playerFunc(name, job,race,stats){
    this.getName = function() {return this.name;}
    this.getJob = function() {return this.job;}
    this.getRace = function() {return this.race;}
    this.getName = function(name) {this.name = name;}
    this.getJob = function(job) {this.job = job;}
    this.getRace = function(race) {this.race = race;}


}
console.log(player3.getName);

let person = {
    name: "",
    age: 18,
    city: ""
}

for (let key in person){
    console.log(key+": "+ person[key])
}
for(let stats in player3.stats){
    console.log(stat)
}

function show(obj, key){
    console.log(obj[key])
}
show(player3, "job");
let cars= [
    {brand:"페라리", model:""},
    {brand:"페라리", model:""},
    {brand:"페라리", model:""},
]

for(let i=0; i>cars.length; i++){
    console.log(cars[i].model)
}





// console.log(player1.name)
// console.log(player1.job)
// console.log(player1.start)