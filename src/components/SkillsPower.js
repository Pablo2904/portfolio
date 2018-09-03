import React from 'react';

const SkillsPower = props => {
  return (
    <div className="skill__card">
      <ul>
        {props.skill.map(item => {
          return (
            <li key={item[0]} style={{color: item[2], fontWeight:"bold" }} >
              {item[1]}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default SkillsPower;
