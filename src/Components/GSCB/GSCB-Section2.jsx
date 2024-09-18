import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2 = [
  {
    id: 1,
    img: "https://images.stockcake.com/public/1/c/f/1cf3248f-a7b3-42b9-b403-dcd6e581c864_large/global-collaboration-hub-stockcake.jpg",
    title: "Global Collaboration ",
    desc: "Join a global network of educators and institutions to share knowledge, research, and best practices.",
  },
  {
    id: 2,
    img: "https://images.stockcake.com/public/9/9/3/9937c65f-bb06-4547-9543-42d779319201_large/virtual-reality-exploration-stockcake.jpg",
    title: "Enhanced Learning Resources",
    desc: "Access cutting-edge technology, digital platforms, and content designed to improve student engagement and learning outcomes.",
  },
  {
    id: 3,
    img: "https://images.stockcake.com/public/f/1/1/f1181b68-648d-4108-b82e-e06a4bbe8fc7_large/innovative-strategy-planning-stockcake.jpg",
    title: "Tailored Solutions",
    desc: "Collaborate with us to develop customized educational programs, courses, and curricula that address the specific needs of your institution.",
  },
  {
    id: 4,
    img: "https://images.stockcake.com/public/3/f/3/3f38fa3b-4a05-4b61-840c-97882c5b2a81_large/collaborative-workspace-aerial-stockcake.jpg",
    title: "Continuous Support and Training",
    desc: "Benefit from expert-led workshops, training sessions, and ongoing support to ensure the success of your programs.",
  },
];

const Cards = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card-1",
      { y: "0%", x: "30%", opacity: 0 },
      {
        x: "0",
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-1",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    gsap.fromTo(
      ".card-2",
      { y: "30%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-2",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );
    gsap.fromTo(
      ".card-3",
      { y: "30%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-2",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    gsap.fromTo(
      ".card-4",
      { y: "0%", x: "-30%", opacity: 0 },
      {
        x: "0",
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-3",
          start: "top 120%",
          end: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 px-6 md:px-12 lg:px-24 items-center">
  <h3 className="col-span-full text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
    Why Join GCEP?
  </h3>
  {section2.map((info, index) => {
    const cardClass =
      index === 0
        ? "card-1"
        : index === 1
        ? "card-2"
        : index === 2
        ? "card-3"
        : "card-4";
    return (
      <div
        key={index}
        className={`group flex flex-col h-auto w-full md:h-[90%] md:w-[90%] cursor-pointer gap-6 relative ${cardClass}`}
      >
        <img
          className="w-full h-full rounded-xl hover:opacity-10 object-cover"
          src={info.img}
          alt={`img${index + 1}`}
        />
        <div className="flex flex-col gap-4 opacity-0 rounded-xl group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/70 transition-all ease-linear text-center pt-16 md:pt-24 text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {info.title}
          </h3>
          <h6 className="text-sm md:text-base tracking-tight">
            {info.desc}
          </h6>
        </div>
      </div>
    );
  })}
</section>

  );
};

export default Cards;
