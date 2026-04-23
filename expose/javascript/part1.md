1. 20
2. 20
3. You should avoid using var as variables declared with var are function-scoped, which means that they are accessible throughout the entire function that they are defined in. They penetrate blocks like ifs statements and for loops. Moreover, the declaration with var is hoisted to the top of a function and intialized with undefined. This may lead to accessing a variable before its actual line of declaration without an error and can cause very ambigious bugs. 
4. 20
5. A error is printed, specifically "ReferenceError: result is not defined." Using *let* to declare a variable restricts the variable to a block scope. In other words, result can not be accessed outside the if statement that it is declared in. This is why line 9 functions, but line 13 does not. Line 13 attempts to access result. 
6. The code returns an error. Line 7 attempts to reassign a value to result, which was declared with the const keyword. 
7. The code returns an error. Line 7 attempts to reassign a value to result, which was declared with the const keyword.