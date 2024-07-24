import Image from "next/image"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    return (
        <footer className='text-white mt-3 mx-5 md:my-10 md:mx-8 md:mt-20'>
            <div className='flex justify-between items-center border-b-[2px] md:border-b-[0.5px] border-gray-300 pb-2 md:pb-6 mb-2 md:mb-4'>
                <div className='flex flex-col'>
                    <a href='#' className='hover:underline text-[14px] mb-1'>
                        Menu
                    </a>
                    <a href='#' className='hover:underline text-[14px] mb-1'>
                        Home page
                    </a>
                    <a href='#' className='hover:underline text-[14px] mb-1'>
                        Marketplace
                    </a>
                </div>
                <div className='flex '>
                    <a href='#' className='hover:text-gray-400 border-[0.37px] md:border-[0.58px] rounded-full p-2 md:p-4 '>
                        <TelegramIcon className="w-[23px] h-[23px] md:w-[35px] md:h-[35px]" />
                    </a>
                    <a href='#' className='hover:text-gray-400 border-[0.37px] md:border-[0.58px] rounded-full p-2 md:p-4 ml-2 md:ml-4'>
                        <WhatsAppIcon className="w-[23px] h-[23px] md:w-[35px] md:h-[35px]" />
                    </a>
                </div>
            </div>
            <div className='hidden md:flex justify-between items-center mb-8'>
                <div className='text-[14px]'>© 2024 — Copyright</div>
                <Image src='/imgs/oasix_logo.png' alt='Oasix Logo' width={101} height={38} className="" />
            </div>
            <div className="md:hidden float-right mb-2">
                <Image src='/imgs/oasix_logo.png' alt='Oasix Logo' width={59} height={22} className="w-[59.19px] h-[22.27px] ml-[34.45px]" />
                <div className='  text-[9.53px] mt-2 float-right' >© 2024 — Copyright</div>
            </div>
        </footer>
    )
}
export default Footer