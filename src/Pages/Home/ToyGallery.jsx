import React from 'react';
import { Gallery } from "react-grid-gallery";
const ToyGallery = () => {
    const images = [
        {
           src: "https://i.ibb.co/M5Y0PkX/download.jpg",
           width: 420,
           height: 174,
           caption: "Outdoor Play",
           tags: [
            { value: "Outdoor", title: "Outdoor" },
            { value: "Kids Toy", title: "Kids " },
         ]
        },
        {
           src: "https://i.ibb.co/BZbtmGg/download.jpg",
           width: 820,
           height: 474,
           caption: "Indoor Play",
           tags: [
            { value: "Indoor", title: "Indoor" },
            { value: "Kids Toy", title: "Kids " },
         ]
        },
        {
           src: "https://i.ibb.co/mBkngBF/climbingdome-hearthsong-outdoortoys-e1619797967477.webp",
           width: 520,
           height: 212,
           tags: [
            { value: "Outdoor", title: "Outdoor" },
            { value: "Kids Toy", title: "Kids " },
         ],
           alt: "Outdoor Play",
        },
        {
           src: "https://i.ibb.co/rbbmQmZ/images.jpg",
           width: 220,
           height: 212,
           tags: [
              { value: "Indoor", title: "Indoor" },
              { value: "Kids Toy", title: "Kids" },
           ],
           alt: "Indoor Play",
        },
     
        {
           src: "https://i.ibb.co/SXf0t4X/2023-118985-hero.webp",
           width: 320,
           height: 212,
           tags: [
            { value: "Outdoor", title: "Outdoor" },
            { value: "Kids Toy", title: "Kids " },
         ]
        },
        {
           src: "https://i.ibb.co/M5Y0PkX/download.jpg",
           width: 320,
           height: 174,
           caption: "Outdoor Play",
           tags: [
            { value: "Outdoor", title: "Outdoor" },
            { value: "Kids Toy", title: "Kids " },
         ]
        },
        {
           src: "https://i.ibb.co/BZbtmGg/download.jpg",
           width: 320,
           height: 174,
           caption: "Indoor Play",
           tags: [
            { value: "Indoor", title: "Indoor" },
            { value: "Kids Toy", title: "Kids " },
         ]
        },
        {
           src: "https://i.ibb.co/mBkngBF/climbingdome-hearthsong-outdoortoys-e1619797967477.webp",
           width: 320,
           height: 212,
           tags: [
            { value: "Outdoor", title: "Outdoor" },
            { value: "Kids Toy", title: "Kids " },
         ],
           alt: "Outdoor Play",
        },
        {
           src: "https://i.ibb.co/rbbmQmZ/images.jpg",
           width: 320,
           height: 212,
           tags: [
              { value: "Indoor", title: "Indoor" },
              { value: "Kids Toy", title: "Kids" },
           ],
           alt: "Indoor Play",
        },
     
     ];
    return (
        <div>
         <p className='text-center font-bold text-3xl p-10 pt-0'> Toy Gallery</p>
            <Gallery images={images} />
        </div>
    );
};

export default ToyGallery;