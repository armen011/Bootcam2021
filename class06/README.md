# Hello I have some tasks and decided to share with you

## _What will be the result and why?_

## _Task01_

```sh
let n =  "" + 1 + 0
console.log(n)
//The result is 10

```

###### The result is 10 because when we plus number and string we make number(1) to string ('1') , and in the same way we make number(0) to string('0') and with plus we join two strings ('1'+'0'='10').

## _Task02_

```sh
let n =  "" - 1 + 0
console.log(n)
//The result is -1

```

###### The result is -1 because when we use ( - ,\* , / ) those try to make string ('') to number (string ('') is equal to 0) , then we deal with simple operation (0-1+0).

## _Task03_

```sh
let n =  true + false
console.log(n)
//The result is 1

```

###### The result is 1 because when we plus boolean and boolean or string values we make boolean() to number() _[true=1,false=0]_ , then we deal with simple operation (1+0).

## _Task04_

```sh
let n =  6 / "3";
console.log(n)
//The result is 2

```

###### The result is 2 because when we use ( - ,\* , / ) those try to make string ('3') to number (3) , then we deal with simple operation (6/3).

## _Task05_

```sh
let n = "2" * "3";
console.log(n)
//The result is 6

```

###### The result is 6 because when we use ( - ,_ , / ) those try to make string ('3') and string('2') to number (3) and number(2) , then we deal with simple operation (2 _ 3).

## _Task06_

```sh
let n = 4 + 5 + "px";
console.log(n)
//The result is 9px

```

###### The result is 9px because first of all JS pluses number(4) and number(5), then when we plus number and string it makes number(9) to string('9'), in the end it joins to strings ('9' and 'px')

## _Task07_

```sh
let n ="$" + 4 + 5;
console.log(n)
//The result is $45

```

###### The result is $45 because first of all JS pluses string('$') and number(4),it makes number( 4 ) to string('4'), then joins them [string($4)].In the same way it makes number(5) to sting('5') and joins string('$4') and string('5').

## _Task08_

```sh
let n ="4" - 2;
console.log(n)
//The result is 2

```

###### The result is 2 because when we use ( - ,\* , / ) those try to make string ('4') to number (4) , then we deal with simple operation (4-2).

## _Task09_

```sh
let n ="4px" - 2;
console.log(n)
//The result is NaN

```

###### The result is NaN because when we use ( - ,\* , / ) those try to make string('4px') to number,and when it fails it returns NaN, at the end NaN +2 is NaN.

[NaN-press for more info](https://en.wikipedia.org/wiki/NaN)

## _Task10_

```sh
let n =  7 / 0;
console.log(n)
//The result is Infinity

```

###### The result is Infinity because when we devide any number to 0 returns Infinity

## _Task11_

```sh
let n =  " -9 " + 5 ;
console.log(n)
//The result is -95

```

###### The result is -95 because when we plus number and string we make number(5) to string ('5') , and then with plus we join two strings ('-9'+'5'='-95').

## _Task12_

```sh
let n =  " -9 " - 5 ;
console.log(n)
//The result is -14

```

###### The result is -14 because when we use ( - ,\* , / ) those try to make string ('-9') to number (-9) , then we deal with simple operation (-9-5=-14).

## _Task13_

```sh
let n =  null + 1;
console.log(n)
//The result is 1

```

###### The result is 1 because null is equal to 0, and then we plus (0+1=1).

## _Task14_

```sh
let n =  undefined + 1 ;
console.log(n)
//The result is NaN

```

###### The result is NaN because undefined is Not A Number , (NaN +1=NaN).
