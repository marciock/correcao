const acesa =document.querySelector('#acesa');
const apagada=document.querySelector('#apagada');
const on=document.querySelector('#on');
const off=document.querySelector('#off');

window.onload=()=>{

    acesa.style.display='none';
    off.disabled=true;
}

on.addEventListener('click',()=>{
    acesa.style.display='block';
    apagada.style.display='none';

    off.disabled=false;
    on.disabled=true;
})


