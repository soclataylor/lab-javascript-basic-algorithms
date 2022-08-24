/*
            MARIONA BATALLA TAYLOR
            mariona.batalla.taylor@gmail.com
            IronHack - FrontEnd Bootcamp
            Week 3 - Day 1 Lab: JAVASCRIPT BASIC ALGORITHMS
            August 2022
*/


/*
        ITERATION 1: Names and Input

        1.1 Create a variable hacker1 with the driver's name.
        1.2 Print "The driver's name is XXXX".
        1.3 Create a variable hacker2 with the navigator's name.
        1.4 Print "The navigator's name is YYYY".
*/

let hacker1='Mickey Mouse';
console.log('The driver\'s name is ' + hacker1 +'.');

let hacker2='Donald';
console.log('The navigator\'s name is ' + hacker2 +'.');


/*
        ITERATION 2: Conditionals

        2.1. Depending on which name is longer, print:
        - The driver has the longest name, it has XX characters. or
        - It seems that the navigator has the longest name, it has XX characters. or
        - Wow, you both have equally long names, XX characters!.
*/

/*we store the lengths into two variables*/
let driver=hacker1.length;
let navigator=hacker2.length;

if(driver>navigator)
{
    console.log('The driver has the longest name, it has '+driver+' characters.');
}

else if(navigator>driver)
{
    console.log('It seems that the navigator has the longest name, it has '+navigator+' characters');
}

else console.log('Wow, you both have equally long names, '+driver+' characters!');



/*
        ITERATION 3: Loops

*/


/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/
for (var i=0; i<hacker1.length; i++)
{
    /*process because with console.log it ends with a line break*/
    process.stdout.write(hacker1.charAt(i).toUpperCase()+' ');
}

/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

let reverseNav='';
for (var j=(hacker1.length-1);j>=0;j--)
{
    reverseNav+=hacker1[j];
}
console.log('\n'+reverseNav);


/*3.3 Depending on the lexicographic order of the strings, print:
        - The driver's name goes first.
        - Yo, the navigator goes first definitely.
        - What?! You both have the same name?*/


switch(hacker1.localeCompare(hacker2))
{
    /*
        a.localeCompare(b)
        
        -1: a goes before
        0: they're the same
        1: otherwise
        */

    case -1: console.log('The driver\'s name goes first'); break; //hacker 1 goes before
    case 0: console.log("What?! You both have the same name?"); break; //they are the same
    case 1: console.log('Yo, the navigator goes first definitely'); break; //hacker 2 goes before
}