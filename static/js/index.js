// set initial count
let count = 0;


// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// //.log(btns);

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList;
        let decrease = styles.contains('decrease')
        let increase = styles.contains("increase");
        let reset = styles.contains("reset");
        //console.log(decrease);

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }




        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})

