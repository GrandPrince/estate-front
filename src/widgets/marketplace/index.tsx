import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MarketPlaceScrollBar from "@/components/marketPlaceScrollBar"
// Install modules

interface SlideItem {
    imgUrl: string;
    title: string;
    description: string;
}

const mockData: SlideItem[] = [
    {
        imgUrl: "iPhone1.png",
        title: "Artificial Intelligence Daria",
        description: "Our AI assistant Daria will help you remotely find your dream home in a new way."
    },
    {
        imgUrl: "iPhone2.png",
        title: "Save. Compare!",
        description: "Conveniently compare up to 18 apartments, developers and projects"
    },
    {
        imgUrl: "iPhone3.png",
        title: "Predictions and statistics",
        description: "Big data analysis is available to everyone without registrations"
    },
    {
        imgUrl: "iPhone4.png",
        title: "All about infrastructure",
        description: "Calculate the distance to the desired objects with ease"
    },
    {
        imgUrl: "iPhone5.png",
        title: "Detailed information about the facility",
        description: "Housing, developer and unit maps are always at your fingertips, where you expect to find it"
    },
    {
        imgUrl: "iPhone6.png",
        title: "Walk around the facilities and floors",
        description: "We add digital copies of the property and tours so you can feel at home before you buy even if the house hasn't been built yet"
    },
];

const MarketPlaceWidget = () => {
    return (
        <>
            <MarketPlaceScrollBar mockData={mockData} />
            <div className='flex flex-col items-center justify-center my-6 '>
                <div className='w-[163.16px] h-[40px] md:w-[329px] md:h-[86px] bg-greenGradient p-[1.03px] md:p-[2px] rounded-full'>
                    <a href='#' className={`w-[161.1px] h-[37.94px] md:w-[325px] md:h-[82px] 
                    inline-flex items-center 
                    px-4 md:px-9 
                    md:text-[24px] text-[12px] font-semibold text-primary font-sans
                    bg-landingBack rounded-full `}>
                        Go to marketplace
                        <ArrowForwardIcon className='ml-2 md:ml-3 md:text-[24px] text-[15px]' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default MarketPlaceWidget