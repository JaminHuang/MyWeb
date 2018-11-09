'use strict';
import React,{ PropTypes } from 'react';

const Skill = () => {
    return (
        <div id="skills" className="skills">
            <div className="container">
                <h3 className="title">专业技能</h3>
                <div className="skills-info">
                    <div className="col-md-6 bar-grids">
                        <h6>C#、.NET <span> 90% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width:'90%'}}>
                            </div>
                        </div>
                        <h6>MySql、Sql <span> 80% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width:'80%'}}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 bar-grids">
                        <h6>Redis、MongoDB <span> 80% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width:'80%'}}>
                            </div>
                        </div>
                        <h6>HTML、CSS、Javascript、React<span> 60% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width:'60%'}}>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
};
export default Skill;