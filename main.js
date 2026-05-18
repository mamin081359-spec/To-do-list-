const $ = id => document.getElementById(id)

let create = $('create')
let foot = $('foot')
let input = $('text')
let delet_all = $('delet-all')
let small = document.querySelector('small')

function show() {
   // btn delet-all
   
   
   
   // small
   if (input.value !== "") {
      foot.innerHTML += `<p> ${input.value} </p>`
      small.style.display = "none"
   } else{
      small.style.display = "block"
      small.innerHTML = 'you cant do if it nothing'
   }
}



create.onclick= () => {
   if (foot.innerHTML !== "") {
      delet_all.style.display = "block"
   } else {
      delet_all.style.display = "none"
   }
   
   show()
   clean()
}

function clean() {
   input.value = ""
//    if () {
    
//    } else {
    
//  }
}

delet_all.onclick = () => {
   setTimeout(() => {
      foot.innerHTML = ''
      delet_all.style.display = "none"
      small.style.display = "none"
   }, 300)
}

