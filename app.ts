const num1Elementt=document.getElementById('num1') as HTMLInputElement
const num2Element=document.getElementById('num2') as HTMLInputElement;
const buttonEl=document.querySelector('button')!;
function add(num1:number, num2:number){
    return num1+num2;
}
buttonEl.addEventListener('click',()=>{
    const num1=num1Elementt.value;
    const num2=num2Element.value;
    const result =add(+num1, +num2)
    console.log(result)
})

