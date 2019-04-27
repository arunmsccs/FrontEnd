import React from 'react';

const ProjectDetails = (props) =>
{
    const id=props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">Project Title-{id}</span>
                  <p>lorembkjdhf dfkbds fvkdbsd vdbsvi dsdjbvjds dvdbgi vdsjdviudb sjd idbdvj djdbvudj vcjuvsu cdugvbuj diu gbdjdv d</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                   <div>Posted by the LetScript</div>
                   <div>27th April,11:30 am</div>
                </div>
            </div>
        </div>
    );
}
export default ProjectDetails;