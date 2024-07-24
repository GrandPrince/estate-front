"use client"
import { useRef, useState, useEffect, MutableRefObject } from 'react';
import PCTimeline from '@/widgets/video/PCTimeLine';
import MobileTimeline from '@/widgets/video/MobileTimeLine';

import { WidgetVideoContainer, VideoElement } from './classNames';

interface TimelineProps {
    currentTime: number;
    duration: number;
}

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [videoSrc, setVideoSrc] = useState<string>('/videos/pc.mp4');
    const [isMobileView, setIsMobileView] = useState<boolean>(false);

    useEffect(() => {
        const updateVideoSource = () => {
            const isMobile = window.innerWidth < 800;
            setIsMobileView(isMobile);
            const newVideoSrc = isMobile ? '/videos/mobile.mp4' : '/videos/pc.mp4';
            setVideoSrc(newVideoSrc);
            if (videoRef.current) {
                videoRef.current.load();
            }
        };

        updateVideoSource();

        window.addEventListener('resize', updateVideoSource);

        return () => {
            window.removeEventListener('resize', updateVideoSource);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const updateTime = () => setCurrentTime(video.currentTime);
            video.addEventListener('timeupdate', updateTime);
            return () => {
                video.removeEventListener('timeupdate', updateTime);
            };
        }
    }, []);

    return (
        <div className={WidgetVideoContainer}>
            <video
                ref={videoRef}
                className={VideoElement}
                autoPlay
                muted
                loop
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <PCTimeline currentTime={currentTime} duration={26.823264} />
            {/* {isMobileView ? <MobileTimeline currentTime={currentTime} duration={26.823264} /> : <PCTimeline currentTime={currentTime} duration={26.823264} />} */}
        </div>
    );
};

export default VideoPlayer;
