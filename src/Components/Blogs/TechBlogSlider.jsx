import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import b1 from "../../assets/Blogs/b9.png";
import b12 from "../../assets/Blogs/b12.png";
import b14 from "../../assets/Blogs/b14.png";
import { useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const blog_slider = [
  {
    info: "Dec 13, 2023 • 25 mins read",
    text: "A Complete Guide to Graphic Designing",
    titleColor: "blue-500",
    imgSrc: b1,
    title: "charlie Clarke",
    des: "Graphic design is a diverse field that provides several employment opportunities. ",
    category: "Science",
  },
  {
    info: "Dec 23, 2020 • 25 mins read",
    text: "How To Become a Graphic Designer: A Complete Guide",
    titleColor: "blue-500",
    imgSrc: b12,
    title: "Johe Dohn",
    des: "It helps you to communicate your ideas, messages, and emotions through images, typography, and layout.",
    category: "Entrepreneurship",
  },
  {
    info: "May 23, 2022 • 25 mins read",
    text: "Bridging the Gap Between Education and Employment",
    titleColor: "blue-500",
    imgSrc: b14,
    title: "Yunus Khan",
    des: "These students did not have the opportunity to face reality and had no evidence to present themselves to the employers. ",
    category: "Finance",
  },
];
export const TechBlogSlider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".b4",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".bdiv3",
          start: "top 90%",
          end: "bottom 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bdiv3 my-14">
      <div>
        {" "}
        <h1 className="m-8 text-3xl font-bold text-center">Recent Blogs</h1>
      </div>
      <div className="mb-6 mt-8 px-10">
        <Swiper
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          Scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("hi")}
          onSwiper={(swiper) => console.log("")}
          className="b4 w-full  p-6  m-auto rounded-lg  flex flex-col justify-center items-center gap-4"
        >
          {blog_slider?.map((item, i) => {
            return (
              <SwiperSlide
                className="p-4 cursor-pointer hover:shadow-indigo-400 hover:shadow-md duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-100 rounded-md  flex flex-col justify-center items-center gap-4"
                key={item.id}
                onClick={() => navigate(`/Blog_detail/${i}`)}
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={item.imgSrc}
                    alt={`${item.title}`}
                  />
                  {/* Button positioned over the image */}
                  <button
                    type="button"
                    className="absolute bottom-2 left-3  bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white text-sm rounded-full px-4 py-2"
                  >
                    {item.category}
                  </button>
                </div>
                <div className="p-4 flex-grow ">
                  <h2 className="text-lg font-bold my-2">{item.text}</h2>
                  <span
                    className="text-sm text-gray-500 font-semibold"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 2, // Limit to 2 lines
                    }}
                  >
                    {item.des}
                  </span>
                  <p className="text-sm font-medium mt-2">{item.info}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
