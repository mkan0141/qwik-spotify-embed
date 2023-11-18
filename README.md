# qwik-spotify-embed

A qwik component for spotify embed. You can easily create embeds using spotify embed url.

<img height="400px" src="https://raw.githubusercontent.com/mkan0141/qwik-spotify-embed/main/public/screenshot.png">

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
