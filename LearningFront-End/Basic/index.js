// 変数
let greet = 'Hello World!';

// unko = 'Hello World2!!';

//定数
const greet2 = 'He..Hell...Hello World!';

//bigUnko = 'Hello World2';

const numbers = ['one','two','three', 'four'];

//ループ文
// let index = 0;
// while(index < numbers.length) { //=4
//   //繰り返したい命令を記述
//   console.log(index);
//   index++; 
// }

//if / else

// if(numbers.length > 5) {
//   console.log('Yes！');
// } else {
//   console.log('No！');

// }

//関数

const test = (arg) => {
  //実行したい命令をかく
  if(numbers.length > arg) {
    console.log('Yes！');
  } else {
    console.log('No！');
  
  }
};

//オブジェクト（データの塊）
const arare = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  //命令を記述
  window.alert('No.1');
});

document.getElementsByTagName('button')[1].addEventListener('click', () => {
  //命令を記述
  window.alert('No.2');
});

document.getElementsByTagName('button')[2].addEventListener('click', () => {
  //命令を記述
  window.alert('No.3');
});
