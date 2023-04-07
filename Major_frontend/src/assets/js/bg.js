let index = 0;
change();
function change() {
    let demo = document.getElementsByClassName('demo');

    for (let i = 0; i < demo.length; i++) {
        demo[i].style.display = "none";
    }

    index++;
    if (index > demo.length) {
        index = 1;
    }

    demo[index - 1].style.display = "block";

    setTimeout(change, 2000);
    // console.log("Hello");
}


// console.log("Hello..");