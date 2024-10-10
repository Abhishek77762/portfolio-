import React from "react";

const Experience = () => {
  const experiences = [
    {
      _id: "1",
      title: "CDGI",
      from: "20-Aug-2022",
      to: "20-Sep-2022",
      description:
        "I completed a one-month internship at cdgi, where I gained experience working in C language .",
    },
    
  ];

  return (
    <>
      <div className="experience_component">
        <h3>EXPERIENCE</h3>
        <div className="experiences_container">
          {experiences.map((element) => {
            return (
              <div key={element._id} className="experience">
                <div className="duration">
                  {element.from} <span>to</span> {element.to}
                </div>
                <div className="organization">
                  <p>{element.title}</p>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
