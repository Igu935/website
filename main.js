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
        window.scrollTo({top: aboutMeDiv.offsetTop - 70 , behavior: "smooth" })
    } else if (section === "projects") {
        window.scrollTo({top: projectsDiv.offsetTop - 70 , behavior: "smooth" })
    } else if (section === "contact") {
        window.scrollTo({top: contactDiv.offsetTop - 70 , behavior: "smooth" })
    }

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("translate-y-20")
            return
        } else {
            entry.target.classList.remove("opacity-100")
            entry.target.classList.add("translate-y-20")
        }
        
    });
});

observer.observe(projectsDiv);
observer.observe(contactDiv);
