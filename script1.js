// 2.Do the below programs in arrow functions.


/* A.    Print odd numbers in an array

    var numbers = [2,5,66,9,45,63,75,15];
    var odd = (Num) =>{
        return Num.filter((a) => a%2)
    }
    console.log(odd(numbers));

    OUTPUT:
    [5, 9, 45, 63, 75, 15]
--------------------------------------------------------------- */
/* B.    Convert all the strings to title caps in a string array

var string = ["banana", "orange", "apple", "mango","pinapple","lemon","watermelon"];
var result = (str) =>{
    return str.map((a)=>a.charAt(0).toUpperCase()+a.slice(1));
}
console.log(result(string));

OUTPUT:
['Banana', 'Orange', 'Apple', 'Mango', 'Pinapple', 'Lemon', 'Watermelon']
--------------------------------------------------------------- */
/*C.    Sum of all numbers in an array

    var numbers = [2,5,66,9,45,63,75,15];
    var sum = (Num) => {
        return Num.reduce((a,b) => a+b);
    }
    console.log(sum(numbers));

OUTPUT:
280
--------------------------------------------------------------- */
/* D.    Return all the prime numbers in an array

    var numbers = [1,2,3,4,5,6,7,8,9,10,11,13,17,19,23];
    var PrimeNumbers = (Num) =>{
        let res = [];
                for(let i=0;i<Num.length;i++){
            let isPrime = true;
            if(Num[i]==0 || Num[i]==1){
                isPrime = false;
            }else if(Num[i]>1){
                for(let j=2;j<Num[i];j++){
                    if(Num[i]%j==0){
                        isPrime = false;
                        break;
                    }
                }
            }
            if(isPrime){
                res.push(Num[i]);
            }
        } 
        return res;
    }
    console.log(PrimeNumbers(numbers));

    OUTPUT:
    [2, 3, 5, 7, 11, 13, 17, 19, 23]
    --------------------------------------------------------------- */

/*  E.    Return all the palindromes in an array

    var input = ["abc",'car','ada','racecar','cool','nitin','aba'];
    var Palindrome = (Str) =>{
        var result = [];
        for(let i=0;i<Str.length;i++){
            if(Str[i] === Str[i].split('').reverse().join('')){
                result.push(Str[i]);
            }
        } return result;    
    }
    console.log(Palindrome(input));

    OUTPUT:
    ['ada', 'racecar', 'nitin', 'aba']
    --------------------------------------------------------------- */