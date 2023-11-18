import { SpotifyIframe } from "./components/spotify-iframe";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <SpotifyIframe
          src={
            "https://open.spotify.com/embed/track/0msE3v0pQgGttnlZjrLzWj?utm_source=generator"
          }
          sizeType={"default"}
        />
        <div style={"display: flex; gap: 16px;"}>
          <SpotifyIframe
            src={
              "https://open.spotify.com/embed/track/3Mlfyz8i3WNld5BMMDx8Pd?utm_source=generator"
            }
            sizeType={"compact"}
          />
          <SpotifyIframe
            src={
              "https://open.spotify.com/embed/track/476LxG97kKEd8LrQFWYCKo?utm_source=generator"
            }
            width={300}
            height={160}
          />
        </div>
      </body>
    </>
  );
};
