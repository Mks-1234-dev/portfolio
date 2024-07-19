import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div>
          <Link href={gitUrl}>
            <CodeBracketIcon />
          </Link>
          <Link href={previewUrl}>
            <EyeIcon />
          </Link>
        </div>
      </div>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
