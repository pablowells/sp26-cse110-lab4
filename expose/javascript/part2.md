1. Line 13 will print 3. This is because i is set to 0 and incremented for each iteration of the for loop. The for loop iterates three times then stops. Since, i is declared with var, it can be accessed outside the for loop block. Therefore, line 13 prints 3. 
2. Line 13 will print 150. Within the for loop, discountedPrice is declared with the var keyword. DiscountedPrice is the product of the elements in the prices array times the remaining cost percentage. Due to discountedPrice being re-used, the last element in prices, '300', is operated upon and leaves 150 in discountedPrices. It can then be accessed outside the block as var was used to declare it.
3. Line 15 will print 150. Likewise to the previous answer, finalPrice will store information from the last iteration of the for loop, including discountedPrice equaling 150. Seeing as finalPrice is just discountedPrice with rounding applied, 150 is returned again. 
4. This function returns nothing to the terminal. This is because 'console.log()' is used to print things to the terminal. All instances of this are commented out. Therefore, nothing is returned. 
5. An error is caused. This is because i is declared with the let keyword. This means that i only is accessible within the for loop. Line 12 attempts to access i, which causes an error.
6. Likewise for the above question, discountedPrice is declared with the let keyword. This means that it is only accessible within the for loop. Line 13 attempts to access it, which causes an error. 
7. Line 14 returns 150. This is because finalPrice is declared with let at the top of the function, which then is used to store the product of an operation in the for loop. The last iteration of the for loop places 150 in finalPrice. Line 14 exists within the same function block as its declaration, so it can be accessed and returns the value.
8. Nothing is returned. This is because the 'console.log()' functions are commented out.
9. This code causes an error. This is because i is declared with the let keyword. This means i is only accessible in the for loop. Line 11 is outside the for loop and attempts to access i. This causes the error.
10. The line returns 3. This is because length is initialized with the length of price, which is 3. Line 13 prints the length to console.
11. The function does not return anything. This is because 'console.log()' is used to print to the console, and these functions are commented out. This leads to nothing being returned. 
12.  
- student.name
- student['Grad Year']
- student.greeting()
- student['Favorite Teacher'].name
- student.courseLoad[0]
13. 
- '3' + 2 = '32'
- '3' - 2 = 1
- 3 + null = 3
- '3' + null = 3null
- true + 3 = 4
- false + null = 0
- '3' + undefined = 3undefined
- '3' - undefined = NaN
14. 
- '2' > 1 is true 
- '2' < '12' is false
- 2 == '2' is true
- 2 === '2' is false
- true == 2 is false
- true === Boolean(2) is true 
15. The == operator can not differentiate between certain values like 0 and false due to type conversion. The strict equality operator === checks for equality without type conversion. For the === operator, if a and b are of different types then a === b retursn false without an attempt to convert them. 
16. Check js file
17. A new array called newArr is made with these values [2, 4, 6]. The code begins execution at line 13 with a call to modifyArray using the arguments [1,2,3] and doSomething. The function modifyArray takes an array and a function. Within the function body, a newArr is created. Using a for loop, the value within an index i in array is doubled by calling doSomething using its parameter name, which is callback. This doubled i is placed into newArr. This is done for each element in array. Then, newArr is returned.
18. Check js file
19. The code prints 1, 4, 3, and 2. It prints it in this order as 1 and 4 are printed normally without setTimeout. 3 is then printed as setTimeout is used, but with minimal delay. 2 is then printed as setTimeout is used, but with 1000ms delay.