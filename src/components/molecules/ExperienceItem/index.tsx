type Experiences = {
    [key: string]: string[];
  };
  
  const experiences: Experiences = {
    "RCTI+": [
      "Created and maintained 5 web services for desktop and mobile streaming platforms.",
      "Built and maintained scalable web applications serving over 2 million users.",
      "Collaborated with cross-functional teams including Product, UI/UX, and Backend to implement features.",
      "Implemented responsive and accessible user interfaces using modern JavaScript frameworks.",
      "Optimized application performance and ensured compatibility across devices and browsers.",
    ],
    "Bank BCA, Bank MUFG, Astra Life": [
      "Developed application programs using C#, PHP and Angular - Javascript.",
      "Designed and implemented web-based database systems, including data structure and schema planning.",
      "Ensured program code quality, stability, and performance during development and testing phases.",
      "Maintained accuracy and clarity of technical documentation for development processes and systems.",
      "Collaborated with QA and support teams to troubleshoot and resolve application issues.",
    ],
    "Bank Commonwealth": [
      "Developed and maintained SharePoint-based internal applications and workflows.",
      "Customized SharePoint sites using web parts, content types, and site templates.",
      "Integrated SharePoint with other enterprise systems to streamline document management.",
      "Provided support and training for end-users on SharePoint functionality.",
      "Collaborated with business units to gather requirements and improve information flow.",
    ],
    "PT. Bank Danamon Indonesia, Tbk.": [
      "Developed and maintained internal business applications to support banking operations.",
      "Worked closely with business analysts and QA teams to ensure application quality.",
      "Performed bug fixing, performance tuning, and feature enhancements on existing systems.",
    ],
    "PT. Matrica IT Management Consulting || Pemprov DKI Jakarta": [
      "Developed web-based information systems for enterprise clients.",
      "Participated in requirement gathering, system design, and user acceptance testing.",
      "Built and deployed responsive front-end interfaces and robust backend modules.",
    ],
  };
  
  type Props = {
    company: string;
  };
  
  const ExperienceItem = ({ company }: Props) => {
    const points = experiences[company];
  
    if (!points) return null;
  
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-sky-700">{company}</h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExperienceItem;
  