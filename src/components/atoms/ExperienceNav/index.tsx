import React, { useState } from "react";
import ExperienceNavItem from "../ExperienceNavItem/index";

const companies = ["RCTI+", "Bank BCA, Bank MUFG, Astra Life", "Bank Commonwealth", "PT. Bank Danamon Indonesia, Tbk.", "PT. Matrica IT Management Consulting || Pemprov DKI Jakarta"];

type Props = {
  onSelect: (company: string) => void;
};

const ExperienceNav = ({ onSelect }: Props) => {
  const [active, setActive] = useState(companies[0]);

  const handleSelect = (company: string) => {
    setActive(company);
    onSelect(company);
  };

  return (
    <nav className="w-full lg:w-auto" aria-label="Work experience navigation">
      {/* Mobile: horizontal scroll */}
      <ul className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap px-2 lg:flex-col lg:overflow-visible lg:whitespace-normal lg:px-0 mt-4 scrollbar-hide">
        {companies.map((company) => (
          <li key={company} className="flex-shrink-0">
            <ExperienceNavItem
              company={company}
              isActive={active === company}
              onClick={() => handleSelect(company)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ExperienceNav;
