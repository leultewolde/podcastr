import React from "react";
import Image from "next/image";



const PodcastCard = ({
    title, description, imgURL, podcastId
                     }: {title:string, description:string, imgURL:string, podcastId:number}) => {
    return (
        <div className="cursor-pointer">
            <figure className="flex flex-col gap-2">
                <Image
                    src={imgURL}
                    alt={title}
                    height={174}
                    width={174}
                className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"/>
                <div>
                    <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
                    <h2 className="text-12 truncate font-normal capitalize text-white-4">{description}</h2>
                </div>
            </figure>
        </div>
    );
}

export default PodcastCard;
