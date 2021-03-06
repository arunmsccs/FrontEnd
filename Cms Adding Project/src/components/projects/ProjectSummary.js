import React  from 'react';

const ProjectSummary = ({project}) =>
{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content greey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by the Let Script</p>
            <p className="grey-text">27th April, 11:55 am</p>
            </div>
        </div>
    );
}
export default ProjectSummary;