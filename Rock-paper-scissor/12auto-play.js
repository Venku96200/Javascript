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

            
            
            let isplaying=false;
            let intervalid;     // An variable to store the setinterval id

            function autoplay(){
                if(isplaying===false){
                    
                    intervalid=setInterval(function(){       // setinterval returns a id, (it waries each time we run it)
                    const rand=Math.random();
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
                        clearInterval(intervalid);    // Clearing/ stopping the running game
                        isplaying=false;
                    }
            };
