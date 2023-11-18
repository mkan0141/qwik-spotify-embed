# qwik-spotify-embed

A qwik component for spotify embed. You can easily create embeds using spotify embed url.

<img width="80%" src="https://raw.githubusercontent.com/mkan0141/qwik-spotify-embed/main/public/screenshot.png">

↑ [閃光([Alexandros])](https://open.spotify.com/intl-ja/track/0msE3v0pQgGttnlZjrLzWj?si=2a7ecbcf99014b83) / [NO RAIN, NO RAINBOW(GOHOBI)](https://open.spotify.com/intl-ja/track/3Mlfyz8i3WNld5BMMDx8Pd?si=1f08c2b73c964b71) / [It Hurts(Enter Shikari)](https://open.spotify.com/intl-ja/track/476LxG97kKEd8LrQFWYCKo?si=77c71bd6872e4fcc) ↑  
They are wonderful tunes, so please give them a listen !! 🎵  


## Basic Usage

```js
export default component$(() => {
  return (
    <div>
      <SpotifyIframe
        src={
          "https://open.spotify.com/embed/track/0msE3v0pQgGttnlZjrLzWj?utm_source=generator"
        }
      />
    </div>
  );
});
```
