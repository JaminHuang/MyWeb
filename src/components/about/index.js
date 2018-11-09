'use strict';
import React,{ PropTypes } from 'react';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container">
                <h3 className="title"> 基本信息</h3>
                <div className="col-md-8 about-left">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人较为开朗，做事有耐心、细心，由于担任组织委员，并且有较好的组织能力。是学院学习部的一员，工作积极认真、诚实，用于尝试与实践，很好的人际关系与团队合作能力。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在接触编程设计之后，就喜欢编程设计与开发，喜欢那种克服BUG的成就感。平常还会利用工作之余，在自己的GitHub摸索学习，自己研究新技术。个人学习刻苦、自觉、自律，具有良好的综合素质。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub地址：<a href="https://github.com/JaminHuang" target="_blank">https://github.com/JaminHuang</a></p>
                </div>
                <div className="col-md-4 about-right">
                    <ul>
                        <h5>荣誉证书</h5>
                        <li><span className="glyphicon glyphicon-menu-right"></span> 浙江省服务外包应用大赛三等奖</li>
                        <li><span className="glyphicon glyphicon-menu-right"></span> 校级软件外包应用大赛一等奖</li>
                        <li><span className="glyphicon glyphicon-menu-right"></span> 校级ACM程序设计大赛三等奖</li>
                        <li><span className="glyphicon glyphicon-menu-right"></span> 校一等奖学金、校级三好学生</li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};
export default About;