let gamecom=document.querySelector('.gamecom')
let user=document.querySelector('.user')
let user2=document.querySelector('.user2')
gamecom.addEventListener('click',com)

let game2vs=document.querySelector('.game2vs')
game2vs.addEventListener('click',twoPlayer)

function com(){
user.innerHTML='PLAYER01'
user2.innerHTML='PLAYER AI'
let game2vs=document.querySelector('.game2vs')
let gamecom=document.querySelector('.gamecom')
gamecom.classList.add('highlight')
game2vs.classList.add('highlight')
let rock=document.querySelector('.rock')
let paper=document.querySelector('.paper')
let scissors=document.querySelector('.scissors')
let containerbot=document.querySelector('.container-bot')
let rockbot=document.querySelector('.rock-bot')
let paperbot=document.querySelector('.paper-bot')
let scissorsbot=document.querySelector('.scissors-bot')
let modal =document.querySelector('.modal')
let message =document.querySelector('.message')
let resetAll=document.querySelector('.reset') 
let scroreDisplay=document.querySelector('.display') 
let bar=document.querySelector('.bar') 
let bar2=document.querySelector('.bar2') 
let rockValue=0
let paperValue=0
let scissorsValue=0
let rockbotValue=0
let paperbotValue=0
let scissorsbotValue=0
let player=0
let com=0

resetAll.addEventListener('click',reset)
rock.addEventListener('click',rockSelected)
paper.addEventListener('click',paperSelected)
scissors.addEventListener('click',scissorsSelected)
rockbot.addEventListener('click',rockplayer2)
paperbot.addEventListener('click',paperplayer2)
scissorsbot.addEventListener('click',scissorsplayer2)




function rockplayer2(){

    rockbotValue+=1
    scissorsbot.classList.remove('highlight')
    paperbot.classList.remove('highlight')
    rockbot.classList.add('highlight')
    scissorsbotValue=0
    paperbotValue=0
    rockbot.classList.add('highlight')
        if(rockValue===1){
        message.innerHTML="Draw!"
        modal.classList.remove("hidden")
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("rockDraw")
        bar2.classList.add("hidden")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        }if(paperValue===1){
        modal.classList.remove("hidden")
        message.innerHTML="player2 wins Paper beats Rock !"
        com+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("rockVspaper")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        paper.classList.add('win')
        rockbot.classList.add('lose')
        paper.innerHTML="wins"
        rockbot.innerHTML="lost"

        }if(scissorsValue===1){
        modal.classList.remove("hidden")
        message.innerHTML="player1 wins Rock beats Scissor !"
        player+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("rockVsissors")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        scissors.classList.add('lose')
        rockbot.classList.add('win')
        scissors.innerHTML="lost"
        rockbot.innerHTML="wins"

        }
}



function paperplayer2(){
    paperbotValue+=1
    scissorsbot.classList.remove('highlight')
    paperbot.classList.add('highlight')
    rockbot.classList.remove('highlight')
    scissorsbotValue=0
    rockbotValue=0
    paperbot.classList.add('highlight')
        if(rockValue===1){
        message.innerHTML="player1 wins Paper beats Rock ! "
        modal.classList.remove("hidden")
        player+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("paperVsRock")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        rock.classList.add('lose')
        paperbot.classList.add('win')
        rock.innerHTML="lost"
        paperbot.innerHTML="wins"

        }if(paperValue===1){
        message.innerHTML="Draw! "
        modal.classList.remove("hidden")
        bar.classList.add("paperDraw")
        scroreDisplay.innerHTML=com+':'+player
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')



        }if(scissorsValue===1){
        message.innerHTML="player2 wins Scissor beats Paper !" 
        modal.classList.remove("hidden")
        com+=1
        scroreDisplay.innerHTML=com+':'+player 
        bar.classList.add("paperVsscissors")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        scissors.classList.add('win')
        paperbot.classList.add('lose')
        scissors.innerHTML="wins"
        paperbot.innerHTML="lost"

        }
}


function scissorsplayer2(){
    scissorsbotValue+=1
    scissorsbot.classList.add('highlight')
    paperbot.classList.remove('highlight')
    rockbot.classList.remove('highlight')
    paperbotValue=0
    rockbotValue=0
    scissorsbot.classList.add('highlight')
        if(rockValue===1){
        message.innerHTML="player2 wins Rock beats Scissors !"
        modal.classList.remove("hidden")
        com+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("scissorsVsrock")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        rock.classList.add('win')
        scissorsbot.classList.add('lose')
        rock.innerHTML="wins"
        scissorsbot.innerHTML="lost"

        }if(paperValue===1){
        message.innerHTML="player1 wins Scissors beats Paper!"
        modal.classList.remove("hidden")
        player+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("scissorsVspaper")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        paper.classList.add('lose')
        scissorsbot.classList.add('win')
        paper.innerHTML="lost"
        scissorsbot.innerHTML="wins"

        }if(scissorsValue===1){
        message.innerHTML="Draw!" 
        modal.classList.remove("hidden")
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("sicssorsDraw")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')


        }
}

function rockSelected(){
    randomnumber()
    rockValue+=1
    scissors.classList.remove('highlight')
    paper.classList.remove('highlight')
    rock.classList.add('highlight')
    scissorsValue=0
    paperValue=0
        if(rockbotValue===1){
        message.innerHTML="Draw!"
        modal.classList.remove("hidden")
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("rockDraw")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')



        }if(paperbotValue===1){
        modal.classList.remove("hidden")
        message.innerHTML="player1 wins Paper beats Rock!"
        player+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("rockVspaper")
        bar2.classList.add("rockVspaperInvertDeg")
        bar.classList.add("hidden")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        rock.classList.add('lose')
        paperbot.classList.add('win')
        rock.innerHTML="lost"
        paperbot.innerHTML="wins"


        }if(scissorsbotValue===1){
        modal.classList.remove("hidden")
        message.innerHTML="player2 wins Rock beats Scissor!"
        com+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("rockVsissors")
        bar2.classList.add("rockVsissorsInvertDeg")
        bar.classList.add("hidden")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        rock.classList.add('win')
        scissorsbot.classList.add('lose')
        rock.innerHTML="wins"
        scissorsbot.innerHTML="lost"

        }

}
function paperSelected(){
    randomnumber()
    paperValue+=1
    scissors.classList.remove('highlight')
    paper.classList.add('highlight')
    rock.classList.remove('highlight')
    scissorsValue=0
    rockValue=0
        if(rockbotValue===1){
        message.innerHTML="player2 wins Paper beats Rock ! "
        modal.classList.remove("hidden")
        player+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("paperVsRock")
        bar2.classList.add("paperVsRockInvertDeg")
        bar.classList.add("hidden")

        paper.classList.add('win')
        rockbot.classList.add('lose')
        paper.innerHTML="wins"
        rockbot.innerHTML="lost"

        }if(paperbotValue===1){
        message.innerHTML="Draw! "
        modal.classList.remove("hidden")
        bar.classList.add("paperDraw")
        scroreDisplay.innerHTML=com+':'+player
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')


        }if(scissorsbotValue===1){
        message.innerHTML="player1 wins Scissor beats Paper!" 
        modal.classList.remove("hidden")
        player+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("paperVsscissors")
        bar2.classList.add("paperVsscissorsInvertDeg")
        bar.classList.add("hidden")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')

        paper.classList.add('lose')
        scissorsbot.classList.add('win')
        paper.innerHTML="lost"
        scissorsbot.innerHTML="wins"

        }
}
function scissorsSelected(){
randomnumber()
scissorsValue+=1
scissors.classList.add('highlight')
paper.classList.remove('highlight')
rock.classList.remove('highlight')
paperValue=0
rockValue=0
if(rockbotValue===1){
    message.innerHTML="player1 wins Rock beats Scissors !"
    modal.classList.remove("hidden")
    player+=1
    scroreDisplay.innerHTML=com+':'+player
    bar.classList.add("scissorsVsrock")
    bar2.classList.add("scissorsVsrockInvertDeg")
    bar.classList.add("hidden")
    rock.classList.add('highlight')
    paper.classList.add('highlight')
    scissors.classList.add('highlight')
    containerbot.classList.add('highlight')
    rockbot.classList.add('highlight')
    paperbot.classList.add('highlight')
    scissorsbot.classList.add('highlight')

    scissors.classList.add('lose')
    rockbot.classList.add('win')
    scissors.innerHTML="lost"
    rockbot.innerHTML="wins"


    }if(paperbotValue===1){
        message.innerHTML="player2 wins Scissors beats Paper !"
        modal.classList.remove("hidden")
        com+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("scissorsVspaper")
        bar2.classList.add("scissorsVspaperInvertDeg")
        bar.classList.add("hidden")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')


        scissors.classList.add('win')
        paperbot.classList.add('lose')
        scissors.innerHTML="wins"
        paperbot.innerHTML="lost"


    }if(scissorsbotValue===1){
        
        message.innerHTML="Draw!" 
        modal.classList.remove("hidden")
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("sicssorsDraw")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')


    }

}

function randomnumber(){
let rockbot=document.querySelector('.rock-bot')
let paperbot=document.querySelector('.paper-bot')
let scissorsbot=document.querySelector('.scissors-bot')
genRandomNum()
if(randomnumberTwoplayer===0){
    rockbotValue+=1
    rockbot.classList.add('highlight')
    scissorsbot.classList.remove('highlight')
    paperbot.classList.remove('highlight')
    scissorsbotValue=0
    paperbotValue=0
}else if(randomnumberTwoplayer===1){
    paperbotValue+=1
    paperbot.classList.add('highlight')
    scissorsbot.classList.remove('highlight')
    rockbot.classList.remove('highlight')
    scissorsbotValue=0
    rockbotValue=0
}else if(randomnumberTwoplayer===2){
    scissorsbotValue+=1
    scissorsbot.classList.add('highlight')
    paperbot.classList.remove('highlight')
    rockbot.classList.remove('highlight')
    paperbotValue=0
    rockbotValue=0
}
}
let num0=0
let num1=1
let num2=2
let randomnumberArray = [num0, num1, num2]
console.log(randomnumberArray)
function genRandomNum(){
    console.log(randomnumberArray)
    return randomnumberTwoplayer =  Math.floor(Math.random() * randomnumberArray.length)  

}

function reset(){
scissorsbot.classList.remove('highlight')
paperbot.classList.remove('highlight')
rockbot.classList.remove('highlight')
scissors.classList.remove('highlight')
paper.classList.remove('highlight')
rock.classList.remove('highlight')
modal.classList.add("hidden")
bar.classList.remove("rockDraw")
bar.classList.remove("rockVspaper")
bar.classList.remove("rockVsissors")
bar.classList.remove("paperVsRock")
bar.classList.remove("paperDraw")
bar.classList.remove("sicssorsDraw")
bar.classList.remove("paperVsscissors")
bar.classList.remove("scissorsVsrock")
bar.classList.remove("scissorsVspaper")
bar.classList.remove("rockVsissorsInvertDeg")
bar2.classList.remove("rockVspaperInvertDeg")
bar2.classList.remove("paperVsRockInvertDeg")
bar2.classList.remove("paperVsscissorsInvertDeg")
bar2.classList.remove("scissorsVspaperInvertDeg")
bar2.classList.remove("scissorsVsrockInvertDeg")
bar.classList.remove("hidden")
bar2.classList.remove("rockVsissorsInvertDeg")

rock.classList.remove('lose')
paper.classList.remove('lose')
scissors.classList.remove('lose')
rock.classList.remove('win')
paper.classList.remove('win')
scissors.classList.remove('win')

rockbot.classList.remove('lose')
paperbot.classList.remove('lose')
scissorsbot.classList.remove('lose')
rockbot.classList.remove('win')
paperbot.classList.remove('win')
scissorsbot.classList.remove('win')



rock.innerHTML=""
paper.innerHTML=""
scissors.innerHTML=""
rockbot.innerHTML=""
paperbot.innerHTML=""
scissorsbot.innerHTML=""
rockValue=0
paperValue=0
scissorsValue=0
rockbotValue=0
paperbotValue=0
scissorsbotValue=0
}
}
function twoPlayer(){
    user.innerHTML='PLAYER02'
    user2.innerHTML='PLAYER01'
    let game2vs=document.querySelector('.game2vs')
    let gamecom=document.querySelector('.gamecom')
    gamecom.classList.add('highlight')
    game2vs.classList.add('highlight')
    let gameblock=document.querySelector('.gameblock')
    let container=document.querySelector('.container')
    let hand =document.querySelector('.hand ')
    let rock=document.querySelector('.rock')
    let paper=document.querySelector('.paper')
    let scissors=document.querySelector('.scissors')
    let containerbot=document.querySelector('.container-bot')
    let rockbot=document.querySelector('.rock-bot')
    let paperbot=document.querySelector('.paper-bot')
    let scissorsbot=document.querySelector('.scissors-bot')
    let modal =document.querySelector('.modal')
    let message =document.querySelector('.message')
    let resetAll=document.querySelector('.reset') 
    let scroreDisplay=document.querySelector('.display') 
    let bar=document.querySelector('.bar') 
    let bar2=document.querySelector('.bar2') 
    let rockValue=0
    let paperValue=0
    let scissorsValue=0
    let rockbotValue=0
    let paperbotValue=0
    let scissorsbotValue=0
    let player=0
    let com=0
    
    resetAll.addEventListener('click',reset)
    rock.addEventListener('click',rockSelected)
    paper.addEventListener('click',paperSelected)
    scissors.addEventListener('click',scissorsSelected)
    rockbot.addEventListener('click',rockplayer2)
    paperbot.addEventListener('click',paperplayer2)
    scissorsbot.addEventListener('click',scissorsplayer2)
    
    
    
    
    function rockplayer2(){
        rockbotValue+=1
        scissorsbot.classList.remove('highlight')
        paperbot.classList.remove('highlight')
        rockbot.classList.add('highlight')
        scissorsbotValue=0
        paperbotValue=0
        rockbot.classList.add('highlight')
            if(rockValue===1){
            message.innerHTML="Draw!"
            modal.classList.remove("hidden")
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("rockDraw")
            bar2.classList.add("hidden")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            }if(paperValue===1){
            modal.classList.remove("hidden")
            message.innerHTML="player2 wins Paper beats Rock !"
            com+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("rockVspaper")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            paper.classList.add('win')
            rockbot.classList.add('lose')
            paper.innerHTML="wins"
            rockbot.innerHTML="lost"
    
            }if(scissorsValue===1){
            modal.classList.remove("hidden")
            message.innerHTML="player1 wins Rock beats Scissor !"
            player+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("rockVsissors")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            scissors.classList.add('lose')
            rockbot.classList.add('win')
            scissors.innerHTML="lost"
            rockbot.innerHTML="wins"
    
            }
    }
    
    
    
    function paperplayer2(){
        paperbotValue+=1
        scissorsbot.classList.remove('highlight')
        paperbot.classList.add('highlight')
        rockbot.classList.remove('highlight')
        scissorsbotValue=0
        rockbotValue=0
        paperbot.classList.add('highlight')
            if(rockValue===1){
            message.innerHTML="player1 wins Paper beats Rock ! "
            modal.classList.remove("hidden")
            player+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("paperVsRock")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            rock.classList.add('lose')
            paperbot.classList.add('win')
            rock.innerHTML="lost"
            paperbot.innerHTML="wins"
    
            }if(paperValue===1){
            message.innerHTML="Draw! "
            modal.classList.remove("hidden")
            bar.classList.add("paperDraw")
            scroreDisplay.innerHTML=com+':'+player
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
    
    
            }if(scissorsValue===1){
            message.innerHTML="player2 wins Scissor beats Paper !" 
            modal.classList.remove("hidden")
            com+=1
            scroreDisplay.innerHTML=com+':'+player 
            bar.classList.add("paperVsscissors")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            scissors.classList.add('win')
            paperbot.classList.add('lose')
            scissors.innerHTML="wins"
            paperbot.innerHTML="lost"
    
            }
    }
    
    
    function scissorsplayer2(){
        scissorsbotValue+=1
        scissorsbot.classList.add('highlight')
        paperbot.classList.remove('highlight')
        rockbot.classList.remove('highlight')
        paperbotValue=0
        rockbotValue=0
        scissorsbot.classList.add('highlight')
            if(rockValue===1){
            message.innerHTML="player2 wins Rock beats Scissors !"
            modal.classList.remove("hidden")
            com+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("scissorsVsrock")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            rock.classList.add('win')
            scissorsbot.classList.add('lose')
            rock.innerHTML="wins"
            scissorsbot.innerHTML="lost"
    
            }if(paperValue===1){
            message.innerHTML="player1 wins Scissors beats Paper!"
            modal.classList.remove("hidden")
            player+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("scissorsVspaper")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            paper.classList.add('lose')
            scissorsbot.classList.add('win')
            paper.innerHTML="lost"
            scissorsbot.innerHTML="wins"
    
            }if(scissorsValue===1){
            message.innerHTML="Draw!" 
            modal.classList.remove("hidden")
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("sicssorsDraw")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
    
            }
    }
    
    function rockSelected(){
    
        rockValue+=1
        scissors.classList.remove('highlight')
        paper.classList.remove('highlight')
        rock.classList.add('highlight')
        scissorsValue=0
        paperValue=0
            if(rockbotValue===1){
            message.innerHTML="Draw!"
            modal.classList.remove("hidden")
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("rockDraw")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
    
    
            }if(paperbotValue===1){
            modal.classList.remove("hidden")
            message.innerHTML="player1 wins Paper beats Rock!"
            player+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("rockVspaper")
            bar2.classList.add("rockVspaperInvertDeg")
            bar.classList.add("hidden")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            rock.classList.add('lose')
            paperbot.classList.add('win')
            rock.innerHTML="lost"
            paperbot.innerHTML="wins"
    
    
            }if(scissorsbotValue===1){
            modal.classList.remove("hidden")
            message.innerHTML="player2 wins Rock beats Scissor!"
            com+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("rockVsissors")
            bar2.classList.add("rockVsissorsInvertDeg")
            bar.classList.add("hidden")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            rock.classList.add('win')
            scissorsbot.classList.add('lose')
            rock.innerHTML="wins"
            scissorsbot.innerHTML="lost"
    
            }
    
    }
    function paperSelected(){
    
        paperValue+=1
        scissors.classList.remove('highlight')
        paper.classList.add('highlight')
        rock.classList.remove('highlight')
        scissorsValue=0
        rockValue=0
            if(rockbotValue===1){
            message.innerHTML="player2 wins Paper beats Rock ! "
            modal.classList.remove("hidden")
            player+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("paperVsRock")
            bar2.classList.add("paperVsRockInvertDeg")
            bar.classList.add("hidden")
    
            paper.classList.add('win')
            rockbot.classList.add('lose')
            paper.innerHTML="wins"
            rockbot.innerHTML="lost"
    
            }if(paperbotValue===1){
            message.innerHTML="Draw! "
            modal.classList.remove("hidden")
            bar.classList.add("paperDraw")
            scroreDisplay.innerHTML=com+':'+player
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
    
            }if(scissorsbotValue===1){
            message.innerHTML="player1 wins Scissor beats Paper!" 
            modal.classList.remove("hidden")
            player+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("paperVsscissors")
            bar2.classList.add("paperVsscissorsInvertDeg")
            bar.classList.add("hidden")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
            paper.classList.add('lose')
            scissorsbot.classList.add('win')
            paper.innerHTML="lost"
            scissorsbot.innerHTML="wins"
    
            }
    }
    function scissorsSelected(){
    
    scissorsValue+=1
    scissors.classList.add('highlight')
    paper.classList.remove('highlight')
    rock.classList.remove('highlight')
    paperValue=0
    rockValue=0
    if(rockbotValue===1){
        message.innerHTML="player1 wins Rock beats Scissors !"
        modal.classList.remove("hidden")
        player+=1
        scroreDisplay.innerHTML=com+':'+player
        bar.classList.add("scissorsVsrock")
        bar2.classList.add("scissorsVsrockInvertDeg")
        bar.classList.add("hidden")
        rock.classList.add('highlight')
        paper.classList.add('highlight')
        scissors.classList.add('highlight')
        containerbot.classList.add('highlight')
        rockbot.classList.add('highlight')
        paperbot.classList.add('highlight')
        scissorsbot.classList.add('highlight')
    
        scissors.classList.add('lose')
        rockbot.classList.add('win')
        scissors.innerHTML="lost"
        rockbot.innerHTML="wins"
    
    
        }if(paperbotValue===1){
            message.innerHTML="player2 wins Scissors beats Paper !"
            modal.classList.remove("hidden")
            com+=1
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("scissorsVspaper")
            bar2.classList.add("scissorsVspaperInvertDeg")
            bar.classList.add("hidden")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
    
            scissors.classList.add('win')
            paperbot.classList.add('lose')
            scissors.innerHTML="wins"
            paperbot.innerHTML="lost"
    
    
        }if(scissorsbotValue===1){
            message.innerHTML="Draw!" 
            modal.classList.remove("hidden")
            scroreDisplay.innerHTML=com+':'+player
            bar.classList.add("sicssorsDraw")
            rock.classList.add('highlight')
            paper.classList.add('highlight')
            scissors.classList.add('highlight')
            containerbot.classList.add('highlight')
            rockbot.classList.add('highlight')
            paperbot.classList.add('highlight')
            scissorsbot.classList.add('highlight')
    
    
        }
    
    }
    
    function randomnumber(){
    let rockbot=document.querySelector('.rock-bot')
    let paperbot=document.querySelector('.paper-bot')
    let scissorsbot=document.querySelector('.scissors-bot')
    genRandomNum()
    if(randomnumberTwoplayer===0){
        rockbotValue+=1
        rockbot.classList.add('highlight')
        scissorsbot.classList.remove('highlight')
        paperbot.classList.remove('highlight')
        scissorsbotValue=0
        paperbotValue=0
    }else if(randomnumberTwoplayer===1){
        paperbotValue+=1
        paperbot.classList.add('highlight')
        scissorsbot.classList.remove('highlight')
        rockbot.classList.remove('highlight')
        scissorsbotValue=0
        rockbotValue=0
    }else if(randomnumberTwoplayer===2){
        scissorsbotValue+=1
        scissorsbot.classList.add('highlight')
        paperbot.classList.remove('highlight')
        rockbot.classList.remove('highlight')
        paperbotValue=0
        rockbotValue=0
    }
    }
    let num0=0
    let num1=1
    let num2=2
    let randomnumberArray = [num0, num1, num2]
    console.log(randomnumberArray)
    function genRandomNum(){
        console.log(randomnumberArray)
        return randomnumberTwoplayer =  Math.floor(Math.random() * randomnumberArray.length)  
    
    }
    
    function reset(){
    scissorsbot.classList.remove('highlight')
    paperbot.classList.remove('highlight')
    rockbot.classList.remove('highlight')
    scissors.classList.remove('highlight')
    paper.classList.remove('highlight')
    rock.classList.remove('highlight')
    modal.classList.add("hidden")
    bar.classList.remove("rockDraw")
    bar.classList.remove("rockVspaper")
    bar.classList.remove("rockVsissors")
    bar.classList.remove("paperVsRock")
    bar.classList.remove("paperDraw")
    bar.classList.remove("sicssorsDraw")
    bar.classList.remove("paperVsscissors")
    bar.classList.remove("scissorsVsrock")
    bar.classList.remove("scissorsVspaper")
    bar.classList.remove("rockVsissorsInvertDeg")
    bar2.classList.remove("rockVspaperInvertDeg")
    bar2.classList.remove("paperVsRockInvertDeg")
    bar2.classList.remove("paperVsscissorsInvertDeg")
    bar2.classList.remove("scissorsVspaperInvertDeg")
    bar2.classList.remove("scissorsVsrockInvertDeg")
    bar.classList.remove("hidden")
    bar2.classList.remove("rockVsissorsInvertDeg")
    
    rock.classList.remove('lose')
    paper.classList.remove('lose')
    scissors.classList.remove('lose')
    rock.classList.remove('win')
    paper.classList.remove('win')
    scissors.classList.remove('win')
    
    rockbot.classList.remove('lose')
    paperbot.classList.remove('lose')
    scissorsbot.classList.remove('lose')
    rockbot.classList.remove('win')
    paperbot.classList.remove('win')
    scissorsbot.classList.remove('win')
    
    
    
    rock.innerHTML=""
    paper.innerHTML=""
    scissors.innerHTML=""
    rockbot.innerHTML=""
    paperbot.innerHTML=""
    scissorsbot.innerHTML=""
    rockValue=0
    paperValue=0
    scissorsValue=0
    rockbotValue=0
    paperbotValue=0
    scissorsbotValue=0
    }
    
    
    
    
    
    
    
    
}





