import "./VideoBackground.css"; // Optional CSS file

export default function VideoBackground() {
  return (
    <div className="video-background animate-fade-in-video">
      <video
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noremoteplayblack"
        autoPlay
        loop
        muted
        className="video-element"
      >
        <source src="../src/assets/stars_30.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
