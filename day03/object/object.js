// 객체의 선언
// const user = new Object();
// user = {}

const obj ={
  name: "홍길동",
  age: 20,
  height: 180
}

// 마침표 표기법
// console.log(obj.name)
// console.log(obj.age)

// 대괄호 표기법
// 순서가 있거나, 규칙성이 있을 때
// name1: "홍길동",
// name2: "이순신"
// console.log(obj["name"])

const user ={
  name: "김동건",
  age: 26,
  address: "서울",
  introduce : () => {
    console.log("안녕하세요.🤚")
  }
}

// console.log(typeof(user))
// console.log(user.address)
// console.log(user["age"])
// user.introduce()

const products = {
  product1: "지우개",
  product2: "키보드",
  product3: "마우스",
  product4: "연필",
  product5: "노트북",
}

// 일반 for문
// for(let i=0; i<5; i++) {
//   console.log(products["product" + (i + 1)])
// }

// 빠른 for문, 향상된 for문
// for ~ in문
// for(let i in products) {
//   console.log(products[i])
// }

// 배열
// for(let i in products) {
//   console.log(i)
// }


// 객체의 특징
// 1. 값이 있으면 수정된다.
// console.log(products.product1)
// products.product1 = "핸드폰";
// console.log(products.product1)

// 2. 값이 없으면 추가된다.
products.product6 = "도화지";
console.log(products.product6)

// 3. 데이터를 전송할 때 사용하는 자료구조(JSON)과 비슷한 자료구조이다.
// JSON.stringify()

