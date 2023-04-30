const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hourHand = document.getElementById('hours-hand')

function getTime(){
    const todaysDate = new Date();

    const seconds = todaysDate.getSeconds();
    const minutes = todaysDate.getMinutes();
    const hours = todaysDate.getHours();

    const timeInterval = 6;

    secondsHand.style.transform = 'rotate(' +(seconds * timeInterval)+ 'deg)'
    minutesHand.style.transform = 'rotate(' +(minutes * timeInterval + seconds/10)+'deg)'
    hourHand.style.transform = 'rotate('+( hours * 30 + minutes / 2 )+'deg)'
}

setInterval(getTime , 1000)