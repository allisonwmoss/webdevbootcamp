//form events and prevent default
  //the action we usually specify in forms has been some nonsense so far
  //because we didn't know how to do something with it
  <form action ="/dogs" id="commentForm"> //like how this doesn't go anywhere
    <input type="text" name="comment" placeholder = "comment here">
    <button>Post comment </button>
  </form>
  //javascript can fix this!
  const commentForm = document.querySelector('#commentForm')
  commentForm.addEventListener('submit', function (e) {
    alert('you commented!');
  }); //ah, but this still just refreshes the page immediately
  //we need to tell the browser not to do the default behavior.
  const commentForm = document.querySelector('#commentForm')
  commentForm.addEventListener('submit', function (e) {
    e.preventDefault(); //this prevents the default behavior (refreshing the page)
    alert('you commented!');
  });
  
  //how would we append this comment to the page as part of an existing unordered list?
   const commentForm = document.querySelector('#commentForm')
  commentForm.addEventListener('submit', function (e) {
    const commentInput = document.querySelectorAll('input')[0];
    e.preventDefault(); 
    console.log(commentInput.value);
  });
  //every form object has a property called elements
 commentForm.elements.comment.value //easier than selecting the input manually
 //we can also iterate over the elements if there are a lot of them
 const newComment = document.createElement('li');
 newComment.append(`-${comment}`)
 
 
