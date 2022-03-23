import React from "react";

interface videoInterface {
  name: string;
  key: string;
  id: string;
}
interface Props {
  video: videoInterface;
}
function Iframecomp(props: Props) {
  const { video } = props;
  return (
    <>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </>
  );
}

export default Iframecomp;
