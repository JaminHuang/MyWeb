'use strict';
import React,{ PropTypes } from 'react';

const Nav = () => {
    return (
        <div className="top-nav wow">
            <div className="container">
                <div className="navbar-header logo">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">导航</button>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="menu">
                        <ul className="nav navbar">
                            <li><a href="#about" className="scroll">基本资料</a></li>
                            <li><a href="#work" className="scroll">工作经历</a></li>
                            <li><a href="#education" className="scroll">教育背景</a></li>
                            <li><a href="#skills" className="scroll">专业技能</a></li>
                            <li><a href="#projects" className="scroll">项目经验</a></li>
                            <li><a href="#contact" className="scroll">联系我们</a></li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;