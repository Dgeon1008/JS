// https://jsonplaceholder.typicode.com/users
// .toUpperCase() 문자열을 대문자로
// .toLowerCase() 문자열을 소문자로
// city를 가져와서 모두 대문자로 바꾸고 알파벳 중에 A의 개수를 카운트해서 콘솔에 출력하기
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  return users
}

// getUsers()
//   .then((users) => users.map((user) => user.address.city))
//   .then((users) => users.join("").toUpperCase())
//   .then((str) => str.split("A").length - 1)
//   .then(console.log)

// getUsers()
//   .then((users) => users.map((user) => user.address.city))
//   .then((users) => users.join("").toUpperCase())
//   .then((str) => {
//     let count = 0;
//     for(let i of str){
//       i === "A" && count++
//     }
//     return count
//   })
//   .then(console.log)

// getUsers()
// .then((users) => users.map((user) => user.address.city))
// .then((citys) => citys.filter((city) => city.includes('A') || city.includes('a') ))
// .then((citys) => citys.join("").toUpperCase().split(""))
// .then((chars) => chars.filter((char) => char === 'A').length)
// .then(console.log)

// https://jsonplaceholder.typicode.com/users
// fetch로 요청해서 유저들의 평균 lat값 구하기
// address.geo.lat
const getLat = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const datas = await response.json()
  return datas
}
getLat()
  .then((datas) => datas.map((lats) => Number(lats.address.geo.lat)))
  .then((datas) => {
    let maxLat = 0;
    datas.forEach((lat) => {
      maxLat += lat;
    })
    const avgLat = maxLat / datas.length;
    console.log(avgLat)
  })


// getUsers()
// .then((users) => users.map((user) => user.address.geo.lat))
// .then((lats) => lats.reduce((prev, cur) => parseFloat(prev) + Number(cur)) / lats.length )
// .then((average) => average.toFixed(2))
// .then(console.log)