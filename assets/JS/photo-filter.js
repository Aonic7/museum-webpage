const panel = document.querySelector('.explore-panel');
const dragLine = document.querySelector('.drag-line');
const img = document.querySelector('.explore__picture2');

panel.addEventListener('input', () => {
    img.style.width = `${panel.value}%`;
    dragLine.style.left = `${panel.value}%`
    dragLine.style.transform = `translate(-${panel.value}%)`
})