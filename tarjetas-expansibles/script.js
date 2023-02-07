//Seleccionamos los item
const panels = document.querySelectorAll('.panel')


//Rrecorremos los item
panels.forEach(panel => {
    //Le agregamos el evento click
    panel.addEventListener('click', () => {
        //Le quitamos y agremos la clase active
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}