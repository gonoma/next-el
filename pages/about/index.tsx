import React from "react";
import PropTypes from "prop-types";
import Navbar from "@components/common/navbar";

function YoutubeEmbed(props: any): any {
  return (
    <iframe
      className="m-auto border-8 border-slate-100"
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
      <Navbar></Navbar>
      <h1 className="mt-10 m-auto text-center w-96 text-black font-bold">
        This page is supposed to be a fun project where important concepts of
        React and Next.js are explored and tried. But there may be some random
        content such as...
      </h1>

      <h1 className="mt-10 m-auto text-center w-96 text-rose-800 font-bold">
        The one and only Franco Pepe teaching you how to make pizza!
      </h1>

      <div className="mt-10 m-auto text-center">
        <YoutubeEmbed embedID="cw6k5rYmjs8" />
      </div>
    </div>
  );
}
