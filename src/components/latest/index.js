import React from 'react';
import Image from 'next/image';
import {Cover5} from '../../../public';
import {Cover6} from '../../../public';
import {Cover7} from '../../../public';
import {Cover8} from '../../../public';
import  {StarOn}  from '../../../public';
import  {StarOff}  from '../../../public';
import  {Author1}  from '../../../public';
import  {Author2}  from '../../../public';
import  {Author3}  from '../../../public';
import  {Author4}  from '../../../public';

const Latest = () => {
  return (
    <section className="popular">
      <div className="flex justify-between items-center p-10">
        <h2>Popular Now</h2>
        <a href="#">View All</a>
      </div>
      <div className="pl-10 pr-10 grid grid-cols-4 gap-4">
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover5} />
            <h3>Hidup Ini Singkat,Jangan Dibuat Berat</h3>
            <ul className='flex'>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOff}/></li>
            </ul>
            <h4 className='mt-5 mb-5'>Dale Carnegie</h4>
            <div className='flex items-center'>
            <Image src={Author1}/>
            <p className='ml-2'><span className='font-semibold'>Andre Syak</span> -1 week ago</p>
            </div>
          </div>
        </div>
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover6} />
            <h3>Sisi Tergelap Surga</h3>
            <ul className='flex'>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOff}/></li>
            </ul>
            <h4 className='mt-5 mb-5'>Brian Khrisna</h4>
            <div className='flex items-center'>
            <Image src={Author2}/>
            <p className='ml-2'><span className='font-semibold'>Andre Syak</span> -1 week ago</p>
            </div>
          </div>
        </div>
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover7} />
            <h3>The Psychology of Money</h3>
            <ul className='flex'>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOff}/></li>
            </ul>
            <h4 className='mt-5 mb-5'>Morgan Housel</h4>
            <div className='flex items-center'>
            <Image src={Author3}/>
            <p className='ml-2'><span className='font-semibold'>Andre Syak</span> -1 week ago</p>
            </div>
          </div>
        </div>
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover8} />
            <h3>The Fragrant Flower Blooms with Dignity</h3>
            <ul className='flex'>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOn}/></li>
              <li><Image src={StarOff}/></li>
            </ul>
            <h4 className='mt-5 mb-5'>Saka Mikami</h4>
            <div className='flex items-center'>
            <Image src={Author4}/>
            <p className='ml-2'><span className='font-semibold'>Andre Syak</span> -1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
