import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "Matriculation",
      description:
        "I completed my matriculation at Gyansthali Vidyalaya.",
    },
    {
      _id: "2",
      title: "Intermediate",
      description:
        "I completed my intermediate education from  Rewanchal Public school.",
    },
    {
      _id: "3",
      title: "Graduation",
      description:
        "I am graduating  from Chameli Devi Group of Institution in Computer Science Engineering.",
    },
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
