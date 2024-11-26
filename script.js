document.getElementById('copyIP').addEventListener('click', function() {
    const serverIP = 'play.example.com';
    navigator.clipboard.writeText(serverIP)
        .then(() => {
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 1000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

const downloadBtn = document.getElementById('downloadBtn');
const downloadOptions = document.getElementById('downloadOptions');

downloadBtn.addEventListener('click', function() {
    downloadOptions.classList.toggle('active');
});

// Close download options when clicking outside
document.addEventListener('click', function(event) {
    if (!downloadBtn.contains(event.target) && !downloadOptions.contains(event.target)) {
        downloadOptions.classList.remove('active');
    }
});

// Prevent download options from closing when clicking inside it
downloadOptions.addEventListener('click', function(event) {
    event.stopPropagation();
});