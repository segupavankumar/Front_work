const newMail = document.querySelector('.new-mail')
const newBtn = document.querySelector('.new-btn')
let clList = newMail.classList

newBtn.addEventListener('click',function(){
    if (clList[1] === 'hide'){
        newMail.classList.remove('hide')
    }
    else{
        newMail.classList.add('hide')
    }
    console.log(clList)
})
