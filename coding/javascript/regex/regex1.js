const text = '+88-01712-345678 hello hunney bunney 01712435678'; //#2f2f2f
const regex = /(\+88)?-?01[1-9]\d{2}-?\d{6}/g;

const matches = text.match(regex);
const index = text.search(regex);
const replaced = text.replace(regex,'number'); //#000000
const testing = regex.test(text);


console.log("matches: "+matches+"\nindex: "+index+"\nreplaced: "+replaced+"\ntesting: "+testing);
//document.getElementById("demo").innerHTML = "matches: "+matches+"\nindex: "+index+"\nreplaced: "+replaced+"\ntesting: "+testing;