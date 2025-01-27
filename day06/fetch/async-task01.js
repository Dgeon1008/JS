// async await
// https://jsonplaceholder.typicode.com/todos
// 1) todos에서 title만 가져오기 5개만

// const getTitles = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//     method : "GET"
//   })
//   const todos = await response.json()
//   const titles = await todos.map((todo) => todo.title)
//   return titles
// }

// getTitles()
//   .then((titles) => titles.slice(0, 5))
//   .then(console.log)

  
// https://jsonplaceholder.typicode.com/comments
// 2) email을 앞에서 10개만 가져온 후 email에서 아이디만 가져와서 출력하기
// ["Eliseo@gardner.biz"] -> ["Eliseo"]

// const getComments = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments")
//   const comments = await response.json();
//   return comments
// }

// getComments()
//   .then((comments) => comments.slice(0, 10))
//   .then((comments) => comments.map((comm) => comm.email.split("@")[0]))
//   .then(console.log)

// https://jsonplaceholder.typicode.com/users
// 3) 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// "Leanne Graham" -> "maharG ennaeL"

const getNames = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  const names = await users.map((user) => user.name)
  return names
}

getNames()
  .then((names) => names.map((name) => name.split("").reverse().join("")))
  .then(console.log)


// for(let i of "abcdefg"){
//   console.log(i)
// }

// console.log("abcdefg".split("").reverse().join(""))


