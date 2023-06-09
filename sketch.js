
// Завдання 1
{
    let p1 = document.createElement("p");
    
    p1.innerText = "Hello 1";
    p1.style.color = "#FF0090";
    
    document.body.appendChild(p1);
}

// Завдання 2
{
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    document.body.appendChild(p1);
    document.body.appendChild(p2);

    let array = [p1,p2];

    for (let i = 0; i < array.length; i++) {
        array[i].style.color = "#A0B000";
        array[i].innerText = "Loop " + i;
    }
}

// Завдання 3
{
    function randColor() {
        return Math.round(Math.random() * 255);
    }

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    document.body.appendChild(p1);
    document.body.appendChild(p2);

    let array = [p1,p2];

    for (let i = 0; i < array.length; i++) {
        let r = randColor();
        let g = randColor();
        let b = randColor();
        array[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
        array[i].innerText = "Loop " + i;
    }
}
