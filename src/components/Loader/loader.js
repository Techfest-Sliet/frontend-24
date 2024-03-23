// import React, { useState, useEffect } from "react";
// import img1 from "../../utils/DOMAIN_LOGOS/Atomheimer.png";
// import img2 from "../../utils/DOMAIN_LOGOS/Chemica.png";
// import img3 from "../../utils/DOMAIN_LOGOS/Electrica.png";
// import img4 from "../../utils/DOMAIN_LOGOS/Electronica.png";
// import img5 from "../../utils/DOMAIN_LOGOS/Food.png";
// import img6 from "../../utils/DOMAIN_LOGOS/Karyarachna.png";
// import img7 from "../../utils/DOMAIN_LOGOS/Kermis.png";
// import img8 from "../../utils/DOMAIN_LOGOS/Mechanica.png";
// import img9 from "../../utils/DOMAIN_LOGOS/Plexus.png";
// import img10 from "../../utils/DOMAIN_LOGOS/Robozar.png";
// import img11 from "../../utils/DOMAIN_LOGOS/aarambh.png";
// import img12 from "../../utils/DOMAIN_LOGOS/Genesis.png";

// import { Box, Modal } from "@mui/material";

// const Loader = ({ when }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const images = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//     img10,
//     img11,
//     img12,
//   ];

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "10rem",
//     hight: "9rem",
//     bgcolor: "transparent",
//   };

//   useEffect(() => {
//     if (currentIndex < images.length) {
//       const image = new Image();
//       image.src = images[currentIndex];
//       image.onload = () => {
//         setTimeout(() => {
//           setCurrentIndex((currentIndex + 1) % 12);
//         }, 120);
//       };
//     }
//   }, [currentIndex, images, isLoading]);

//   if (when) {
//     return (
//       <>
//         {isLoading && (
//           <div>
//             <Modal
//               open={true}
//               sx={{
//                 backdropFilter: "blur(40px)",
//               }}
//             >
//               <Box>
//                 <img src={images[currentIndex]} style={style} alt="Loading" />
//               </Box>
//             </Modal>
//           </div>
//         )}
//       </>
//     );
//   }

//   return null;
// };

// export default Loader;

