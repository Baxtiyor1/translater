const elDeleteBtn = document.querySelector('#clearBtn');
const elLotinArea = document.querySelector('#lotin__textarea')
const elkrilArea = document.querySelector('#kril__textarea')


elLotinArea.addEventListener('keypress', (e)=>{
  let findLetter =  krilArr.find(obj => obj.id === e.charCode)
  elkrilArea.textContent += String.fromCharCode(findLetter.content)
    console.log(e.charCode)
})

