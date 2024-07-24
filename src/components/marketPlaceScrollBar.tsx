"use client";
// import { useEffect, useRef } from 'react';
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider';
import Image from 'next/image';

interface SlideItem {
    imgUrl: string;
    title: string;
    description: string;
}

interface MyComponentProps {
    mockData: SlideItem[];
}

const MyComponent: React.FC<MyComponentProps> = ({ mockData }) => {
    // useEffect(() => {
    //     const scrollDown = () => {
    //         const slidesElement = document.querySelector('.Shss-slides.Shss-direction-ltr') as HTMLElement;
    //         if (slidesElement && slidesElement.style.transform !== 'none') {
    //             window.scrollBy({ top: 646, behavior: 'smooth' });
    //         }
    //     };

    //     const intervalId = setInterval(scrollDown,  2000);
    //     return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    // }, []);
    return (
        <Shss speed={1}>
            <section className='mx-5 md:mx-8'>
                <h1 className='text-white text-[22px] md:text-[42px] my-8 font-sans max-w-iPhoneHead'>Explore the functions of the marketplace</h1>
            </section>

            <ShssWrapper >
                {mockData.map((item, index) => (
                    <ShssSlide key={index} >
                        <div className={`w-ShssItem md:w-[646px] h-[345px] md:h-auto flex flex-row hero-border py-3 px-2 md:p-8 rounded-[30px] bg-landingBack border-t-[0.44px] border-l-[0.44px] md:border-t-[0.8px] md:border-l-[0.8px] border-iPhoneCardBorder mx-4 ${index === mockData.length - 1 ? "mr-6 md:mr-16" : ""} ${index === 0 ? "ml-5 md:ml-8" : ""}`}>
                            <Image
                                className="mb-0 w-[161.59px] h-[319.88px] md:w-[288px] md:h-[576px]"
                                src={`/imgs/iPhone_screenshots/${item.imgUrl}`}
                                alt="iPhone Screenshot"
                                width={288}
                                height={576}
                            />
                            <div className="flex flex-col justify-center bg-gray-800 rounded-lg p-6 w-full w-96">
                                <h2 className="text-primary text-[14px] md:text-[25.66px] font-bold mb-2">{item.title}</h2>
                                <p className="text-gray-300 text-[11px] md:text-[16px] mb-4">{item.description}</p>
                            </div>
                        </div>
                    </ShssSlide>
                ))}
            </ShssWrapper>
        </Shss>
    );
};

export default MyComponent;
