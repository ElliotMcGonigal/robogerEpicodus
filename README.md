# Mr Roboger's Neighborhood
#### Project by Elliot McGonigal
## Description
This webpage will take in a number an count up to it replacing some numbers with other phrases as it goes along.
## Technologies Used
* HTML
* Bootstrap
* javascript
* jQuery
## Setup
1. 
## Known Bugs
No known bugs
## License
GNU gpl 3.0 view LICENSE for more details
### Specs
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the input."
Code: beepBoop(4);
Expected Output: [0,1,2,3,4]

Test: "It should return an array of numbers with all the numbers containing a '1' replaced with 'Beep!'"
Code: beepBoop(13);
Expected Output: [0,Beep!,2,3,4,5,6,7,8,9,Beep!,Beep!,Beep!,Beep!]

Test: "It should also replace numbers containing '2' with 'Boop!' and as a higher priority"
Code: beepBoop(13);
Expected Output: [0,Beep!,Boop!,3,4,5,6,7,8,9,Beep!,Beep!,Boop!,Beep!]

Test: "It should also replace numbers containing '3' with 'Won't you be my neighbor?' as a higher priority"
Code: beepBoop(13);
Expected Output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?]