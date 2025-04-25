import "./VideoBackground.css"; // Optional CSS file

export default function VideoBackground() {
  return (
    <div className="video-background animate-fade-in-video">
      <video
        disablePictureInPicture
        controlsList="nodownload noremoteplayblack"
        autoPlay
        loop
        muted
        className="video-element"
      >
        <source src="../src/assets/stars.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
