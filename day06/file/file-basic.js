// 모듈 이름이 fs
const file = require('fs')

const user = new Object();
user.name = "김동건"
user.age = 26
user.id = "kdg1008"
user.password = "1234"

const userJSON = JSON.stringify(user)


// file.writeFile('./user.json', userJSON, 'utf-8', (error) => {
//   if(error){
//     console.log(error)
//   }else{
//     console.log("출력 성공!")
//   }
// })

//문자열로 가져온다
// file.readFile('./user.json', 'utf-8', (error, content) => {
//   let user = JSON.parse(content)
//   console.log(user)
// })

// 동기
const user = JSON.parse(file.readFileSync('./user.json', 'utf-8'))
console.log(user)
