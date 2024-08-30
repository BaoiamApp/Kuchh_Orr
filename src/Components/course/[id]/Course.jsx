import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CourseCate } from '../../../Data'
import { CourseDesc } from '../../../assets/assets';
import { FaArrowRightLong, FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdOutlineClass } from 'react-icons/md';

const Course = () => {

    const { id } = useParams();
    const course = CourseCate.find((cate) => cate.subCate.find((subCate) => subCate.id === parseInt(id)));
    const subCourse = course.subCate.find((subCate) => subCate.id === parseInt(id));

    console.log(subCourse);

    const [swiper, setSwiper] = useState(null);

    const handleNextClick = () => swiper.slideNext();
    const handlePrevClick = () => swiper.slidePrev();

    return (
        <div>
            {/* Banner */}
            <div className='w-full h-[80vh]'>
                <img src={subCourse.banner} alt={`${subCourse.course} Banner`} className='w-full h-full object-cover object-top' />
            </div>

            {/* Course Description */}
            <div className='flex items-center justify-between px-24 my-12'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-3xl font-bold text-neutral-600'>{subCourse.course}</h3>
                    {subCourse.desc.map((d, i) => {
                        return <p key={i}>{d}</p>
                    })}

                    <button className='pl-4 pr-6 py-2 border border-orange-400 text-orange-400 font-semibold rounded-r-full w-fit flex items-center gap-4 group hover:bg-orange-400 hover:text-white'>Enroll Now <FaArrowRightLong size={22} className='group-hover:animate-pulse' /> </button>
                </div>

                <img src={CourseDesc} alt="" className='w-full h-96' />
            </div>

            {/* Course Overview */}
            <div className='px-24 my-12 py-12 text-white bg-gradient-to-r from-orange-400 to-orange-600'>
                <h4 className='text-3xl font-semibold mb-4'>Course <span className='border-b'>Overview</span></h4>

                <ul className='list-inside list-disc marker:text-white marker:text-xl flex flex-col gap-2 w-[80%]'>
                    {subCourse.overview.map((v, i) => {
                        return <li key={i} className='font-medium'>{v}</li>
                    })}
                </ul>
            </div>

            {/* Course Curriculum */}
            <div className='w-full px-24 my-20 h-full '>
                <h4 className='text-3xl font-semibold text-neutral-600 mb-4'>Course <span className='text-orange-500 border-b border-orange-500'>Curriculum</span></h4>

                <ul className='list-inside list-disc marker:text-orange-500 marker:text-xl'>
                    {subCourse.curriculum.map((c, i) => {
                        return <li key={i} className='py-1'>{c}</li>
                    })}
                </ul>
            </div>

            {/* Course Highlights */}
            <div className='py-8 px-24 w-full h-full text-white bg-gradient-to-r from-orange-400 to-orange-600'>
                <h4 className='text-3xl font-semibold text-white mb-8'>Course <span className='border-b'>Highlights</span></h4>


                {/* <div className='flex items-center flex-wrap gap-4 text-black'>
                    {subCourse.highlights.map((h, i) => {
                        return <div className='bg-white px-6 py-8 rounded-xl flex flex-col gap-4 w-64'>
                            <p><span className='text-2xl font-semibold'>Live online classes</span> <br /> learn from our experts live</p>
                        </div>
                    })}

                </div> */}

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="my-4 px-8 w-full h-28 flex gap-4 overflow-hidden items-center"
                >
                    {subCourse.highlights.map((h, i) => {
                        return <SwiperSlide key={i} className='bg-white px-4 py-2 rounded-xl flex items-center gap-2 text-orange-500 tracking-tight'>
                            <span className='text-orange-500 text-5xl'>‣</span>{h}
                        </SwiperSlide>
                    })}
                </Swiper>

            </div>

            {/* Join we us */}
            <div className='my-28 pl-24 pr-12 w-full h-full'>
                <div className='flex gap-12 justify-between w-full h-full'>
                    <div className='w-[40%]'>
                        <h4 className='text-4xl font-bold text-neutral-600 mb-4'>Join With Us Find the <span className='text-orange-500 border-b border-orange-500'>Right Course</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda vitae blanditiis, et accusantium dolores quis rem aspernatur aliquam ducimus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non velit officia? Dolorem officiis similique velit rem quidem tempora culpa?</p>
                    </div>

                    <Swiper spaceBetween={30}
                        slidesPerView={2}
                        onSwiper={setSwiper}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}
                        modules={[Navigation]} className='flex items-center w-[60%] px-8'>
                        {subCourse.plans.map((p, i) => {
                            return <SwiperSlide key={i} className='group h-[40rem] w-fit flex flex-col text-white bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl p-4 hover:bg-gradient-to-b hover:from-white hover:to-white hover:border hover:border-orange-600 hover:text-orange-600'>
                                <h4 className='text-2xl font-bold mb-4 text-center'>{p.name}</h4>
                                <p className='font-semibold  mb-2 text-2xl'>{p.courseName}</p>
                                <p className='text-2xl font-bold my-2'>₹{p.price}/Full Course</p>

                                <button className='px-6 py-2 font-semibold rounded-xl bg-white text-orange-500 my-2 group-hover:bg-orange-600 group-hover:text-white'>Buy Now</button>

                                <div className='flex flex-col gap-2 mt-4'>
                                    {p.courseItems.map((item, index) => {
                                        return <p key={index}>{item}</p>
                                    })}
                                </div>
                            </SwiperSlide>
                        })}

                        <div
                            className="prev absolute top-1/2 left-0 z-40 border border-orange-600 backdrop-blur-sm rounded-full p-2 cursor-pointer"
                        >
                            <FaChevronLeft size={22} className="text-orange-600" />
                        </div>
                        <div
                            className="next absolute top-1/2 right-0 z-40 border border-orange-600 backdrop-blur-sm rounded-full p-2 cursor-pointer"
                        >
                            <FaChevronRight size={22} className="text-orange-600" />
                        </div>
                    </Swiper>
                </div>
            </div>

            {/* Emi & Placement */}
            <div className='flex items-center justify-around px-24 my-32'>
                <div className='border border-orange-500 rounded-3xl px-6 py-4 shadow-xl w-[35rem]'>
                    <p className='text-center font-semibold text-orange-500 text-xl mb-2'>Easy EMI</p>
                    <p className='text-neutral-600 mb-2'>Easy monthly payment options with our emi facilities</p>

                    <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-neutral-600'>
                        <li>No upfront payment required</li>
                        <li>Fixed monthly installments</li>
                        <li>Flexible repayment options</li>
                    </ul>
                </div>

                <div className='border border-orange-500 rounded-3xl px-6 py-4 shadow-xl w-[35rem] h-[11.5rem]'>
                    <p className='text-center font-semibold text-orange-500 text-xl mb-2'>Pay After Placement</p>
                    <p className='text-neutral-600 mb-2'>Pay only when you get placed with our Pay After Placement support</p>

                    <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-neutral-600'>
                        <li>With our Pay After Placement program, you invest in your career development now and pay us only when yoy land a job.</li>
                    </ul>
                </div>
            </div>

            {/* Amazing Offer */}
            <div className='py-8 px-24 my-20 w-full h-full text-white bg-gradient-to-r from-orange-400 to-orange-600 text-center'>
                <h4 className='text-4xl font-semibold mb-4'>Amazing <span className='border-b'>Career</span></h4>
                <p className='text-lg'>Grab these exclusive offers available only once a year.</p>

                <div className='flex items-center gap-4 justify-center w-full mt-8'>
                    <div className='bg-white w-80 rounded-3xl px-6 py-4 shadow-xl'>
                        <p className='text-center font-semibold text-neutral-500 text-xl mb-2'>BUY 2 COURSES & GET</p>
                        <p className='mb-2 text-2xl font-bold text-orange-500'>15% OFF</p>
                    </div>
                    <div className='bg-white w-80 rounded-3xl px-6 py-4 shadow-xl'>
                        <p className='text-center font-semibold text-neutral-500 text-xl mb-2'>BUY 3 COURSES & GET</p>
                        <p className='mb-2 text-2xl font-bold text-orange-500'>20% OFF</p>
                    </div>
                    <div className='bg-white w-80 rounded-3xl px-6 py-4 shadow-xl'>
                        <p className='text-center font-semibold text-neutral-500 text-xl mb-2'>BUY 4 COURSES & GET</p>
                        <p className='mb-2 text-2xl font-bold text-orange-500'>25% OFF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course