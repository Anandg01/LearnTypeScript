const num1Elementt=document.getElementById('num1') as HTMLInputElement
const num2Element=document.getElementById('num2') as HTMLInputElement;
const buttonEl=document.querySelector('button')!;
function add(num1:number | string, num2:number | string){
    if(typeof(num1)==='number'&&typeof(num2)==='number'){
        return(num1+num2)
    }
    if(typeof(num1)==='string'&&typeof(num2)==='string'){
        return(num1+'' +num2)
    }
    return +num1 + +num2;
}
buttonEl.addEventListener('click',()=>{
    const num1=num1Elementt.value;
    const num2=num2Element.value;
    const result =add(+num1, +num2)
    console.log(result)
    const stringResult=add(num1, num2)
    console.log(stringResult)
})

