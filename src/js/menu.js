export function menu(n) {
    var nav = document.createElement('nav');
    nav.appendChild(menuItem(n, 1, 'Portada', 'index.html'));
    nav.appendChild(menuItem(n, 2, 'Categoría', 'categoria.html'));
    nav.appendChild(menuItem(n, 3, 'Presentación', 'presentacion.html'));
    nav.appendChild(menuItem(n, 4, 'Enlaces', 'enlaces.html'));
    return nav;
}

function menuItem(n, i, t, link) {
    if (n === i) {
        var elem = document.createElement('span');
        elem.innerText = t;
        return elem;
    } else {
        var elem = document.createElement('a');
        elem.href = link;
        elem.innerText = t;
        return elem;
    }
}

export function aplicaEstilos(n) {
    for (const child of n.children) {
        if (child.tagName === 'SPAN') {
            child.className = 'selected';
        } else {
            child.className = 'menu-item';
        }
    }
}