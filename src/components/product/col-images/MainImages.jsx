import SlideProduct from "@/components/product/col-images/SlideProduct";

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
         <SlideProduct
         ARRAY_IMGS = {ARRAY_IMGS}
         ARRAY_IMG_COPIA = {ARRAY_IMG_COPIA}
         isOpenModal={isOpenModal}
         className="hidden md:absolute md:top-1/2 md:left-1/2 md:grid md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:-4"
         handleCloseModal={handleCloseModal}
         />
     
      )}

  </>
  );
};