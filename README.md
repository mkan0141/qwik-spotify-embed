# qwik-spotify-embed

[![npm version](https://badge.fury.io/js/qwik-spotify-embed.svg)](https://badge.fury.io/js/qwik-spotify-embed) ![ci](https://github.com/mkan0141/qwik-spotify-embed/workflows/Chromatic/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A qwik component for spotify embed. You can easily create embeds using spotify embed url.

<img width="80%" src="https://raw.githubusercontent.com/mkan0141/qwik-spotify-embed/main/assets/screenshot.png">

↑ [閃光([Alexandros])](https://open.spotify.com/intl-ja/track/0msE3v0pQgGttnlZjrLzWj?si=2a7ecbcf99014b83) / [NO RAIN, NO RAINBOW(GOHOBI)](https://open.spotify.com/intl-ja/track/3Mlfyz8i3WNld5BMMDx8Pd?si=1f08c2b73c964b71) / [It Hurts(Enter Shikari)](https://open.spotify.com/intl-ja/track/476LxG97kKEd8LrQFWYCKo?si=77c71bd6872e4fcc) ↑  
They are wonderful tunes, so please give them a listen !! 🎵

## Basic Usage

```js
import { SpotifyIframe } from "qwik-spotify-embed";

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
