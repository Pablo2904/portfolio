import React from 'react';

const Skills = props => {
  return (
    <div className="skill__card">
      <ul className="pl-3 ">
        {props.skill.map(item => {
          return (
            <li key={item[0]} >
              {item[0]}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Skills;
