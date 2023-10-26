var username = prompt("Hello! What's your name?");
if (username !== null && username !== '') {
  var meaningfulMessage = 'Hello, ' + username + '! Have a great day.';
  alert(meaningfulMessage);
} else {
  alert('Hello there.');
}
