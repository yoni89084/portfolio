import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import Title from "../components/Title";
import projects from "../components/AllProjects";

const allCategories = [
  "All",
  "React/Next",
  "Three.js",
  "Express/Nest",
  "Django/Flask",
  "Ruby on Rails",
  "Web3",
  "React Native",
];

const ProjectsPage = () => {
  const [categories] = useState(allCategories);
  const [menu, setMenu] = useState(projects);

  const filter = (category) => {
    if (category === "All") {
      setMenu(projects);
      return;
    }

    const filteredData = projects.filter((item) => {
      return item.category.includes(category);
    });
    setMenu(filteredData);
  };

  return (
    <div className="ProjectsPage">
      <div className="title">
        <Title title={"Projects"} span={"projects"} />
      </div>
      <div className="projects-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menu={menu} />
      </div>
    </div>
  );
};

export default ProjectsPage;
