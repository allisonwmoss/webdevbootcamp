                        //The DOM and More

//What is the DOM?
    //finally, let's learn to combine JS with HTML and CSS
    //DOM = Document Object Model
    //Javascript representation of a webppage
    //If we have an h1 on a page, we'll have a JS object that represents that h1
    //The JS window into the contents of a webpage
    
//The document object
    //ok but what is the document?
    //when browser loads webpage, it takes the HTML and CSS and creates JS objects based on those elements and styles
    //relationships between nested HTML elements are also captured by these JS objects (parent and child)
    //all of these objects are children of the #document object
    //console.dir(document) shows you the JS objects and properties


//getElementById
    //so how do we select DOM elements?
    //using JS to single out one element, or all elements of a class, etc
    //kinda like CSS
    //to select an image by id:
        document.getElementById('id')
        //we can then save this selection to a variable if we want:
            //const idName = document.getElementById('id')

//getElementsByTagName & className
    //we can select by more than just id
    //plural! selects more than one thing at a time
    //give me ALL of the elements with this tag name
    //pass in the tag name, not the element name
    document.getElementsByTagName('img')
        //returns an HTML collection of all imgs
        //looks like an array but it isnt
    const allImages = document.getElementsByTagName('img')
    for (let img of allImages) {
        console.log(img.src)
    }
    //getElementsByClassName is the same concept for classes
    document.getElementsByClassName('classname')

//querySelector and querySelectorAll
    //all-in-one selector that gives you the first match for a particular query
    //to find the first h1 element:
    document.querySelector('h1');
    //to find the first element with particular id:
    document.querySelector('#id');
    //to find first element of a class:
    document.querySelector('.class');
    //We can get more specific, too.
    //What about selecting the anchor tag with a title of "Java"?
    document.querySelector('a[title="Java"]')
    //we can use querySelector to return a collection of ALL matching elements
    //instead of just the first one:
    document.querySelectorAll('h1')//returns all h1s
    //selecting all of the anchor tags in a paragraph:
    document.querySelectorAll('p a');
    //we can save the results to a variable too:
    const links = document.querySelectorAll('p a');

    for (let link of links){
        console.log('link.href');
    }

//innerHTML, textContent, innerText
    //Now that we know how to select, we can manipulate the DOM!
    //This means we can change things in the DOM, and thus in how the page displays,
    //without changing the HTML or CSS. 
    //You don't need to commit all of this to memory. 
    //Just know where to find the information later and focus on understanding. 
    //MDN is your friend.

    //innerText
        document.querySelector('p').innerText
        //this will return all of the text in the first p tag.
        //we can use this to change the inner text WITHOUT changing the HTML or CSS:
        document.querySelector('p').innerText = 'new text here'
    
    //textContent
        //returns every element inside, including hidden stuff
    const allLinks = document.querySelectorAll('a');
    for(let link of allLinks){
        link.innerText = 'I AM A LINK!'
    } //now every link says "I AM A LINK!"
    //we cannot use this to update things like italicization/bolding

    //innerHTML
        //gives us the entire markup of the element, including <em>, <i>, etc
        //most useful when updating contents if we want to change the innerHTML
        document.querySelector('h1').innerHTML = '<i>Italicized</i>'
        //this will replace the HTML of the element with this italicized new stuff
        document.querySelector('h1').innerHTML += '<b>Bolded</b>'
        //this will add to what is already in the HTML of the element, rather than overwriting
        
//attributes
    document.querySelector('#banner').id
    //bear in mind, changing id or class or src in the DOM changes it for your CSS too!
    //changing id might screw up your formatting.

    //getAttribute 
    const firstLink = document.querySelector('a')
    firstLink.getAttribute('id')//returns the id
    //setAttribute
    firstLink.setAttribute('id', 'newid')//you pass in the current id and set a new one
    
    const input = document.querySelector('input[type="text"]')
    input.type //returns value of "text"
    input.type = 'password'//updates type to password using JS

//changing styles
    //We can manipulate styles with JS!
    const h1 = document.querySelector('h1');
    h1.style //returns a massive amount of properties for the object
    //but here's the thing: the style attribute here does not contain styles from our stylesheet
    //instead, it will contain any inline styles from the HTML
    //which is not a good practice
    h1.style.color = 'green'
    //we can update them like this but again, it's not a good practice unless you're just changing like one thing quickly
    //but we can define a CSS class and then add or remove that class from elements
    //this is how we would update all links to be cyan:
    const links = document.querySelectorAll('a');
    for(let link of links){
        link.style.color = 'cyan';
    }
    //with all of this conflicting stuff, how do we know how it's going to look when the page loads?
    window.getComputedStyle(h1) //this will show us. 

document.querySelector('#container')

//classList
    //we can really only add one class for each element in JS bc it will overwrite every time
    //this can mess up our other styles too
    //but that's why we have the classList
    h2.classList //this is an object we can interact with that shows us the classes on an element and allows us to manipulate them
    h2.classList.add('newClass'); //it's like pushing onto an array
    h2.classList.remove('classWeWantToRemove') //like popping but not
    h2.classList.contain('DoesThisClassListHaveThisClass')
    h2.classList.toggle('class')//toggles a particular class on and off by adding or removing it depending on whether or not it's already in the list

//Traversing parent/child/sibling
    const firstBold = document.querySelector('b')
    firstBold.parentElement //gives us the parent element
    //we can move up and down the family tree like this
    //and horizontally by looking at siblings:
    const squareImg = document.querySelector('.square')
    squareImg.parentElement //gives us body
    squareImg.children //no children
    squareImg.nextSibling and squareImg.previousSibling //gives us the next or previous node
    //nodes can represent text, but we don't know what nodes are yet? this is confusing
    //wait, nodes are kinda like studs in a wall that you can nail things to
    squareImg.nextElementSibling and squareImg.previousElementSibling //gives us the actual next or previous sibling

//Append and appendChild
    //creating new DOM elements from scratch in JS
    document.createElement('newElement')
    //this makes us an empty element with no source
    const newImg = document.createElement('img')
    //now we need to add an image source
    newImg.src = 'insert source url here'
    //it's still not on the page though. we need to append it:
    document.body.appendChild(newImg) //will append the new image as the last child of the body
    newImg.classList.add('square') //adds the square class
    const newH3 = document.createElement('h3')
    newH3.innerText = "I am new!"
    document.body.appendChild(newH3)
    //append
    p.append('i am the new last child of this element!') 
    p.prepend('I am the new first child of this element!')
    //insertAdjacentElement: just MDN this if you encounter it later it's too hard to remember
    const h2 = document.createElement('h2')
    h2.insertAdjacentElement('New h2 text')
    const h1 = document.querySelector('h1')
    h1.insertAdjacentElement('afterend', h2)
    //node.After and node.Before: does similar to above, again just MDN it i'm not gonna write this down

//removeChild and remove
    //removeChild is the older method, and it's more annoying and roundabout
        //it removes a child from a parent element
        //we select the parent, call removeChild, and remove the child
    //remove is the newer and sleeker method
        //we call it on the element we actually want removed
        const img = document.querySelector('img');
        img.remove() //the image is now removed
        //as usual, internet explorer doesn't support this but if you're still using IE in 2021 you should be shot on sight
//Demo
    