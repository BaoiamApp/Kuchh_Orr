import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ed_tech_enhances_critical_thinking from "../../assets/Blogs/ed_tech_enhances_critical_thinking.png";
import gsap from "gsap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import new_excited_tech_edu1 from "../../assets/Blogs/new_excited_tech_edu1.jpg";
import screen_time from "../../assets/Blogs/screen_time.png";

const blog_slider = [
  {
    title: "Jason Adam",
    titleColor: "blue-500",
    imgSrc: ed_tech_enhances_critical_thinking,
    text: "How Ed-Tech Enhances Critical Thinking Skills: Strategies and Future Prospects",
    info: "Oct 17, 2022 • 5 mins read",
    des: "Understand the role of critical thinking in contemporary learners.This blog evaluates how Ed-Tech changes the method of students’ critical",
    category: "Education",
  },
  {
    title: "Mary Smith",
    titleColor: "blue-500",
    imgSrc: new_excited_tech_edu1,
    text: "New and Exciting Technology in Education",
    info: "Oct 10, 2022 • 10 mins read",
    des: "Explore what ed-tech is, how it creates value among the students, its current trends, and how to keep pace in an increasingly connected 5g world.",
    category: "Career Development",
  },
  {
    title: "Akshay Saini",
    titleColor: "blue-500",
    imgSrc: screen_time,
    text: "Balancing Screen Time: Healthy Technology Use In Education",
    info: "Dec 22, 2022 • 10 mins read",
    des: "As technology has become an integral part of our life, it is really necessary to understand the importance of healthy technology use to maintain your overall well being while learning. ",
    category: "Technology",
  },
];

export const BusSlider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".b5",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".bdiv5",
          start: "top 90%",
          end: "bottom 80%",
        },
      }
    );
  }, []);

  return (
    <div className='my-12'>
      <div>
        {" "}
        <h1 className='m-8 text-3xl font-bold text-center'>
          Popular or Most featured articles
        </h1>
      </div>
      <div className='mb-6 mt-8 px-10'>
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
          className='b5 w-full m-auto p-6  rounded-lg  flex flex-col justify-center items-center gap-4'
        >
          {blog_slider?.map((item, i) => {
            return (
              <SwiperSlide
                className='p-4 cursor-pointer hover:shadow-indigo-400 hover:shadow-md duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-100 rounded-md  flex flex-col justify-center items-center gap-4'
                key={item.id}
                onClick={() => navigate(`/Blog_detail/${i}`)}
              >
                <div className='relative'>
                  <img
                    className='w-full h-48 object-cover'
                    src={item.imgSrc}
                    alt={`${item.title}`}
                  />
                  {/* Button positioned over the image */}
                  <button
                    type='button'
                    className='absolute bottom-2 left-3  bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white text-sm rounded-full px-4 py-2'
                  >
                    {item.category}
                  </button>
                </div>
                <div className='p-4 flex-grow '>
                  <h2 className='text-lg font-bold my-2'>{item.text}</h2>
                  <span
                    className='text-sm text-gray-500 font-semibold'
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 2, // Limit to 2 lines
                    }}
                  >
                    {item.des}
                  </span>
                  <p className='text-sm font-medium mt-2'>{item.info}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
