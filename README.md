# qwik-spotify-embed

A qwik component for spotify embed. You can easily create embeds using spotify embed url.

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
