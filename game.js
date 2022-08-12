const truthBtn = document.querySelector('.option_truth')
const dareBtn = document.querySelector('.option_dare')
const normal = document.querySelector('.normal_level')
const adult = document.querySelector('.adult_level')
const ques = document.querySelector('.ques_content')
const title = document.querySelector('.title')
function show(){
    const level = document.querySelector('.level')
    level.style.display = 'flex'
}
function off(){
    const level = document.querySelector('.level')
    level.style.display = 'none'
}
function removeActived(){
    const actived = document.querySelector('.actived')
    if(actived)
    {
        actived.classList.remove('actived')
    }
}
truthBtn.addEventListener('click', () =>{
    show()
    removeActived()
    title.innerText = 'Truth'
    truthBtn.querySelector('button').classList.add('actived')
    normal.addEventListener('click', ()=>{
        render('truth','normal')
    })
    adult.addEventListener('click', ()=>{
        render('truth','adult')
    })
})
dareBtn.addEventListener('click', () =>{
    show()
    removeActived()
    title.innerText = 'Dare'
    dareBtn.querySelector('button').classList.add('actived')
    render('dare','')
})
function render(option, level)
{
    off()
    let number = Math.floor(Math.random() * 64)
    if(option == 'truth')
    {
        if(level == 'normal')
        {
            ques.innerText = classicTruth[number]
        }
        else if(level == 'adult')
        {
            ques.innerText = adultTruth[number]
        }
    }
    if(option == 'dare')
    {
        ques.innerText = adultDare[number]
    }
}