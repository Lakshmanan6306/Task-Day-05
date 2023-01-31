//1.Do the below programs in anonymous function & IIFE

//   Return median of two sorted arrays of the same size.


/* A.  Print odd numbers in an array in anonymous function

    var numbers = [2,5,66,9,45,63,75,15];

    var Odd = function(Num){
        var result = [];
        for(let i=0;i<Num.length;i++){
            if(Num[i]%2){
                 result.push(Num[i]);
            }
        }return result;

    }
    console.log(Odd(numbers));

 OUTPUT 
[5, 9, 45, 63, 75, 15] 
--------------------------------------------------------------- 
        Print odd numbers in an array in IIFE.

( function(Num){
    var result =[];
    for(let i=0;i<Num.length;i++){
        if(Num[i]%2){
            result.push(Num[i]);
        }
    }console.log(result);
})([2,5,66,9,45,63,75,15])

OUTPUT
 [5, 9, 45, 63, 75, 15]
---------------------------------------------------------------- */

/* B.  Convert all the strings to title caps in a string array

var string = ["banana", "orange", "apple", "mango","pinapple","lemon","watermelon"];

var titleCaps = function(value){
    var result =[];
    for(let i=0;i<value.length;i++){
        result.push(value[i] = value[i].charAt(0).toUpperCase()+value[i].slice(1));
    }return result;
}
console.log(titleCaps(string));

OUTPUt:
['Banana', 'Orange', 'Apple', 'Mango', 'Pinapple', 'Lemon', 'Watermelon']
------------------------------------------------------------------------------------------- 
         Convert all the strings to title caps in a string array In IIFE.

(function(value){
    var result =[];
    for(let i=0;i<value.length;i++){
        result.push(value[i]=value[i].charAt(0).toUpperCase()+value[i].slice(1));
    }console.log(result);
})(["banana", "orange", "apple", "mango","pinapple","lemon","watermelon"])

OUTPUT;
['Banana', 'Orange', 'Apple', 'Mango', 'Pinapple', 'Lemon', 'Watermelon']
------------------------------------------------------------------------------------------- */

/* C.  Sum of all numbers in an array

var numbers = [2,5,66,9,45,63,75,15];
var sum = function(add){
    var result = add.reduce((a,b) => a+b);
    return result;
}
console.log(sum(numbers));

OUTPUT:
280
-------------------------------------------------------
    Sum of all numbers in an array using IIFE.

(function(add){
    var result = add.reduce((a,b) => a+b);
    console.log(result);
})([2,5,66,9,45,63,75,15])

OUTPUT:
280
--------------------------------------------------------- */

/*  D.  Return all the prime numbers in an array

var numbers = [1,2,3,4,5,6,7,8,9,10,11,13,17,19,23];

var primeNumbers = function(list){
    let num = [];
    for(let i=0;i<list.length;i++){
    var isPrime = true;
    if(list[i]==1 || list[i]==0){
        isPrime=false;
    }else if (list[i]>1){
         for(let j=2;j<list[i];j++){
            if(list[i]%j==0){
                isPrime = false;
                break;
             }
         }
    }
     if(isPrime){
            num.push(list[i]);
        }
    } return num;
}
console.log(primeNumbers(numbers));

OUTPUT:
[2, 3, 5, 7, 11, 13, 17, 19, 23]
----------------------------------------------------------- 
         Return all the prime numbers in an array using IIFE

(function(list){
    let num = [];
    for(let i=0;i<list.length;i++){
    var isPrime = true;
    if(list[i]==1 || list[i]==0){
        isPrime=false;
    }else if (list[i]>1){
         for(let j=2;j<list[i];j++){
            if(list[i]%j==0){
                isPrime = false;
                break;
             }
         }
    }
     if(isPrime){
            num.push(list[i]);
        }
    } console.log(num);
})([1,2,3,4,5,6,7,8,9,10])

OUTPUT:
[2, 3, 5, 7]
--------------------------------------------------------- */

/* E.    Return all the palindromes in an array

    var input = ["abc",'car','ada','racecar','cool','nitin','aba'];
    var palindrome = function(arr,N){
        var result = [];
        for(var i=0;i<N;i++){
           if(arr[i]=== arr[i].split('').reverse().join('')){
                result.push(arr[i]);
           }
        }return result;
    }
    console.log(palindrome(input,input.length));

    OUTPUT:
    ['ada', 'racecar', 'nitin', 'aba']
    --------------------------------------------------- 
          Return all the palindromes in an array in IIFE

    (function(arr){
        var result = [];
        for(let i=0;i<arr.length;i++){
            if(arr[i]==arr[i].split('').reverse('').join('')){
                result.push(arr[i]);
            }
        }console.log(result);
    })(["abc",'car','ada','racecar','cool','nitin','aba'])

    OUTPUT:
    ['ada', 'racecar', 'nitin', 'aba']
    --------------------------------------------------------- */
/*  F.       Remove duplicates from an array

    var my_array = [1, 1, 2, 3, 4, 3, 5];
    var duplicate = function(a){
        var New = {};
    for(let i=0;i<a.length;i++){
        New[a[i]] = 0;
    }
    var Result = Object.keys(New)
    return(Result);
    }
    console.log(duplicate(my_array));

    OUTPUT:
    ['1', '2', '3', '4', '5']
     --------------------------------------------------------- 
          Remove duplicates from an array in IIFE method

    (function(a){
        var New = {};
        for(let i=0;i<a.length;i++){
            New[a[i]] = 0;
        }
        var result = Object.keys(New);
        console.log(result);
    })([1, 1, 2, 3, 4, 3, 5,5,6,66,88,99,2,4,3,33])

    OUTPUT:
    ['1', '2', '3', '4', '5', '6', '33', '66', '88', '99']
    --------------------------------------------------------- */
/*  G.        Rotate an array by k(ex: 4(k) times ) times

    var Array = [1, 3, 5, 7, 9];
    var k = 4;
    var rotate = function(arr,count){

        for(let i=0;i<count;i++){
            arr.unshift(arr.pop());
        }
        return arr;
    }
console.log(rotate(Array,k));

OUTPUT:
[3, 5, 7, 9, 1]
    --------------------------------------------------------- 
     Rotate an array by k(ex: 3(k) times ) times

    (function(arr,count){
        for(let i=0;i<count;i++){
            arr.unshift(arr.pop());
        }console.log(arr);
    })([1, 3, 5, 7, 9],3)

    OUTPUT:
    [5, 7, 9, 1, 3]
    --------------------------------------------------------- */