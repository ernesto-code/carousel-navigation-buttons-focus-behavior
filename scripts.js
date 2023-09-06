const showBtn1 = document.getElementById('show-btn1')
const showBtn2 = document.getElementById('show-btn2')

const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')

const dummy1 = document.getElementById('dummy-btn1')
const dummy2 = document.getElementById('dummy-btn2')

showBtn1.addEventListener('click',(evt)=>{
    showBtn1.disabled = true;
    toggleElement(section1)
    dummy1.focus()
})

showBtn2.addEventListener('click',(evt)=>{
    showBtn2.disabled = true;
    
    setTimeout(()=>{
        toggleElement(section2)
        dummy2.focus()
    },1000)
})

const toggleElement = (element)=>{
    if (element.style.display == 'none')
        element.style.display = 'block'
    else
        element.style.display = 'none'
}