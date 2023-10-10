document.querySelectorAll(".rating__item").forEach(item => 
    item.addEventListener('click', () => 
    item.parentNode.dataset.totalStar = item.dataset.starValue)
);
