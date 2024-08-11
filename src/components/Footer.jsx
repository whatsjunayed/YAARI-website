import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { ImGoogle3 } from 'react-icons/im';

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full py-20 bg-gray-900 text-white/60">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto gap-10 px-8">
          <div className="first ">
            <h1 className='text-3xl font-semibold text-white'>YAARI</h1>
            <p className='py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet reiciendis quo! Tempora illum minima laborum? Amet molestiae
              mollitia quisquam?
            </p>
            <div className="icon flex gap-4">
              <BsFacebook className="cursor-pointer" size={25} />
              <AiFillTwitterCircle className="cursor-pointer" size={28} />
              <ImGoogle3 className="cursor-pointer" size={25} />
            </div>
          </div>
          <div className="second">
            <h2 className='font-semibold text-white pb-3'>Solutions</h2>
            <p>Web Design</p>
            <p>Graphics Design</p>
            <p>Power & Energy</p>
            <p>Solar Power</p>
            <p>Green Energy</p>
          </div>
          <div className="third">
            <h2 className='font-semibold text-white pb-3'>Usefull links</h2>
            <p>About us</p>
            <p>Helps & Support</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
