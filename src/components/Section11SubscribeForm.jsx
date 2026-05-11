import React from 'react'

function Section11SubscribeForm() {
  return (
    <div className="h-80 w-full flex border-2 border-black bg-[#ae3f4f]">
        <div className="w-full xl:w-240 xl:pl-15 xl:pr-35 flex flex-col justify-center gap-6">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold leading-8 md:leading-12 lg:leading-16 xl:leading-18 uppercase text-center xl:text-justify">Subscribe to our news articals</h2>
            <div className="flex mx-4">
                <input type="text" placeholder='Your Email' className="flex-1 w-20 bg-white px-4 py-3 outline-none" />
                <button className='bg-black text-white px-6 cursor-pointer uppercase'>
                    Subscribe
                </button>
            </div>
        </div>
        <div className="img-wrapper hidden lg:block h-full bg-slate-300">
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/newslatter-image.jpg?v=1731408076&width=1920" alt="boot img" className="h-full w-full object-cover" />
        </div>
    </div>
  )
}

export default Section11SubscribeForm