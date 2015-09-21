$(document).ready(function () {
 $('#btnTweet').click(function (e) {
 //alert('hello11');
 var textToTweet = "Hi I am tweeting from here";
 if (textToTweet.length > 140) {
 alert('Tweet should be less than 140 Chars');
 }
 else {
 var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
 window.open(twtLink,'_blank');
 }
 });
 });

chrome.commands.onCommand.addListener(function (command)
{
    if (command == "Restart App")
    {
        //alert('hello11');
	var textToTweet = "Hi I am tweeting from here";
       var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
       window.open(twtLink,'_blank');
    };
});

$(window).keydown(function(e){
    if (e.ctrlKey)
        console.log('Control Down');
});
