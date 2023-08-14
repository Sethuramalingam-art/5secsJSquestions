var promise1 = new Promise(()=>{})
promise1.then().catch() // then is for resolve and catch is reject
//we can use like this also
promise1.then((result)=> {}, (err)=>{}) // first is for resolve, second is for reject

typeof null
'object'
typeof undefined
'undefined'
[]===[] //false
[1]===[1] // false
null === null true
null == null true

[]+[]
''
['a']+['b']
'ab'
[]
[]=truthy
![]
false
{}+{}
NaN
{'a':1} + {'b':2}
VM967:1 Uncaught SyntaxError: Unexpected token ':'
![]+[]
'false'
null == null
true
{}=truthy
!{} false
Empty array and empty object are truthy values
true =1
false = 0
null = falsey = 0

null = falsy value
!null = true

1+true
2
1+false
1
true+false = 1
null+1
1

// important

'1'+1 = 11
'1'-1 = 0

//when - - string or number not a matter it will add
'5'- -'8'
13
'5'- -8
13
5- -'8'
13
5- -8
13

// when ++ when first is string it will make string addition when first is number so it will make addition
'5'+ +'10'
'510'
5+ +'10'
15
'5'+ +10
'510'
5+ +10
15



'1'+ - '1' // string first s string addition '1-1'
'1-1'
'1'+-1
'1-1'
1+-'1'
0
'1'-+'1'
  
0



'10'>'9' ten>nine = false because n is first t is next
false
'10'>'11'
false
"10">"1" ten > one 
true
'2'<'11'
false
'2'>'11'
true
'2'>10
false
'2'>1
true
"">-1
true
