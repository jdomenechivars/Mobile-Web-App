getPosts();

document.getElementById("login").addEventListener("click", login);

document.getElementById("create-post").addEventListener("click", function(){writeNewPost()});

function login (){
  
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  
}

function writeNewPost(){
  
  var title = document.getElementById("title").value;
  var text  = document.getElementById("body").value;
  
  // A post entry.
  
  var postData = {
    title: title,
    body: text,
    
  };
  
  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("match1").push().key;
  
  var userName = firebase.auth().currentUser.displayName;
  
  var updates = {};
  updates["/match1/" + newPostKey] = postData;
  
 document.getElementById("title").value="";
 document.getElementById("body").value="";
  
  return firebase.database().ref().update(updates);  
  
}

function getPosts(){
  
  firebase.database().ref("match1").on("value",function (snapshot){
    var logs = document.getElementById("posts");
    logs.innerHTML="";
    var posts = snapshot.val();
    
    for (var key in posts){
      
      var text = document.createElement("div");
      var element = posts[key];
      
      text.append(element.title);
      
      text.append(element.body);
      
      logs.append(text);
      
    }
  })
  
  
}