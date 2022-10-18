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

## Question 13
A. '32' &emsp; In this addition, 2 maps to its string representation </br>
B. 1 &emsp; Since the sign is substraction, '3' maps to its integer representation </br>
C. 3 &emsp; In this addition, null maps to 0 </br>
D. '3null' &emsp; Null maps to its string representation</br>
E. 4 &emsp; True maps to 1</br>
F. 0 &emsp; False maps to 0 and null maps to 0</br>
G. '3undefined' &emsp; Undefined maps to its string representation</br>
H. NaN &emsp; Undefined maps to its numeric conversion NaN and the result is NaN</br>

## Question 14
A. true &emsp; '2' maps to its numeric representation </br>
B. false &emsp; Dictionary comparison, fist char "1" is smaller than "2" </br>
C. true &emsp; '2' maps to its numeric representation </br>
D. false &emsp; For strict equality check the two sides are not the same type</br>
E. false &emsp; True maps to 1, 1 != 2</br>
F. true &emsp; Boolean(numbers other than 0, -0, NaN) = true, true === true, they also have the same type</br>

## Question 15
"==" and "===" both check for equality, but "==" is non-strict check and "===" is a strict equality check. In non-strict check, the variables with different type can have numeric/string/boolean conversion. However, in strict check, both sides of the variables must have same type and same value or else these values are different. 

## Question 17
The output would be [2, 4, 6] </br>
A brief summary for what the program did: the function modifyArray got called and passed in parameters [1, 2, 3] and the function doSomething. Then, inside of the function modifyArray, a for-loop calls the passed-in function doSomething on each element of the array and stores the returned value from the doSomething function to an array. This array gets returned by the function modifyArray. </br>
Therefore, because the doSomething function duplicates its input parameter, what the for-loop did was just duplicate each element from the array and stored them to a new array, then returned the array. Thus, the original [1, 2, 3] becomes [2, 4, 6] after passing into the function modifyArray. 

## Question 19
1 4 3 2