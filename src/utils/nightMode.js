import { getItem, setItem } from '../storage/localStorage.js';

const COLOR_KEY = 'color-mode';
const darkModeBtn = document.querySelector('.dark-mode-btn');


const applyColorScheme = (currSet) => {
    document.documentElement.setAttribute('color-scheme', currSet);
}

const init = () => {
    const currMode = getItem(COLOR_KEY);
    if(currMode === null){
    setItem(COLOR_KEY, 'dark');
    }else{
    currMode === 'dark' ? applyColorScheme('light') : applyColorScheme('dark');
    setIcon(currMode);
    }
}

const disableDarkMode = (set) => {
    applyColorScheme(set);
    setItem(COLOR_KEY, 'light');
    set = 'light';
    return set;
}

const enableDarkMode = (set) => {
    applyColorScheme(set);
    setItem(COLOR_KEY, 'dark');
    set = 'dark';
    return set;
}

const onToggle = () => {
    let currMode =  getItem(COLOR_KEY);
    if(!currMode) return;
    currMode = currMode === 'dark' ? disableDarkMode(currMode) : enableDarkMode(currMode);
    setIcon(currMode);
}

const setIcon = (currMode) => {
    darkModeBtn.innerHTML = currMode === 'dark' ? '🌞' : '🌚';
}

darkModeBtn.addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault();
    onToggle();
});

init();