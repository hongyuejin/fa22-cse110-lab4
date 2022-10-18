1. The bug was due to the string variable type when trying to sum up the two numbers. A string + another string becomes concatenation of strings. Therefore, by type cast the two variables using Number(), we are able to get the correct result. 

2. See the attached fix.png

