
console.log("Arrow Functions");

// important events
// type , timestamp , defaultPrevented
// target, toElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlKey, shiftKey, metaKey

// Event Propogation
// event bubbling -> document.addEventListener("click", function(e){}, false) // false means event bubbling , also false is default value
// event capturing -> document.addEventListener("click", function(e){}, true) // true means event capturing

// bubbling -> event starts from target element and goes up to the root element
// capturing -> event starts from root element and goes down to the target element

// e.stopPropagation() -> stops the event from bubbling up or capturing down

// e.preventDefault() -> prevents the default action of the event (like form submission, link navigation, etc.)

// e.target -> the element that triggered the event
// e.currentTarget -> the element that the event listener is attached to

//e.target.remove() -> removes the element that triggered the event