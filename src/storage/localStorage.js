function getItem(key) {
    if(key === 'color-mode') return localStorage.getItem(key);
    return JSON.parse(localStorage.getItem(key)) || [];
}


function setItem(key, val) {
    if(val === null || val === undefined) return;
    if(key === 'color-mode') return localStorage.setItem(key, val);
    return localStorage.setItem(key, JSON.stringify(val)) || null;
}

export { getItem, setItem };