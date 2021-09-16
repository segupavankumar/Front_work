// const DogUrl = 'https://dog.ceo/api/breeds/image/random'


// function dog(){
//     fetch(DogUrl).then(function(response){
//         return response.json()
//     }).then(function(data){
//         const img = document.createElement('img')
//         img.alt = 'image'
//         img.src = data.message

//         document.querySelector('.dogimg').appendChild(img)
//     })

    

// }

// document.querySelector('.dogbtn').addEventListener('click',dog)

const DogBredUrl = 'https://dog.ceo/api/breeds/list/all'
    
fetch(DogBredUrl).then(function(response){
    return response.json()
}).then(function(data){
    const key = Object.keys(data.message)
    for (i in key){
        const opt = document.createElement('option')
        opt.innerText = key[i]
        opt.value = key[i]
        document.querySelector('select').appendChild(opt)
    }
})


const DgView = document.querySelector('.Dg-image')
const cont = document.querySelector('.container')
const pic = document.querySelector('.image')
pic.src = 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg'
pic.alt = 'image-2'
function DgImage(dog){
    
    const BredUrl = 'https://dog.ceo/api/breed/'+ dog + '/images/random'
    fetch(BredUrl).then(function(response){
        return response.json()}).then(function(data){
            DgView.classList.remove('load')
            pic.src = data.message
            pic.alt = 'image-2'
            cont.classList.add('load')
    
           
    })
}

document.querySelector('select').addEventListener('change',function(){
    DgView.classList.add('load')
    console.log(DgView.classList)
    cont.classList.remove('load')
    DgImage(this.value)
})