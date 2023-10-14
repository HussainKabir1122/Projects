
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('change-btn');
    btn.addEventListener("click", function(){
        const bgcolor = generateColor();
        console.log(bgcolor);
        root.style.background = bgcolor;
        output.value = bgcolor;

    })
    copyBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(output.value);
    });
}

function generateColor(){
    var red, green, blue, redhex,greenhex,bluehex;
    red = Math.round(255*Math.random());
    green = Math.round(255*Math.random());
    blue = Math.round(255*Math.random());

    redhex = red.toString(16);
    redhex = redhex.padStart(2,"0");
    greenhex = green.toString(16);
    greenhex = greenhex.padStart(2,"0");
    bluehex = blue.toString(16);
    bluehex = bluehex.padStart(2,"0");



    console.log(redhex,greenhex,bluehex)

    return `#${redhex}${greenhex}${bluehex}`

}
