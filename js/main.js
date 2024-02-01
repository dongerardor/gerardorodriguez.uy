const btnMore = document.getElementById("btn-more");
const about = document.getElementById("about");
const toggleText = function (e) {
    if (about.classList.contains('hidden')) {
        about.classList.remove('hidden');
        btnMore.innerText = 'Less...';
    } else {
        about.classList.add('hidden');
        btnMore.innerText = 'More...';
    }
}

btnMore.addEventListener("click", toggleText);