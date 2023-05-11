import ReactLoading from "react-loading";

export default function Loading({ width, height }) {
  return (
    <ReactLoading
      type={"spinningBubbles"}
      color={"#000000"}
      height={height}
      width={width}
    />
  );
}
