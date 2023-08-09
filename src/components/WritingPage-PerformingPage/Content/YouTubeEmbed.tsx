import YouTube, { YouTubeProps } from "react-youtube";

function YouTubeEmbed() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "400",
    width: "80%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube
      style={{ marginTop: "1rem" }}
      videoId="q14beBhDGms"
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}

export default YouTubeEmbed;
