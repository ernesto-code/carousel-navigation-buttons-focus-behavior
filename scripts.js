const showBtn1 = document.getElementById('show-btn1')
const showBtn2 = document.getElementById('show-btn2')

const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')

const dummy1 = document.getElementById('dummy-btn1')
const dummy2 = document.getElementById('dummy-btn2')

let timeoutSelect = document.getElementById('timeout')

showBtn1.addEventListener('click',(evt)=>{
    showBtn1.disabled = true;
    toggleElement(section1)
    dummy1.focus()
})

showBtn2.addEventListener('click',(evt)=>{
    
    
    setTimeout(()=>{
        showBtn2.disabled = true;
        toggleElement(section2)
        dummy2.focus()
    },timeoutSelect.value)
})

const toggleElement = (element)=>{
    if (element.style.display == 'none')
        element.style.display = 'block'
    else
        element.style.display = 'none'
}