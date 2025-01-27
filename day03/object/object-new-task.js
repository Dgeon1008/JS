// 유저 프로토타입 생성하기
// 프로토타입은 앞글자가 대문자(파스칼 표기법)
// 아이디, 비밀번호, 이름, 나이
// 1) hgd1234, "1234", "홍길동", 20, 
// 2) jbg1234, "장보고", "장보고", 30, 
// 3) lss3456, "dltnstls", "이순신", 17, 

// 콘솔에 모든 유저 출력하기

function User(id, password, name, age) {
  this.id = id;
  this.password = password;
  this.name = name;
  this.age = age;
}

const user1 = new User("hgd1234","1234","홍길동","20");
const user2 = new User("jbg1234","장보고","장보고","30");
const user3 = new User("lss3456","dltnstls","이순신","17");
const user4 = new User("tim0971","0971","김동건","26");

const users = {
  user1: user1,
  user2: user2,
  user3: user3,
  user4: user4
}

for(let i in users){
  console.log(users[i])
}