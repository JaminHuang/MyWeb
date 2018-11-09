'use strict';
import React,{ PropTypes } from 'react';

const Edu = () => {
    return (
        <div id="education" className="education">
            <div className="container">
                <h3 className="title">教育背景</h3>
                <div className="work-info">
                    <div className="col-md-6 work-left">
                        <h4>2011.9 - 2015.5</h4>
                    </div>
                    <div className="col-md-6 work-right">
                        <h5><span className="glyphicon glyphicon-education"> </span> 浙江树人大学</h5>
                        <p>计算机科学与技术</p>
                        <p>专业描述：计算机科学与技术（软件外包）专业，精通C#语言，必修C语言程序设计、C#面向对象程序设计、软件工程、计算机网络、数据结构、数据库、软件测试、计算机专业英语、服务外包英语、算法分析、Web开发技术等专业知识。</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
};
export default Edu;