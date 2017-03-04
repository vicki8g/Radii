// $(document).ready(function() {
//     var url = window.location.search;
//     var userId = url.split("=")[1];
//     getUserData(userId);
//     function getUserData(user) {
//         userId = "/?user_id=" + userId;
//         $.get("/api/users" + userId, function(data) {
//             buildTheProfile(data);
//         });
//     };
//     function buildTheProfile(userData) {
//         var oldSrc = 'http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg';
//         var newSrc = userData.user_pic;
//         $('img[src="' + oldSrc + '"]').attr('src', newSrc);
//     }
// });