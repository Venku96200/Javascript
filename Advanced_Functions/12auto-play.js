const score=JSON.parse(localStorage.getItem('score_name'))|| {
                    Wins:0,
                    Losses:0,
                    Ties:0
                }; 
            updateScoreElement();         // updating the score paragraph
            function result(choice){
                const comp1=Math.random();
                let computerMove='';
                let result1;
                let choice_img= `<img class ="move-icon" src="${choice}-emoji.png" >`;
                let computer_img;

                if(comp1>=0 && comp1<1/3){
                    computerMove='rock';
                    computer_img= '<img class ="move-icon" src="rock-emoji.png" >';
                }else if(comp1>=1/3 && comp1<2/3){
                    computerMove='paper';
                    computer_img= '<img class ="move-icon" src="paper-emoji.png" >';
                }else{
                    computerMove='scissor';
                    computer_img= '<img class ="move-icon" src="scissor-emoji.png" >';
                }

                if(choice===computerMove){
                    result1= `YOU TIE! <div class="result-line"> <span>you chose</span> ${choice_img} <span>and Computer also chose</span> ${computer_img}</div>`;
                    score.Ties++;
                }else{
                    if(choice==='rock' && computerMove==='scissor'){
                       result1= `YOU WIN! <div class="result-line"> <span>you chose</span> ${choice_img} <span>and Computer chose</span> ${computer_img}</div>`;
                       score.Wins++;
                    }
                    else if(choice==='rock' && computerMove==='paper'){
                       result1= `YOU LOSE! <div class="result-line"> <span>you chose</span> ${choice_img} <span>and Computer chose</span> ${computer_img}</div>`;
                       score.Losses++;
                    }
                    else if(choice==='paper' && computerMove==='rock'){
                       result1= `YOU WIN! <div class="result-line"> <span>you chose</span> ${choice_img} <span>and Computer chose</span> ${computer_img}</div>`;
                       score.Wins++;
                    }
                    else if(choice==='paper' && computerMove==='scissor'){
                       result1= `YOU LOSE! <div class="result-line"> <span>you chose</span> ${choice_img} <span>and Computer chose</span> ${computer_img}</div>`;
                       score.Losses++;
                    }
                    else if(choice==='scissor' && computerMove==='paper'){
                       result1= `YOU WIN! <div class="result-line"> <span>you chose</span> ${choice_img} <span>and Computer chose</span> ${computer_img}</div>`;
                       score.Wins++;
                    }
                    else if(choice==='scissor' && computerMove==='rock'){
                       result1= `YOU LOSE! <div class="result-line"> <span>you chose</span> ${choice_img} <span>and Computer chose</span> ${computer_img}</div>`;
                       score.Losses++;
                    }
                }
                localStorage.setItem('score_name',JSON.stringify(score));
                updateScoreElement();            // Updating the score paragraph
                updateResultElement(result1);
                return result1;
            }

            function updateScoreElement(){        // Function to update the score paragraph
                document.querySelector('.js-score').innerHTML= `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`; 
            }

            function updateResultElement(resultText){
                document.querySelector('.js-result').innerHTML=resultText;
            }

            let isplaying=false;  // To keep track wether the autoplay button is on or off
            let intervalid;     // An variable to store the setinterval id

            function autoplay(){
                if(isplaying===false){
                    setTimeout(function(){
                            document.querySelector('.js-auto-play').innerHTML='STOP!';
                        },500);
                    intervalid=setInterval(()=>{       // setinterval returns a id, (it waries each time we run it)
                    const rand=Math.random();          // We have used arrow function , ie replaced function() by ()=>
                    let vari='';
                    if(rand>=0 && rand<1/3){
                        vari='rock';    
                    }else if(rand>=1/3 && rand<2/3){
                        vari='paper';
                    }else{
                        vari='scissor';
                    }
                    result(vari);
                    },1000);
                    isplaying=true;
                    }else{
                        setTimeout(function(){
                            document.querySelector('.js-auto-play').innerHTML='Auto Play';
                        },500);
                        clearInterval(intervalid);    // Clearing/ stopping the running game
                        isplaying=false;
                    }

            };
            
            const autoplayelement=document.querySelector('.js-auto-play');
            autoplayelement.addEventListener('click',()=>autoplay());

 document.body.addEventListener('keydown',(event)=>{
    if(event.key==='a'){
        autoplay();
    }
 });                                 
                                                        
// You can do the same for reset button(ie use eventlistener instead of onclick())

const resetbuttonelement=document.querySelector('.js-reset');
resetbuttonelement.addEventListener('click',()=>{
    document.querySelector('.Warning').innerHTML=`<p class="reset_warning">Are You sure you want to reset the score? </p> <button class="reset_yes">Yes</button><button class="reset_no"> NO</button>`;
    const yes=document.querySelector('.reset_yes');
    const no=document.querySelector('.reset_no');

    yes.addEventListener('click',()=>{
                score.Wins=0;
                score.Ties=0;
                score.Losses=0;
                localStorage.removeItem('score_name');  // Deletes the score and its value from localStorage 
                updateScoreElement();
                updateResultElement('');
                document.querySelector('.Warning').innerHTML='';
    })
    no.addEventListener('click',()=>{
        document.querySelector('.Warning').innerHTML='';
    })

                
});



//  .addEventListener()  with Keydowns
// What if instead of pressing the button we could press buttons on our keyboard
// The keydown event give out a event parameter, that can be used to find out wich key is pressed using event.key

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        result('rock');
    }else if(event.key==='p'){
        result('paper');
    }else if(event.key==='s'){
        result('scissor');
    }
});


                                                
            
            

            
