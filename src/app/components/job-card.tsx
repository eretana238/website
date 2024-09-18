import React from "react";

interface JobCardProps {
  jobTitle: string;
  date: string;
  companyName: string;
  location: string;
  points: string[];
  tech: React.ReactNode[];
}

const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  date,
  companyName,
  location,
  points,
  tech,
}) => {
  return (
    <div className="py-8 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">
        {jobTitle} - {companyName}
      </h3>
      <div className="my-2">
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      <div>
        {points.map((point, index) => (
          <p key={index} className=" text-gray-300">
            {point}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <TechTag key={i} tech={t as string} />
        ))}
      </div>
    </div>
  );
};

const TechTag: React.FC<{ tech: string }> = ({ tech }) => {
  return (
    <span className="px-3 py-1 bg-[#19312d] hover:bg-[#274d46] rounded-full text-sm text-[#61e9d2] hover:cursor-pointer transition-all">
      {tech}
    </span>
  );
};

export default JobCard;
