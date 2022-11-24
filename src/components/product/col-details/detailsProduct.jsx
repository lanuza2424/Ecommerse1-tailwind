import CartIcon from '@/components/icons/CartIcon'

export default () => {
    return (
        <section className="container mx-auto px-4 md:px-0">
        <p className="mb-3 text-red-400 uppercase font-bold tracking-wide">Lanuza Group</p>
        <h2 className="mb-4 font-bold text-3xl">Fall Limited Edition Sneakers</h2>
        <p className="text-gray-400 mb-5">
           These low profile sneakers are you perfect casual wear
           companion. featuring a durable rubber outer sole,
           they'll withstand everything the weather can offer.
        </p>
        <div className="mb-5 grid gap-4 grid-cols-3 md:grid-cols-[1fr_3fr] item-center font-bold md:gap-1">
           <span className="text-3xl">$125.00</span>
           <span className="bg-red-50  text-red-400 rounded-md mr-auto py-1 px-2">50%</span>
           <span className="text-right text-gray-600 text-lg line-through md:col-span-2 md:text-left">$250.00</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]">
           <div className="col-span-3 px-5 py-2 pb-3 items-baseline bg-gray-400 flex  md:col-span-1 justify-between rounded-md">
               <button className='text-3xl text-red-700 '>-</button>
               <span className='text-xl'>0</span>
                <button  className='text-3xl text-red-700 '>+</button>
           </div>
           <button className="flex items-center justify-center  gap-x-4 col-span-3 bg-red-400 py-3  hover:bg-red-700 transition-all  md:col-span-1 rounded-md text-white">
           <CartIcon fill="#fff"/>
           <span>Add to Cart</span>
           </button>
        </div>
   </section>

    );
};