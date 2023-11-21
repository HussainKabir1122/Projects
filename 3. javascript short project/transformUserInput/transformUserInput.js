let div = null;



window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

    btn.addEventListener("click", function(){
        
        const bgcolor = generateColor();
        root.style.background = bgcolor;
        output.value = bgcolor.substring(1);
        div.remove();
        div=null;

    })
    copyBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(`#${output.value}`);
        if (div != null){
            div.remove();
            div=null;
        }
        if (isValidHex(output.value)){
            generateToastMSG(`#${output.value} copied`);
        }else{
            alert('Invalid Color Code');
        }
        
    });

    output.addEventListener('keyup', function(e){
        const color = e.target.value;
        if (color){
            output.value = e.target.value.toUpperCase()
            if(isValidHex(color)){
                root.style.backgroundColor = `#${color}`;
            }
        }
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

function generateToastMSG(msg){
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-msg toast-message-slide-in';


    div.addEventListener("click", function() {
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function(){
        div.remove();
        div=null;
    });

    });
    /*
    div.addEventListener('click', () => {
        div.style.left = '100%'; // Slide out to the left
        setTimeout(() => {
            div.style.display = 'none';
        }, 500); // Hide the div after the animation
      });
    */
    

    document.body.appendChild(div);
}

/**
 * @param {string} color: ;
 */

function isValidHex(color){

    if(color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);

}