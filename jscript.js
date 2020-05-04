 src="https://www.gstatic.com/firebasejs/7.13.1/firebase.js";

src ="/__/firebase/init.js";
/*<!-- The core Firebase JS SDK is always required and must be listed first -->*/
 src="/__/firebase/7.13.1/firebase-app.js";

//<!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
src="/__/firebase/7.13.1/firebase-analytics.js";

//<!-- Initialize Firebase -->
src="/__/firebase/init.js";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCLnSjjLlFYHdlv1vkx6NylTOG1nvZgEPs",
    authDomain: "website-e0558.firebaseapp.com",
    databaseURL: "https://website-e0558.firebaseio.com",
    projectId: "website-e0558",
    storageBucket: "website-e0558.appspot.com",
    messagingSenderId: "678104848311",
    appId: "1:678104848311:web:edd5a3e52218c61e7c7a32",
    measurementId: "G-DTE304JDH9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    var username_reg,password_reg,email_reg;
  
    function writeData()
    {
        let  flag;
        username_reg=document.getElementById("username_reg").value;
        password_reg=document.getElementById("pass_reg").value;
        email_reg=document.getElementById("email_reg").value;
        firebase.auth().createUserWithEmailAndPassword(email_reg, password_reg).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage);
            });
                    
                    firebase.auth().onAuthStateChanged(user=>   {
                        if(user){
                            firebase.database().ref().child("user").child(user.uid).set({
                                uid:uid,
                                Username:username_reg,
                                Password:password_reg,
                                Email:email_reg
                            });
                            alert(user.uid+" User Registered!");
                            flag=1;

                        }
                        else{
                            alert("User is not Registered");
                            flag=0;
                        }
                       
                    });
    }
    function reg()
    {
        password_login=document.getElementById("pass_login").value;
        email_login=document.getElementById("email_login").value;
        firebase.auth().signInWithEmailAndPassword(email_login,password_login);
        var uid;
       firebase.auth().onAuthStateChanged(user=>	{
            if(user){
                alert(user.uid);
                window.location.href="index.html";
            }
            else{
                alert("User is not logged in");
                reg();
            }
        });
    }
    function addblog()
        {
            /*
            var title,description,comment;
           var pass=password_login;
           var email_id=email_login;
           firebase.auth().signInWithEmailAndPassword(email_login, password_login).catch(function(error) {
               
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
         
         title=document.getElementById("title").value;
         description=document.getElementById("description").value;
         comment=document.getElementById("comment").value;

         firebase.auth().onAuthStateChanged(user=>   {
            if(user){
                firebase.database().ref().child("user").child(uid).set({
                    title:title,
                    description:description,
                    comment:comment
                });
                alert(user.uid+" User Registered!");
                flag=1;

            }
            else{
                alert("User is not Registered");
                flag=0;
            }
           
        });
        */
//-----------------------------------------
         /*(var userId = firebase.auth().currentUser.uid;
         
         return firebase.database().ref().once('value').then(function(snapshot) {
 // var userId = (snapshot.val() && snapshot.val().userId) || 'Anonymous';
 
 if(uid)
   {
      firebase.database().ref('users/' + userId).set({
   title:title,
   description:description,
   comment:comment
  });
   }
});
   */
  
  if (firebase.auth().currentUser==null) 
            {
                alert(firebase.ref().currentUser.uid);
                alert("hii");
                
                var v1=firebase.auth().currentUser.uid;
               
                    alert(firebase.auth().currentUser.uid);
                    var title1=document.getElementById("title").value;
                    var fname1=document.getElementById("description").value;
                    var lname1=document.getElementById("comment").value;
                        alert("This is msg");
                        var ref1=firebase.database().ref().child("user");
                        ref1.on('value',function(snapshot){
                            snapshot.forEach(function(childSnapshot){
                                var uid=childSnapshot.key;
                                if(uid==v1)
                                {
                                    var v2=uid;
                                    alert(uid);
                                    var ref=firebase.database().ref().child("user").child(v2).child("UI");
                                        ref.set({
                                            title:title1,
                                            description:fname1,
                                            comment:lname1
                                    });
                                }
                        });
                        });
            }
        }
