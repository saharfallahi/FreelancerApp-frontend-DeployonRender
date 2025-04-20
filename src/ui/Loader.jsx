import { ThreeDots } from "react-loader-spinner";

function Loader({width = "75", heigth = "40"}) {
  return (
    <ThreeDots
      visible={true}
      height={heigth}
      width={width}
      color="rgb(var(--color-primary-900))"
      radius="9"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default Loader;
