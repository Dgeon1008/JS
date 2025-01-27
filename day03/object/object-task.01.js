const user = {
  user1: {
    name: "홍길동",
    age: 30,
    point : 3000
  },
  user2: {
    name: "이순신",
    age: 20,
    point : 10000
  },
  user3: {
    name: "장보고",
    age: 65,
    point : 9500
  }  
}

// 향상된 for문 for ~ in문을 사용하기!
// 1) 모든 유저의 이름을 출력하기
// 2) 모든 유저의 포인트의 누적합을 출력하기
result = 0;
for(let i in user) {
  console.log(user[i].name, user[i].point)
  result += user[i].point
}
console.log(`포인트 누적합 : ${result}`)
