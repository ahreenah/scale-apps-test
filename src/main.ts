import './style.css'

const menuToggle: HTMLInputElement | null = document.querySelector("#menuToggle")
const headerLinks = document.querySelectorAll('header a')

if(menuToggle){
  for(const link of headerLinks){
    link.addEventListener('click', ()=>menuToggle.checked = false)
  }
}
