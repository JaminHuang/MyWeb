'use strict';
import React,{ PropTypes } from 'react';

const Home = () => {
    return (
        <div id="home" className="banner">
            <div className="banner-info">
                <div className="container">
                    <div className="col-md-4 header-left">
                        <img src={require('../../static/img/avatar.jpg')} alt="JaminHuang"/>
                    </div>
                    <div className="col-md-8 header-right">
                        <img src={require('../../static/img/logo.png')} alt="Logo"/>
                        <h6>.NET 软件工程师/全栈/服务器运维</h6>
                        <ul className="address">
                            <li>
                                <ul className="address-text">
                                    <li><b>出生日期</b></li>
                                    <li>1993.11.02</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="address-text">
                                    <li><b>联系电话 </b></li>
                                    <li>18868808315</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="address-text">
                                    <li><b>居住地址 </b></li>
                                    <li>杭州市余杭区保亿丽景山10幢1单元1104室</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="address-text">
                                    <li><b>个人邮箱 </b></li>
                                    <li>huanghzm@126.com</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="address-text">
                                    <li><b>博客地址 </b></li>
                                    <li><a href="http://www.cnblogs.com/huanghzm" target="_blank">http://www.cnblogs.com/huanghzm</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
};
export default Home;