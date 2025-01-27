// async await (ES8)
const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {})
  const todos =  await response.json()
  console.log(todos)
  return todos;
}
// console은 동기라서 pending이 나오며, then또는 catch를 통해 비동기의 흐름을 타게해준다
// getTodos().then(console.log)

// const getZip = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users", {})
//   const zip = await response.json()
//   const zipcode = await zip.map((zip) => zip.address.zipcode)
//   return zipcode
// }
// getZip().then(console.log)

// fetch("https://jsonplaceholder.typicode.com/users", {})
//   .then((response) => response.json())
//   .then((zip) => zip.map((zipcode) => zipcode.address.zipcode))
//   .then((zipcode) => console.log(zipcode))

// fetch("https://jsonplaceholder.typicode.com/todos", {})
// .then((response) => response.json())
// .then((todos) => todos.filter((todo, i, todos) => todo.completed))
// .then((todos) => todos.slice(0, 10))
// .then((todos) => todos.map((todo, i, todos) => todo.title))
// .then((todos) => console.log(todos))
// .catch((err) => console.error(err))
