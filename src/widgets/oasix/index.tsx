"use client"

import Image from "next/image"
import SearchBox from "./searchBox"
import AutoScrollBtn from "@/components/autoSlideBtn";

import { SearchCaption, WidgetFlexContainer, SearchCaptionMD } from "./classNames"
import { WidgetBorderContainer, WidgetContentContainer } from "../WidgetClassNames"

const OasixWidget = () => {
    return (
        <div className={WidgetBorderContainer}>
            <div className={WidgetContentContainer}>
                <div className={WidgetFlexContainer}>
                    <Image src='/imgs/oasix_logo.png' alt="oasix logo" width={192} height={72} className="md:w-[192px] md:h-[72px] w-[108.46px] h-[40.67px]" />
                    <p className={SearchCaption}>Smart <br/> property search</p>
                    <p className={SearchCaptionMD}>Smart property search</p>
                    <SearchBox />
                    <AutoScrollBtn />
                </div>
            </div>
        </div>
    )
}

export default OasixWidget
