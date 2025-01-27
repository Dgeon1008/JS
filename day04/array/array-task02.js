// map은 여러번 쓸수 있다 마지막은 forEach사용
// 1) 1 ~ 10까지의 정수 중 홀수만 담고, 출력하기
// new Array(10).fill(0).map((data, i) => i + 1).filter((data) => data % 2 === 1).forEach((data) => console.log(data))

// 2) 1 ~ 10까지 정수를 배열에 담고, x2를하여 출력하기
// const arr1 = new Array(10).fill(0)
// for(let i in arr1){
//   arr1[i] = parseInt(i) + 1
// }
// const result = arr1.map((data) => data * 2)
// console.log(result)

// 3) 한글을 숫자로
// ex) "일이삼사" => "1234"
// const str = "일이삼사";
// const array = ["영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   const num = array.indexOf(str[i]);
//   result += num; 
// }
// console.log(result);

// 4) 숫자를 한글로
// ex) "1234" => "일이삼사"
// const str = "1234";
// const array = ["영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   const num = array.indexOf(str[i]);
//   result += num; 
// }
// console.log(result);


// 5) 1 ~ 100까지 배열에 담고, 3의 배수만 출력하기
// const array = [];
// let result = 0;
// for (let i=0;i<100;i++){
//   array[i] = (i + 1);
// }
// for (let i in array){
//   if (array[i] % 3 == 0) {
//     console.log(array[i])
//   }
// }
// const array2 = array.filter((data, i, array) => {
//   return data % 3 === 0
// })
// console.log(array2)

// 6) 문자열을 반대로 출력하기
// ex) "apple" => "elppa"
// const str1 = "apple"
// const array = (str1.split(""))
// console.log(array.reverse())

// 7) 1 ~ 10까지 누적합 구하기
// const array = [1,2,3,4,5,6,7,8,9,10];
// result = 0;
// array.forEach((data) => {
//   result += data
// })
// console.log(result)


// 8) 1~10까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경후 출력하기
// 9) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
// const array = [10,20,30,40,50];
// console.log(array.sort((a,b) => b - a))

// 10) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i in array) {
//   if (array[i] > 5) {
//     array[i] *= 2;
//   }
// }
// array.forEach((data) => console.log(data));

// 11) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// const array = new Array(30).fill(0)
// let result = 0;
// for (let i in array) {
//   array[i] = parseInt(i) + 1
// }
// for (let i in array){
//   if(array[i] % 2 !== 0){
//     result += array[i] + "*";
//   }
// }
// console.log(result)

// const array 
// ex) result : 1*3*5*7*9*...

// 12) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력하기
// const array = new Array(20).fill(0)
// for (let i in array){
//   array[i] = parseInt(i) + 1
// }
// array.sort((a,b) => b - a)
// result = 0;
// for (let i=0;i<5;i++){
//   result += array[i]
// }
// console.log(result)

// ===================================================================

// 1) 1 ~ 10까지의 정수 중 홀수만 담고, 출력하기
// new Array(10).fill(0).map((data, i) => i + 1).filter((data) => data % 2 === 1).forEach((data) => console.log(data))

// 2) 1 ~ 10까지 정수를 배열에 담고, x2를하여 출력하기
// const arr1 = new Array(10).fill(0)
// for(let i in arr1){
//   arr1[i] = parseInt(i) + 1
// }
// const result = arr1.map((data) => data * 2)
// console.log(result)

// 3) 한글을 숫자로
// ex) "일이삼사" => "1234"
// const hangle = "공일이삼사오육칠팔구"
// const input = "일육칠팔".split("")
// const result3 = input.map((c) => hangle.indexOf(c)).join("")

// 4) 숫자를 한글로
// ex) "1234" => "일이삼사"
// const input2 = "5900".split("")
// const result4 = input2.map(c => hangle[c]).join("")

// 5) 1 ~ 100까지 배열에 담고, 3의 배수만 출력하기
// const data = new Array(100).fill(0).map((data, i, datas) => i + 1)
// data.filter((data) => data % 3 === 0).forEach((data) => console.log(data))

// 6) 문자열을 반대로 출력하기
// ex) "apple" => "elppa"
// const result6 = "apple".split("").reverse().join("")
// console.log(result6)

// 7) 1 ~ 10까지 누적합 구하기
// const result7 = new Array(10).fill(0).map((data, i) => i + 1).reduce((prev, current) => {
//   return prev + current
// })
// console.log(result7)

// 8) 1~10까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경후 출력하기
// new Array(10)
//   .fill(0)
//   .map((data, i) => i + 1)
//   .filter((data) => data % 2 === 0)
//   .map((data) => data * 3)
//   .forEach((data) => console.log(data))

// 9) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
// Array
//   .of(10, 20, 30, 40, 50)
//   .sort((a, b) => a - b)
//   .reverse()
//   .forEach((data) => console.log(data))

// 10) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
// const datas = new Array(10)
//   .fill(0)
//   .map((data, i) => i + 1)

// datas.forEach((data, i, datas) => {
//   datas[i] = data > 5 ? data * 2 : data 
//   console.log(datas[i])
// })
  
// console.log(datas)

// 11) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) result : 1*3*5*7*9*...
const result11 = new Array(30)
  .fill(0)
  .map((data, i) => i + 1)
  .filter((data) => data % 2 === 1)
  .join("*")

console.log(result11)


// 12) 1~20까지 배열에 담고 배열의 들어간 값 중
// 뒤에서 5개 값을 더한 후 출력하기
const arr12 = new Array(20)
  .fill(0)
  .map((data, i) => i + 1)
  .slice((-5))
  .reduce((prev, cur) => prev + cur)

console.log(arr12)