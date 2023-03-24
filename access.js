

document.getElementsByClassName("big-font-size").addEventListener("click", function () {
    const background = document.getElementsByName("body");

    const isblack = background.classList.contains("black");

    if (isblack) {
        background.classList.remove("black"); 
    }
        else{
            background.classList.add("black");
        }
    });


