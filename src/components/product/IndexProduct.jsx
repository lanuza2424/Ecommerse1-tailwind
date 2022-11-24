import DetailsProduct from "@/components/product/details/DetailsProduct";
import GalleryProduct from "@/components/product/gallery/GalleryProduct";


import imgLenovoCopia1 from  '@/assets/images/lenovo1 - copia.jpg';
import imgLenovoCopia2 from  '@/assets/images/lenovo2 - copia.jpg';
import imgLenovoCopia3 from  '@/assets/images/lenovo3 - copia.jpg';
import imgLenovoCopia4 from  '@/assets/images/Lenovo4 - copia.jpg';

import imgLenovo1 from '@/assets/images/lenovo1.jpg';
import imgLenovo2 from '@/assets/images/lenovo2.jpg';
import imgLenovo3 from '@/assets/images/lenovo3.jpg';
import imgLenovo4 from '@/assets/images/lenovo4.jpg';


const ARRAY_IMGS = [imgLenovoCopia1, imgLenovoCopia2, imgLenovoCopia3, imgLenovoCopia4]

const ARRAY_IMG_COPIA = [imgLenovo1, imgLenovo2, imgLenovo3, imgLenovo4]

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
        <GalleryProduct 
             ARRAY_IMGS={ARRAY_IMGS} 
             ARRAY_IMG_COPIA={ARRAY_IMG_COPIA}
         />
        <DetailsProduct />
    </main>
    );
};

export default MainProduct