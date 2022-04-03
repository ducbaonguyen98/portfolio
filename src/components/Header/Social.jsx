import React from "react";
import {
  RiFacebookCircleLine,
  RiPhoneLine,
  RiGithubLine,
} from "react-icons/ri";

import ButtonLink from "../Tab/ButtonLink";

const Social = () => {
  return (
    <div className="absolute left-0 top-0">
      <div className="text-xl space-y-4">
        <ButtonLink href="https://www.facebook.com/NDBBB/" rel="noreferel">
          <RiFacebookCircleLine/>
        </ButtonLink>
        <ButtonLink href="tel:0822371098" rel="noreferel">
          <RiPhoneLine/>
        </ButtonLink>
        <ButtonLink href="https://github.com/ducbaonguyen98" rel="noreferel">
          <RiGithubLine/>
        </ButtonLink> 
      </div>
    </div>
  );
};

export default Social;
