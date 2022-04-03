import React from "react";
import { RiLink } from "react-icons/ri";
import ButtonLink from "./ButtonLink";

const CardImage = ({ title, subTitle, src, skill, link, numberOfMembers }) => {
  return (
    <div className="card-image relative overflow-hidden rounded-md shadow-md">
      <img
        src={src}
        alt={title}
        className="w-full h-56 rounded-md object-cover"
      />
      <div className="card-modal absolute bg-black bg-opacity-60 w-full h-full rounded-md transition-all duration-300">
        <div className="relative text-white p-3 w-full h-full flex flex-col justify-end">
          <span className="absolute top-2 right-2 text-xs font-medium rounded-xl bg-info px-3.5 py-0.5">
            {subTitle}
          </span>
          <span className="absolute top-2 left-2 text-sm font-medium">
            Team: {numberOfMembers}
          </span>
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm font-medium">{skill}</span>
          {
            skill === "React Native" 
            ? <div className="flex gap-2 mt-2">
                <ButtonLink className="text-info" href={"https://apps.apple.com/vn/app/truy%E1%BB%87n-full-online-offline/id1552356668"}>
                  <img src="https://truyene.com/dist/img/svg/app-store.svg" alt={title} className="w-24 rounded-md"/>
                </ButtonLink>
                <ButtonLink className="text-info" href={"https://play.google.com/store/apps/details?id=com.fff.truyene"}>
                  <img src="https://truyene.com/dist/img/svg/google-play.svg" alt={title} className="w-24 rounded-md"/>
                </ButtonLink>
              </div>
            :
            <ButtonLink className="w-8 h-8 mt-2 bg-info rounded-md" href={link}>
              <RiLink className="text-base" />
            </ButtonLink> 
          }
          
        </div>
      </div>
    </div>
  );
};

export default CardImage;
