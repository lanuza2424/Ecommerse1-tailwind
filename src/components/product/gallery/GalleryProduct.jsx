import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";

import { useState } from "react";


export default ({ARRAY_IMGS, ARRAY_IMG_COPIA}) => {
const [isOpenModal, setIsOpenModal]=useState(false);

const handleOpenModal = () =>{
    window.innerWidth > 767 && setIsOpenModal(true);
   
};

const handleCloseModal = () => {
    setIsOpenModal(false);
}

  return (
    <>
         <SlideProduct
             ARRAY_IMGS = {ARRAY_IMGS}
             ARRAY_IMG_COPIA = {ARRAY_IMG_COPIA}
             className="grid md:grid-cols-4 md:gap-4"
             handleOpenModal={handleOpenModal}
    />
    { isOpenModal && (
      <>
         <ModalProduct
         ARRAY_IMGS = {ARRAY_IMGS}
         ARRAY_IMG_COPIA = {ARRAY_IMG_COPIA}
         isOpenModal={isOpenModal}
         className="hidden md:absolute md:top-1/2 md:z-10 md:left-1/2 md:grid md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4 "
         handleCloseModal={handleCloseModal}
         />
         {/* backdrop-blur-xl*/}
         <span className="fixed top-0 left-0 bg-black/70 w-full h-full" onClick={handleCloseModal}></span>
     </>
      )}

  </>
  );
};
