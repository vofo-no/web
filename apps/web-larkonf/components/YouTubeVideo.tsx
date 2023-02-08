export interface YouTubeVideoProps {
  videoId: string;
}

export const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => (
  <div className="video-responsive aspect-video relative">
    <iframe
      width="645"
      height="363"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&cc_load_policy=1&modestbranding=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube videoavspiller"
    />
    <style jsx>{`
      .video-responsive {
        margin: 2em;
        height: 100%;
        max-width: 100%;
        aspect-ratio: 16/9;
        box-shadow: rgba(255, 255, 255, 0.5) 0 0 15px;
        border: 1px solid #fff;
      }
      .video-responsive iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    `}</style>
  </div>
);
