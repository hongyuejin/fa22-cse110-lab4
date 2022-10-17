## Question 1
In line 12, the program will print out a 3. </br>
This is because we still have access to the var i after the for-loop. Since when i = 3, the for-loop stops as the input array has a length of 3. Thus, when we print the var i after the for loop, it would produce an output of 3. 

## Question 2
In line 13, the program will output 150. </br>
Same reason as question 1. As we know for a var variable, it's scope is within the function. In the for-loop, it obtains 150 in the last loop with a formula that discountedPrice = 300 * (1-0.5) = 150. When the for-loop finishes, the discountedPrice still can be accessed and its value remains unchanged. Thus, in line 13 when we want to output the var discountedPrice it would produce an output of 150.

## Question 3
In line 14, the program will output 150. </br>
Same reason as question 2. As we know for a var variable, it's scope is within the function. In the for-loop, it obtains 150 in the last loop with a formula that finalPrice = Math.round(150 *100)/100 = 150. When the for-loop finishes, the finalPrice still can be accessed and its value remains unchanged. Thus, in line 14 when we want to output the var finalPrice it would produce an output of 150.

## Question 4
This program would return an array of [50, 100, 150] </br>
In the for-loop, the var discounted is able to get all the discounted final price and store them in the var discounted. As this program returns the var discounted, the array with all the corresponding final discounted price also gets returned.

## Question 5
In line 12, an error will occur. </br>
Since a let variable's scope is within the for-loop block, after the for-loop ends, the index let variable i will not still be accessible. Therefore, the program will produce an error that variable i is not yet defined. 

## Question 6
In line 13, an error will occur. </br>
Since a let variable's scope is within the for-loop block, after the for-loop ends, the let variable discountedPrice will not still be accessible. Therefore, the program will produce an error that variable discountedPrice is not yet defined. 

## Question 7
In line 14, the program will produce an output 150. </br>
A let variable's scope is within the block, but in this case, the place the let variable finalPrice gets declared is outside of the for-loop and inside of the function block.Therefore, the variable finalPrice will still remain accessible after the for-loop. Since in the for-loop, it obtains 150 in the last loop with a formula that finalPrice = Math.round(150 *100)/100 = 150 and its value wasn't changed after the for-loop. Therefore, the program will produce an output of 150. 

## Question 8
This program would return an array of [50, 100, 150] </br>
In the for-loop, the let variable discounted is able to get all the discounted final price and store them. As this program returns the let variable discounted, the array with all the corresponding final discounted price gets returned.

## Question 9
In line 11, an error will occur. </br>
Since a let variable's scope is within the for-loop block, after the for-loop ends, the index let variable i will not still be accessible. Therefore, the program will produce an error that variable i is not yet defined. 

## Question 10
In line 12, it will output 3. </br>
The const variable length gets assigned to the input variable prices's length and never changed in the function. Therefore, the program will output the length of the input var [100, 200, 300], which is 3. 

## Question 11
This program would return an array of [50, 100, 150] </br>
The const array variable discounted is declared in the function scope. Although in the for-loop, new objects get added into the array, but there's no re-assigning/declaring to the const variable discounted. The variable discounted was pointing at the same array since it's assigned. Therefore, after the calculation and adding-elements operation like what we did in the above questions, the three discounted prices are able to be added to the list and get returned. 

## Question 12
A: student.name</br>
B: student["Grad Year"]</br>
C: student.greeting()</br>
D: student["Favorite Teacher"].name</br>
E: student.courseLoad[0]</br>