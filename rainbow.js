const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const allH1 = document.querySelectorAll('h1 span');

for (let i = 0; i < allH1.length; i++){
    allH1[i].style.color = colors[i];
}