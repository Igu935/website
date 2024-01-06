const projectsDiv = document.getElementById('projectsDiv')
const aboutMeDiv = document.getElementById('aboutMeDiv')
const contactDiv = document.getElementById('contactsDiv')
const nav = document.querySelector("nav")

const btnMenu = document.querySelectorAll('[data-btn]')
const btnMenuMobile = document.getElementById('btnMenuMobile')
const iconMenuOpen = document.getElementById("menuOpen")
const iconMenuClose = document.getElementById("menuClose")

btnMenu.forEach(
    (btn) => btn.addEventListener("click", () => {
        let section = btn.dataset.btn
        nav.classList.add("hidden")

        iconMenuOpen.classList.remove("hidden")
        iconMenuClose.classList.add("hidden")
        scroll(section)

    }))

btnMenuMobile.addEventListener("click", () => {
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden")
        iconMenuOpen.classList.add("hidden")

        iconMenuClose.classList.remove("hidden")
    } else if (!nav.classList.contains("hidden")) {
        nav.classList.add("hidden")

        iconMenuOpen.classList.remove("hidden")
        iconMenuClose.classList.add("hidden")
    }

})





function scroll(section) {
    if (section === "aboutMe") {
        aboutMeDiv.scrollIntoView({ behavior: "smooth" })
    } else if (section === "projects") {
        projectsDiv.scrollIntoView({ behavior: "smooth" })
    } else if (section === "contact") {
        contactDiv.scrollIntoView({ behavior: "smooth" })
    }

}
