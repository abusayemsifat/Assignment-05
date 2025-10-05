1.	What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
Ans: getElementById selects the element based on the specific id and it returns an HTML element, whereas getElementsByClassName selects all the elements based on the specific class name and it returns html collection. querySelector selects the first element that matches the specific CSS selector, and it returns html element, whereas querySelectorAll selects all the elements with that specific CSS selector and it returns a NodeList.

2. How do you create and insert a new element into the DOM?  
Ans: For example, to create and insert a paragraph tag ->  
    document.createElement("p")
if it is inside a div which has the id="div", to insert ->
    document.getElementById("div").appendChild("p")
3. What is Event Bubbling, and how does it work?
Ans: Event Bubbling is a mechanism of the  JS DOM. In this process, an event occurs on the innermost element, which is selected, and then the event propagates through its parent node and so on till the root of the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object. It is useful because it helps us to make code smaller and easier to understand

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() prevents the browser's default action associated with an event, whereas stopPropagation() stops an event's propagation upward or downward in the DOM tree while event bubbling.
