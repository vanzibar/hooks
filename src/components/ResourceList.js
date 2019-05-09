import React from "react";
import useResources from "../hooks/useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(res => (
        <li className={resource} key={res.id}>
          {res.title}
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;
