const gallery = document.getElementById('gallery');
const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const uploaderName = document.getElementById('uploader').value;
    const imageInput = document.getElementById('image');
    const file = imageInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (response.ok) {
                addImageToGallery(result.imageUrl, uploaderName);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    uploadForm.reset();
});

function addImageToGallery(imageUrl, uploaderName) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${imageUrl}" alt="Uploaded Image">
        <p><strong>Uploader:</strong> ${uploaderName}</p>
    `;
    gallery.appendChild(card);
}
