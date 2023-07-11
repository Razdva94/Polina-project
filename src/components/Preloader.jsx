/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Triangle } from "react-loader-spinner";

// function Preloader() {
//   return (
//     <><div className="preloader">
//       <Triangle
//         height="180"
//         width="180"
//         color="black"
//         ariaLabel="triangle-loading"
//         wrapperStyle={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//         wrapperClassName=""
//         visible={true}
//       />
//     </div><div className="preloader">
//       <Triangle
//         height="120"
//         width="120"
//         color="black"
//         ariaLabel="triangle-loading"
//         wrapperStyle={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//         wrapperClassName=""
//         visible={true}
//         direction={-1}
//       />
//     </div></>
//   );
// }

// export default Preloader;
function Preloader() {
  return (
    <>
      <div className="preloader">
        <Triangle
          height={180}
          width={180}
          color="black"
          ariaLabel="triangle-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          wrapperClassName=""
          visible={true}
        />
      </div>
      <div className="preloader-inner">
        <Triangle
          height={120}
          width={120}
          color="black"
          ariaLabel="triangle-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          wrapperClassName=""
          visible={true}
          direction={-1}
        />
      </div>
    </>
  );
}

export default Preloader;
