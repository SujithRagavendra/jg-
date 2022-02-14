const firebaseConfig = {
    apiKey: "AIzaSyDfMnkZJc1mFk2gxJexbwndGm81YgLwasY",
    authDomain: "kwitter-336a7.firebaseapp.com",
    databaseURL: "https://kwitter-336a7-default-rtdb.firebaseio.com",
    projectId: "kwitter-336a7",
    storageBucket: "kwitter-336a7.appspot.com",
    messagingSenderId: "586397980714",
    appId: "1:586397980714:web:a942e4909e715096aa4b53"
  };
  firebase.initializeApp(firebaseConfig);
  function username(){
    user=document.getElementById("user_name").value
     firebase.database().ref("/").child(user).update({
    purpose:"adding_user"
     })
  }
//ADD YOUR FIREBASE LINKS