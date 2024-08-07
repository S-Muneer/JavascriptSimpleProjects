console.log("Muneer");
const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
console.log(body);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // if(e.target.id === 'grey' ){
    //     body.style.backgroundColor =e.target.id
    //     body.style.color='white'
    // }
    // if(e.target.id === 'blue' ){
    //     body.style.backgroundColor =e.target.id
    //     body.style.color='white'
    // }
    // if(e.target.id === 'white' ){
    //     body.style.backgroundColor =e.target.id
    //     body.style.color='black'
    // }
    // if(e.target.id === 'yellow' ){
    //     body.style.backgroundColor =e.target.id
    //     body.style.color='black'
    // }
    switch (e.target) {
      case grey:
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
        body.style.color="white"
        break;
      case white:
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
        body.style.color="black"
        break;
      case blue:
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
        body.style.color="white"
        break;
      case yellow:
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
        body.style.color="black"
        break;
    }
  });
});
