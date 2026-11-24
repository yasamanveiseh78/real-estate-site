import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeDots
      color="#0b4055"
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
}

export default Loader;
