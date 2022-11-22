import PrevIcon from '@/components/icons/PrevIcon';
import NextIcon from '@/components/icons/NextIcon';



import imgLenovoCopia1 from  '@/assets/images/lenovo1 - copia.jpg';
import imgLenovoCopia2 from  '@/assets/images/lenovo2 - copia.jpg';
import imgLenovoCopia3 from  '@/assets/images/lenovo3 - copia.jpg';
import imgLenovoCopia4 from  '@/assets/images/Lenovo4 - copia.jpg';

import imgLenovo1 from '@/assets/images/lenovo1.jpg';
import imgLenovo2 from '@/assets/images/lenovo2.jpg';
import imgLenovo3 from '@/assets/images/lenovo3.jpg';
import imgLenovo4 from '@/assets/images/lenovo4.jpg';
import { useState } from 'react';

const ARRAY_IMGS = [imgLenovoCopia1, imgLenovoCopia2, imgLenovoCopia3, imgLenovoCopia4]

export default () => {

const [index, setIndex] = useState(0)

const handleClickNext = () => {
     index === ARRAY_IMGS.length - 1 ?   setIndex(0) : setIndex(index + 1);
}
const handleClickPrev = () => {
    index === 0 ? setIndex (ARRAY_IMGS.length - 1) : setIndex(index - 1);
}


  return(
        <section className="grid md:grid-cols-4 md:gap-4">
        <div className='col-span-4 relative'>
            <img src={ARRAY_IMGS[index]} alt="" className="aspect-[16/12]"/>
            <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
                <button className=" grid bg-gray-400 w-10 h-10 place-items-center rounded-full" onClick={handleClickPrev}>
                    <PrevIcon />
                </button>
                <button className="grid  place-items-center bg-gray-400 w-10 h-10 rounded-full" onClick={handleClickNext}>
                    <NextIcon />
                </button>
            </div>
        </div>
        <img src={imgLenovo1} alt="" className="hidden md:block"/>
        <img src={imgLenovo2} alt="" className="hidden md:block"/>
        <img src={imgLenovo3} alt="" className="hidden md:block"/>
        <img src={imgLenovo4} alt="" className="hidden md:block"/>
   </section>

    );
};