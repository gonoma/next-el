import React from "react";
import PropTypes from "prop-types";

function YoutubeEmbed(props: any): any {
  return (
    <iframe
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/" + props.embedID}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}

YoutubeEmbed.propTypes = {
  embedID: PropTypes.string.isRequired,
};

export default function About() {
  return (
    <div className="about-page">
      <h1 className="text-center text-green-900 font-bold text-4xl">
        This is About Page
      </h1>
      <YoutubeEmbed embedID="xYMqo5fsbPw" />
      <YoutubeEmbed embedID="cw6k5rYmjs8" />
      <YoutubeEmbed embedID="wgPjjwrNeHM" />
    </div>
  );
}
