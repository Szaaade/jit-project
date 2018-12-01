let x = true;
function onButtonClicked() {
    for (let i = 0; i < 10000; i++) {
        if (x) {
            document.body.style.backgroundColor = "red";
            console.log("*police sounds*");
        }
        else {
            document.body.style.backgroundColor = "blue";
            console.log("*police siren*");
        }
        
        x = !x;
    }
}

const GreetingBtn = document.querySelector('.Greeting');
GreetingBtn.addEventListener('click', onButtonClicked);