export function kata() {
const title = document.querySelectorAll('section > h2')

for(let i = 0; i < title.length; i++){
  title[i].classList.add('title')
}
}
