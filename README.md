Mr. Roboger's Neighborhood

Author: Nathan Conn

This is a webpage where a user can try to gain access, metaphorically, to Mr. Roboger's Neighborhood

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery-3.6.0
* Bootstrap

## Description

Users will first be prompted with the title of the page and an area to enter the entry code to Mr. Roboger's Neighborhood. If the wrong digits are entered, the user will be prompted to try again, and if they are getting close then Mr. Roboger's door-robot will respond with either a "Beep!" or "Boop!". Once the user sucessfully guesses the correct digit, they will be prompted with a greeting from Mr. Roboger himself!

## Setup/Installation Requirements

* Any browser, with a preference for Chrome

* Once on the page, enter your guess of the secret code.

* When answering, pay close attention to the results. If it seems like the door-robot is communicating back, you may be getting close to the correct number or pattern!

* If you answer incorrectly, you can hit "Try Again" and it will clear the submission form. The phrase only will change once you either get closer to or the exact right digit or pattern.

* Use this link: https://nconn34.github.io/robogersneighborhood/


* You will want to clone this from the repository as is!

## Known Bugs

* No bugs known thus far, however I will be meeting with Patrick Osten and discussing best practices moving forward, which will include how much more to build this page out and tips for refactoring. 

## License

If you have any questions please use the contact information provided on the website.

Copyright (c) 11/21/2021 Nathan Conn 

Describe: helloNeighbor()

Test: "It will return 'Won't you be my neighbor?' when the number 3 is entered."
Code: helloNeighbor(3)
Expected Output: "Won't you be my neighbor?"

Test: "It will return 'Boop!' when the number 2 is entered."
Code: helloNeighbor(2)
Expected Output: "Boop!"

Test: "It will return 'Beep!' when the number 1 is entered."
Code: helloNeighbor(1)
Expected Output: "Beep!"

Test: "It will return all other numbers as itself"
Code: helloNeighbor (5)
Expected Output: 5

Test: "It will take a number as a string and slice each number to a single digit to store in an empty array"
Code: const number = 123456789; output = []; robogerNum = number.toString;
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

Test: "It will identify 3 when one is present in the array"
Code: output.includes(3)
Expected Output: True

Test: "It will identify 2 when one is present in the array"
Code: output.includes(2)
Expected Output: True

Test: "It will identify 1 when one is present in the array"
Code: output.includes(1)
Expected Output: True

Test: "It will return the prompt when a 3 is present in the array"
Code: helloNeighbor(3)
Expected Output: "Won't you be my neighbor?"

Test: "It will return the prompt when a 2 is present in the array"
Code: helloNeighbor(2)
Expected Output: "Boop!"

Test: "It will return the prompt when a 1 is present in the array"
Code: helloNeighbor(1)
Expected Output: "Beep!"

Test: "It will return the prompt when a 3 is present in any order in the array"
Code: helloNeighbor(23)
Expected Output: "Won't you be my neighbor?"

function helloNeighbor(number){
  const hello3 = "Won't you be my neighbor?";
  const hello2 = "Boop!";
  const hello1 = "Beep!";
  let robogerNum = number.toString();
  let roboger = "";
  let output = []
 for (let i = 0, length=robogerNum.length; i < length; i += 1){
    output.push(+robogerNum.charAt(i));
  } 
    if (output.includes(3)){
    roboger = hello3;
    return roboger
   }else if (output.includes(2)){
    roboger = hello2;
    return roboger
   }else if (output.includes(1)){
    roboger = hello1;
    return roboger
}
};

Describe: howdyRoboger(number)
Test: "It will return a range of numbers from 0 to the user inputted number."
Code: howdyRoboger(5)
Expected Output: 0, 1, 2, 3, 4, 5

Test: "It will replace 3 with 'Won't you be my neighbor?'."
Code: howdyRoboger(5)
Expected Output: 0, 1, 2, Won't you be my neighbor?, 4, 5

Test: "It will replace 2 with 'Boop!'."
Code: howdyRoboger(5)
Expected Output: 0, 1, Boop!,3, 4, 5

Test: "It will replace 1 with 'Beep!'."
Code: howdyRoboger(5)
Expected Output: 0, Beep!, 2,3, 4, 5