const array=[];
function store(){
    const value=document.querySelector('.js-input').value;
    array.push(value);
    console.log(array);
    document.querySelector('.js-input').value='';
}
const array2=[];


function store2(){
    let todoListHTML='';
    const value=document.querySelector('.js-input2').value;
    array2.push(value);
    document.querySelector('.js-input2').value='';
    array2.forEach(function(value){
        const html= `<p>${value}</P>`; 
        todoListHTML+=html; 
    });
 //   for(let i=0;i<array2.length;i++){
 //       const html= `<p>${array2[i]}</P>`;  // Generating the HTML
 //       todoListHTML+=html;  // Each item takes up a line(<p> is a block element)
 //       
 //   }
    document.querySelector('.js-display').innerHTML=todoListHTML;
}

// While Creating websites using javascripts we follow 3 steps
           // 1)   Save the data
           // 2)  Generate the HTML
           // 3)  Make it interactive
