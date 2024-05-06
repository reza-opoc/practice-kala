let navInput = document.querySelector('.nav-menu__input')
let navContent = document.querySelector('.form-content')
let main = document.querySelector('main')
let navForm = document.querySelector('.nav-form')
let headerMenu = document.querySelector('.headerTop-menu svg')
let story = document.querySelectorAll('.story')
let storyVideo = document.querySelector('.story__video')
let cover = document.querySelector('.cover')
// let headerCover = document.querySelector('.header-cover')
// let headerCoverAside = document.querySelector('.header-covert-aside')

// headerMenu.addEventListener('mouseenter', () => {
//     headerCover.classList.add('header--active')
//     headerCoverAside.classList.add('header--active')
// })
// headerMenu.addEventListener('mouseleave', () => {
//     headerCover.classList.remove('header--active')
//     headerCoverAside.classList.remove('header--active')
// })

story.forEach((todo) => {
    todo.addEventListener('click', () => {
        storyVideo.classList.add('story__video--active')
        storyVideo.play()
        cover.classList.add('cover--active')
        document.body.addEventListener('dblclick', () => {
            storyVideo.classList.remove('story__video--active')
            storyVideo.pause()
            storyVideo.currentTime = 0
            cover.classList.remove('cover--active')

        })
    })
})


navInput.addEventListener('focus', () => {
    navContent.style.display = 'block'
    navContent.classList.add('form-content--active')
    navContent.classList.add('nav-form--active')
    navForm.classList.add('nav-form--active')
})
navInput.addEventListener('blur', () => {
    navContent.classList.remove('form-content--active')

})