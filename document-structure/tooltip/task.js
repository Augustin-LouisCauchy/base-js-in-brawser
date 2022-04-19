const toolTip = Array.from(document.querySelectorAll(".has-tooltip"))

function showToolTip (element) {
    element.insertAdjacentHTL("beforeend", '<div class="tooltip"></div>');
    element.querySelector(".tooltip").innerHTML = element.title;
    let coord = element.getBoundingClientRect();
    element.querySelector(".tooltip").style.cssText = "position: absolute;"
    element.querySelector(".tooltip").style.left = coord.left + "px";
}

function deleteClass (element, index) {
    toolTip.forEach((e, i) => {
        if (e.querySelector(".tooltip") && index !== i) {
            e.querySelector(".tooltip").classList.remove("tooltip_active")
        }
    })
}


toolTip.forEach((element, index) => element.onclick = () => {
    showToolTip(element)
    if(element.querySelector('.tooltip').classList.contains('tooltip_active')){
    element.querySelector('.tooltip').classList.remove('tooltip_active')
    }
    else {
        element.querySelector('.tooltip').classList.add('tooltip_active')  
    }
    deleteClass(element, index)
    event.preventDefault()
})