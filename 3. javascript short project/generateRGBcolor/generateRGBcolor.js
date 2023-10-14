
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const btn1 = document.getElementById('change-btn1');

    btn1.addEventListener("click", function(){
        const bgcolor1 = generateColor();
        console.log(bgcolor1);
        root.style.background = bgcolor1;
    })
    btn.addEventListener("click", function(){
        const bgcolor = changeColor();
        console.log(bgcolor);
        root.style.background = "none";
        root.style.backgroundColor = bgcolor;
    })
    
}

function generateColor(){
    var red, green, blue, red1, green1, blue1;
    red = Math.round(255*Math.random());
    green = Math.round(255*Math.random());
    blue = Math.round(255*Math.random());
    red1 = Math.round(255*Math.random());
    green1 = Math.round(255*Math.random());
    blue1 = Math.round(255*Math.random());

    return `linear-gradient(rgb(${red}, ${green}, ${blue}), rgb(${red1}, ${green1}, ${blue1}))`

}
function changeColor(){
    var red2, green2, blue2;
    red2 = Math.round(255*Math.random());
    green2 = Math.round(255*Math.random());
    blue2 = Math.round(255*Math.random());
    return `rgb(${red2}, ${green2}, ${blue2})`

}
