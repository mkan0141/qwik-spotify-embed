import { Meta, StoryObj } from "storybook-framework-qwik";
import { SpotifyIframe, type SpotifyIframeProps } from "./index";

const meta: Meta<SpotifyIframeProps> = {
  component: SpotifyIframe,
};

type Story = StoryObj<SpotifyIframeProps>;

export default meta;

export const Song: Story = {
  args: {
    style: "border-radius:12px",
    src: "https://open.spotify.com/embed/track/68cXRMf08Op1dgJGENftWF?utm_source=generator",
    sizeType: "default",
    frameBorder: 0,
    allowfullscreen: false,
    allow:
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
    loading: "lazy",
  },
  argTypes: {
    sizeType: {
      options: ["default", "compact"],
      control: { type: "radio" },
    },
    allowfullscreen: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  render: (props) => <SpotifyIframe {...props} />,
};

export const Artist: Story = {
  args: {
    style: "border-radius:12px",
    src: "https://open.spotify.com/embed/artist/1luOe8HkZQ7zwuaO2wuJqI?utm_source=generator",
    sizeType: "default",
    frameBorder: 0,
    allowfullscreen: false,
    allow:
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
    loading: "lazy",
  },
  argTypes: {
    sizeType: {
      options: ["default", "compact"],
      control: { type: "radio" },
    },
    allowfullscreen: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  render: (props) => <SpotifyIframe {...props} />,
};
