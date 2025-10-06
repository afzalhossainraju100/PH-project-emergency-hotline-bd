### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: 
getElementById: 
getElementById used for grap a Id to modify the area and a id will be unique so for single changes it is the best solution.
getElementbyClassName:
On the other hand getElementByClassName is used for catch the class name used in the html file because of to modify the area . 
querySelector:
And the querySelector are used for any kinds of single query if there is a lot of quary in same name it will pick the first one .
querySelectorAll:
it is use for catch a lot of query at the same name and after catching that we use a for loop for modify using eventListener.

2. How do you **create and insert a new element into the DOM**?
First of all i decleared a variable like 
const div = document.createElement("div");
now clement creation done
for Insert div.innerHtml=`//here what i want to insert to the div`
now insert done
3. What is **Event Bubbling** and how does it work?
when i clicked a child class , then the parents class are behaves likes clicked automatically, the the bubbling flow goes to which child class are clicked to parents to parents class
4. What is **Event Delegation** in JavaScript? Why is it useful?

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() stop the default behavour of a html element .
on the other hand stopPropagation used for stop bubbling . when the button will clicked , only and only that time the event will work