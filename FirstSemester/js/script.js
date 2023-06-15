var videos = document.querySelectorAll("#videos");

    function playVideo() {
      this.play();
    }

    function pauseVideo() {
      this.pause();
    }

    function resetVideo() {
      this.currentTime = 0;
    }

    videos.forEach(function(video) {
      video.addEventListener("mouseover", playVideo);
      video.muted = true;
      video.addEventListener("mouseout", function() {
        pauseVideo.call(video);
        resetVideo.call(video);
      });
    });

  








