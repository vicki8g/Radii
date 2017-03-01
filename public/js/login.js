$(document).ready(function() {
    $("#fbLogin").on("click", function() {
        // this function will check the user status (Logged in or not / Authorized or no)
        // then it will trigger the statusChangeCallback function
        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }
            // This is called with the results from from FB.getLoginStatus().
        function statusChangeCallback(response) {
            console.log('statusChangeCallback');
            console.log(response);
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // Full docs on the response object can be found in the documentation
            // for FB.getLoginStatus().
            if (response.status === 'connected') {
              // Logged into your app and Facebook.
              handleNewUser();
            } else if (response.status === 'not_authorized') {
              // The person is logged into Facebook, but not your app.
              document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
            } else {
              // The person is not logged into Facebook, so we're not sure if
              // they are logged into this app or not.
              document.getElementById('status').innerHTML = 'Please log ' +
                'into Facebook.';
            }
        }

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1323198571035041',
                cookie     : true,  // enable cookies to allow the server to access
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use graph api version 2.8
            });

        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Here we run a very simple test of the Graph API after login is
        // successful.  See statusChangeCallback() for when this call is made.
        function handleNewUser(event) {
            FB.api('/me?fields=name,email,picture', function(response) {
                var userName = response.name;
                // var userId = response.id;
                var userEmail = response.email;
                var userPic = response.picture.data.url;
                insertUser({
                    name: userName,
                    // userId: userId,
                    email: userEmail,
                    user_pic: userPic
                });
            });
        }
    });

    function insertUser(userData) {
        $.post("/api/users", userData)
        .then(redirectToProfile);
    }
    function redirectToProfile() {
        window.location.href = '../profile.html'
    }
});