import Image from "next/image";
import { fraunces, azeret } from "../fonts";

interface CardProps {
    title: string;
    text?: string;
    borderColor: string;
    shadow?: string;
    comingSoon?: boolean;
    image: string;
    altText: string;
    imageClass: string;
    backgroundColor: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    text,
    comingSoon,
    image,
    altText,
    imageClass,
}) => {
    return (
        <div className=" relative overflow-hidden p-5 ">
            {comingSoon && (
             <div>
                <p>Coming soon</p>
             </div>
            )}
            <div className="relative max-w-[150px] z-10">
                <h1 className={`${fraunces.className}`}>{title}</h1>
                <p className={`${azeret.className}`}>{text}</p>
            </div>
            <div className="absolute right-0 w-1/2 ">
                <Image
                src={image}
                alt={altText}
                className={imageClass}
                fill
                objectFit="cover"
                objectPosition="right bottom"
                />
            </div>
        </div>
    )
}