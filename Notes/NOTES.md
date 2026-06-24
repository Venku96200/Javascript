# JAVASCRIPT

alert("hello"):-  Gives a popup saying hello

This is exactly what javascript does, we give instructions to computer and it returns something back

javascript is case sensitive

document.body.innerHTML='Hello';    :- removes everything in body of webpage and display hello

## Numbers And Math

![alt text](image-3.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-4.png)

## rounding Numbers:- Math.round()

![alt text](image-5.png)

![alt text](image-6.png)

## STRINGS

![alt text](image-11.png)

### Concatenation

'some' + 'text' returns 'sometext'

'some' + 'more' + ' text' returns 'somemore text'

### typeof 2  :- returns 'number'

### typeof 'hello'  :- returns 'string'

'hello' + 3 
converted into
'hello' + '3'
finally returns 'hello3' 
  3 is converted into a string

### This is known as Type coercion (automatic type conversion )

How to get $28.94

wrong:-  '$' + 20.95 + 7.99 this returns '$20.957.99'

ie (1) '$20.95' + 7.99

   (2) '$20.957.99'

 partially correct:- '$' (20.95+7.99) this will return '$28.9399999999999999998'

but we need 28.94

correct:- '$' + (2095+799)/100 returns
'$28.94'

-------------------------------------------

'Items(' +(1+1)+ '): $' + (2095+799)/100
returns
'Items(2): $28.94'

------------------------------------------
![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)
-----------------------------------------

![alt text](image-12.png )

These template string have some special features(just line f-strings in python)

1) Interpolation = insert value directly into a string
Ex:- 'Items($(1+1))' = Items(2)

2) Multi-line string:- 'some
                        text'

![alt text](image-13.png)                        

--------------------------------------------

## javascript code in html file

USE <script></script> to write java script code in it
 

attributes for JS:-

onclick=" js code " 
   EX:-  onclick="alert('Good Job')";

  

The JS code inside <script></script> runs first than onclick JS code runs first  

### Comments in JS

// This is a comment


![alt text](image-14.png)

## Variables

![alt text](image-15.png)


![alt text](image-16.png)

camelCase is used generally in JAVASCRIPT

![alt text](image-17.png)

--------------------------------

Boolens and if-statements

![alt text](image-20.png)

![alt text](image-21.png)

![alt text](image-22.png)

![alt text](image-23.png)

![alt text](image-24.png)

Math.random() :- generates a random number btw 0 and 1

![alt text](image-25.png)

var doesnt follow the rules of scope

![alt text](image-26.png)

![alt text](image-27.png)

![alt text](image-28.png)

-----------------------------------------------

Functions:-

![alt text](image-29.png)

![alt text](image-30.png)

![alt text](image-31.png)