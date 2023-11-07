let headingContent = document.querySelector('.heading-2').innerHTML;
document.getElementById('myHeading').innerHTML = headingContent;
console.log(headingContent);
let para = document.createElement('p');
let node = document.createTextNode('This is my text node');
para.appendChild(node);
let myDiv = document.getElementById('myDiv');
myDiv.appendChild(para);

let para2 = document.querySelectorAll('.para-1');
let para3 = document.getElementsByTagName('p');
para2[0].style.color = 'red';
para3[1].style.color = 'green';
console.log(para3);

function changeColor() {
  let colors = ['green', 'blue', 'red', 'yellow'];
  let random = Math.floor(Math.random() * colors.length);
  console.log(
    'The random number is ' + random + ', the random color is ' + colors[random]
  );

  document.body.style.backgroundColor = colors[random];
}

function changeText(id) {
  id.innerHTML = 'This Element Text has changed.';
}

function displayDate() {
  document.getElementById('myDiv').innerHTML = Date();
}

document.getElementById('myTime').addEventListener('click', displayTime);
function displayTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let am = true;

  if (hours > 12) {
    am = false;
    hours -= 12;
  }

  let currentTime = hours + ':' + currentDate.getMinutes();

  if (am) {
    currentTime += 'AM';
  } else {
    currentTime += 'PM';
  }
  console.log(currentTime);
  document.getElementById('myDiv').innerHTML = currentTime;
}

function myAge() {
  let age = ageForm.age.value;
  console.log('Input ' + age + ',' + typeof age);
  document.getElementById('myDiv').innerHTML = age;
  return false;
}
