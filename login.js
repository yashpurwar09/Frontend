const shadowColor= document.querySelector("#shadow-color");
const gradientColor1= document.querySelector("#gradient-color-1");
const gradientColor2= document.querySelector("#gradient-color-2");
const textShadow= document.querySelector("#text-shadow");
const root=document.querySelector(":root");

let var1="rgb(157, 157, 197)", var2 = "rgb(9, 9, 213)", var3="rgb(26, 209, 209)", var4="rgb(10, 10, 49)";
shadowColor.style.setProperty('background-color', var3);
gradientColor1.style.setProperty('background-color', var1);
gradientColor2.style.setProperty('background-color', var2);
textShadow.style.setProperty('background-color',var4);

shadowColor.addEventListener('input',(event)=>{
    // console.log(getComputedStyle(root).getPropertyValue('--gradient'));
    root.style.setProperty('--green',event.target.value);
    shadowColor.style.setProperty('background-color', event.target.value);
});

console.log(var1, var2);
gradientColor1.addEventListener('input',(event)=>{
    var1 = event.target.value;
    root.style.setProperty('--gradient',`linear-gradient(45deg, ${var1}, ${var2})`);
    root.style.setProperty('--gradient1',`linear-gradient(45deg, ${var1}, ${var2})`);
    gradientColor1.style.setProperty('background-color', event.target.value);
});

gradientColor2.addEventListener('input',(event)=>{
    var2 = event.target.value;
    root.style.setProperty('--gradient',`linear-gradient(45deg, ${var1}, ${var2})`);
    root.style.setProperty('--gradient1',`linear-gradient(45deg, ${var1}, ${var2})`);
    gradientColor2.style.setProperty('background-color', event.target.value);
});

textShadow.addEventListener('input',(event)=>{
    var4 = event.target.value;
    root.style.setProperty('--text-shadow',`-2px 2px 4px ${var4}, 2px -2px 4px ${var4}`);
    textShadow.style.setProperty('background-color', var4);
});

// --gradient:linear-gradient(45deg, rgb(157, 157, 197), rgb(9, 9, 213));
// --text-shadow: -2px 2px 4px rgb(10, 10, 49), 2px -2px 4px rgb(10, 10, 49)

const input = document.querySelectorAll('div>input');
input.forEach((element)=>{
    console.log(element);
    element.addEventListener('click',()=>{
        element.style.setProperty('animation', 'inputanimation 3s 1 alternate backwards');
        setTimeout(()=>{
            element.style.removeProperty('animamtion');
            console.log('working');
        },3000);
    });
});