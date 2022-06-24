function addTiles(n) {
    const dimension = Math.floor(500 / n); // 500 is width of display area
    const container = document.querySelector('.tile-container');
    for (let i = 0; i < n*n; i++)
    {
        const div = document.createElement('div');
        div.classList.add('tile');
        div.classList.add(i);
        div.style.width = dimension + 'px';
        div.style.height = dimension + 'px';
        container.append(div);
    }
}

addTiles(5);

const tiles = document.querySelectorAll('.tile');

tiles.forEach(function(e) {
    e.addEventListener('mouseover', function(f) {
        f.target.style.backgroundColor = '#FF0000';
    })
})