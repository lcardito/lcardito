import React from "react";
import {TagCloud} from "react-tagcloud";

const SkillsTagCloud = () => {
    const skills = [
        {value: 'Agile', count: 30},
        {value: 'Clean Code', count: 26},
        {value: 'TDD', count: 28},
        {value: 'Kanban', count: 27},
        {value: 'Scrum', count: 26},
        {value: 'DevOps', count: 22},
        {value: 'AWS', count: 23},
        {value: 'Continuous Integration', count: 21},
        {value: 'Continuous Deployment', count: 22},
        {value: 'Continuous Delivery', count: 23},
        {value: 'Java', count: 29},
        {value: 'Javascript', count: 25},
        {value: 'Node.js', count: 25},
        {value: 'Dropwizard', count: 23},
        {value: 'Ansible', count: 22},
        {value: 'GIT', count: 23},
        {value: 'Spring', count: 18},
        {value: 'Play! Framework', count: 17},
        {value: 'Python', count: 20},
        {value: 'Django', count: 19},
        {value: 'Docker', count: 28},
        {value: 'Bash', count: 22},
        {value: 'Maven', count: 26}
    ];

    const customRenderer = (tag, size, color) => (
        <div key={tag.value}
             style={{
                 animation: 'blinker 3s linear infinite',
                 animationDelay: `${Math.random() * 2}s`,
                 fontSize: `${size}em`,
                 margin: '3px',
                 padding: '3px',
                 display: 'inline-block',
                 color: color,
             }}>{tag.value}</div>
    );

    return (<TagCloud minSize={1}
                      maxSize={2}
                      tags={skills}
                      renderer={customRenderer}/>)


};

export default SkillsTagCloud;