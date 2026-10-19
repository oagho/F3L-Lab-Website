document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.getElementById('heroVideo');
    if (!heroVideo) return;

    const videoPlaylist = [
        "images/lab video.mp4",
        "images/frozen3r.mp4"
    ];
    let currentVideoIndex = 0;

    heroVideo.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
        heroVideo.src = videoPlaylist[currentVideoIndex];
        heroVideo.load();
        heroVideo.play().catch(err => {
            console.warn("Video playback error:", err);
        });
    });
});