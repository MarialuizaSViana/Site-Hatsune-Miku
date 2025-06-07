window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById("video-back");
  const volumeBar = document.getElementById('volumeBar');
  const soundToggle = document.getElementById('soundToggle');

  const savedVolume = parseFloat(localStorage.getItem('videoVolume')) || 0;
  let lastVolume = savedVolume;

  video.volume = savedVolume;
  video.muted = savedVolume === 0;

  volumeBar.value = savedVolume;
  soundToggle.textContent = video.muted ? '🔇' : '🔊';

  volumeBar.addEventListener('input', () => {
    const newVolume = parseFloat(volumeBar.value);
    video.volume = newVolume;
    video.muted = newVolume === 0;
    soundToggle.textContent = video.muted ? '🔇' : '🔊';
    localStorage.setItem('videoVolume', newVolume);

    if (newVolume > 0) {
      lastVolume = newVolume;
    }
  });

  soundToggle.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      video.volume = lastVolume;
      volumeBar.value = lastVolume;
    } else {
      video.muted = true;
      lastVolume = video.volume;
      video.volume = 0;
      volumeBar.value = 0;
    }

    soundToggle.textContent = video.muted ? '🔇' : '🔊';
    localStorage.setItem('videoVolume', video.volume);
  });
});