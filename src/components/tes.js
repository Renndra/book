import React from "react";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "Hidup Ini Singkat, Jangan Dibuat Berat",
    author: "Dale Carnegie",
    price: 63200,
    oldPrice: 79000,
    discount: 20,
    image: "/images/book1.png",
  },
  {
    id: 2,
    title: "Sisi Tergelap Surga",
    author: "Brian Khrisna",
    price: 74250,
    oldPrice: 99000,
    discount: 25,
    image: "/images/book2.png",
  },
  {
    id: 3,
    title: "The Psychology of Money Edisi Revisi",
    author: "Morgan Housel",
    price: 76500,
    oldPrice: 85000,
    discount: 10,
    image: "/images/book3.png",
  },
  {
    id: 4,
    title: "The Fragrant Flower Blooms With Dignity - Vol. 2",
    author: "SAKA MIKAMI",
    price: 36000,
    oldPrice: 45000,
    discount: 20,
    image: "/images/book4.png",
  },
  {
    id: 5,
    title: "The Fragrant Flowers Blooms with Dignity - Vol. 3",
    author: "SAKA MIKAMI",
    price: 36000,
    oldPrice: 45000,
    discount: 20,
    image: "/images/book5.png",
  },
  {
    id: 6,
    title: "Seorang Pria yang Melalui Duka dengan Menata Piring",
    author: "dr. Andreas Kurniawan, SpGK",
    price: 76000,
    oldPrice: 95000,
    discount: 20,
    image: "/images/book6.png",
  },
];

const PopularBooks = () => {
  return (
    <section className="popular-books py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Buku Terlaris</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Lihat Semua
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <div className="mt-2">
                  <p className="text-xl font-bold text-red-500">
                    Rp{book.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    Rp{book.oldPrice.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-500">
                    {book.discount}% OFF
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
