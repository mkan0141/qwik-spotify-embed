import { type IframeHTMLAttributes, component$ } from "@builder.io/qwik";

interface SpotifyIframeProps
  extends Omit<IframeHTMLAttributes<HTMLIFrameElement>, "children"> {
  [key: string]: any;

  src?: string;
  sizeType?: "default" | "compact";
  width?: number | string;
  height?: number | string;
  frameBorder?: number | string;
  allowFullScreen?: boolean;
  allow?: string;
}

const SpotifyIframe = component$<SpotifyIframeProps>(
  ({
    src,
    style,
    sizeType,
    width = "100%",
    height = sizeType === "compact" ? "152px" : "352px",
    frameBorder,
    allowFullScreen = true,
    allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
    ...props
  }) => {
    return (
      <iframe
        src={src}
        style={style}
        width={width}
        height={height}
        frameBorder={frameBorder}
        allowFullScreen={allowFullScreen}
        allow={allow}
        {...props}
      />
    );
  }
);

export { SpotifyIframe };
export type { SpotifyIframeProps };
