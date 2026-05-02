import React from 'react'

function Section11SubscribeForm() {
  return (
    <div className="h-80 w-full grid grid-cols-5 border-2 border-black bg-[#ae3f4f]">
        <div className="col-span-3 pl-15 pr-35 flex flex-col justify-center gap-6">
            <h2 className="text-white text-5xl font-bold leading-18 uppercase text-justify">Subscribe to our news articals</h2>
            <div className="flex">
                <input type="text" placeholder='Your Email' className="flex-1 bg-white px-4 py-3 outline-none" />
                <button className='bg-black text-white px-6 cursor-pointer uppercase'>
                    Subscribe
                </button>
            </div>
        </div>
        <div className="img-wrapper h-full col-span-2 bg-slate-300">
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/newslatter-image.jpg?v=1731408076&width=1920" alt="boot img" className="h-full w-full object-cover" />
        </div>
    </div>
  )
}

export default Section11SubscribeForm