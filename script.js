var titles = document.querySelectorAll('.title');
titles.forEach(function(title) {
    title.addEventListener('click', function(e) {
        title.parentNode.classList.toggle('expanded')
    });
})


