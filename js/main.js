let allMainTitle = document.querySelectorAll('.test-text'),
    index = 0, nextIndex = 1, nowOpen = 0, zIndexAll = 1;
allMainTitle.forEach(element => {
    element.addEventListener('click', ()=>{
        console.log('Я появляюсь!');
        let textBlock = document.querySelectorAll(`.test-next-answer[data-button="${element.getAttribute('data-button')}"]`);
        nowOpen = element.getAttribute('data-button');
        console.log(textBlock)
        textBlock[0].classList.add('active');
        nextIndex++;
        nextBoy();
    })
    index++;
});

let continueBtns = document.querySelectorAll('.text-next-answer-continue');
continueBtns.forEach(element => {
    element.addEventListener('click', ()=>{
        let blocks = document.querySelectorAll(`[data-button="${nowOpen}"]`);
        blocks[nextIndex].classList.add('active');
        nextIndex++;
        nextBoy();
    });
});

// ФИНИШ КЛИК
let finish = document.querySelectorAll('.text-next-answer-finish');
finish.forEach(element => {
    element.addEventListener('click', ()=>{
        setTimeout(() => {
            let popupThanks = document.querySelector('.popup-thanks');
            popupThanks.classList.add('active');
            setTimeout(() => {
                popupThanks.classList.add('visible');  
            }, 500);
        }, 500);
    });
});


let finishBtn = document.querySelector('.popup-btn');
finishBtn.addEventListener('click', ()=>{
    document.querySelectorAll('.visible').forEach(element => {
        element.classList.remove('visible');
    });
    setTimeout(() => {
        document.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });
    }, 500);
    oldBoy();
    index = 0; nextIndex = 1; nowOpen = 0;
});


const nextBoy = ()=>{
    let how = document.querySelector('.how');
    how.innerHTML = Number(how.innerHTML) - randomIntFromInterval(5, 300);
}
const oldBoy = ()=>{
    let how = document.querySelector('.how');
    how.innerHTML = 2000;
}
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}