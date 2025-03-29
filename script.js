document.getElementById('fileInput').addEventListener('change', handleFiles);

function handleFiles(event) {
    const files = event.target.files;
    const collage = document.getElementById('collage');
    collage.innerHTML = ''; // Clear previous images

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.draggable = true;
            img.addEventListener('dragstart', dragStart);
            collage.appendChild(img);
        } else {
            alert('Please upload only image files.');
        }
    }
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.src);
}

document.getElementById('collage').addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.getElementById('collage').addEventListener('drop', (event) => {
    event.preventDefault();
    const src = event.dataTransfer.getData('text/plain');
    const img = document.querySelector(`img[src="${src}"]`);
    if (img) {
        img.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px)`;
    }
});