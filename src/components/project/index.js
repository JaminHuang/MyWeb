'use strict';
import React,{ PropTypes } from 'react';

const Project = () => {
    return (
        <div id="projects" className="portfolio">
            <div className="container">
                <h3 className="title wow zoomInLeft animated" data-wow-delay=".5s">项目经验</h3>
                <div className="sap_tabs">
                    <div id="horizontalTab" style={{display:'block',width:'100%',margin:'0px'}}>
                        <ul className="resp-tabs-list wow fadeInUp animated" data-wow-delay=".7s">
                            <li className="resp-tab-item"><span>All</span></li>
                            <li className="resp-tab-item"><span>API</span></li>
                            <li className="resp-tab-item"><span>H5</span></li>
                            <li className="resp-tab-item"><span>前后端(全栈)</span></li>
                        </ul>
                        <div className="clearfix"></div>
                        <div className="resp-tabs-container">
                            <div className="tab-1 resp-tab-content">
                                <div className="tab_img">
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/qb.png")} className="swipebox"
                                               title="这是一个集旅游、1V1聊天、短视频的直播交友平台（已上线），本人主要负责后端API接口开发、Web后端数据平台、数据库管理、服务器运维（搭建和发布）。同时对接腾讯云直播（云存储），云信点对点视频，IM消息、网宿云存储等第三方服务">
                                                <img src={require("../../static/img/qb.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span> 圈播APP</span></h3>
                                                    <p>浙江美蜂网络科技有限公司</p>
                                                    <p>2017.10-至今</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/blj.png")} className="swipebox"
                                               title="这是一个直播交友平台（已上线），本人主要负责后端API接口开发，Web后端数据，服务器运维。同时对接云信IM消息、网宿云存储等第三方服务。">
                                                <img src={require("../../static/img/blj.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span> 菠萝街APP</span></h3>
                                                    <p>浙江帕加网络科技有限公司</p>
                                                    <p>2017.03-2017.10</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/ncjk.png")} className="swipebox"
                                               title="该项目主要采用.NET WebAPI 提供接口，用.NET MVC设计后台网站，由于医院数据的保密性，该项目也与杭州智慧联众有合作对接相应医院信息（排班、医生、科室等）数据。移动端主要用于包含江西省南昌市所有省二级医院的相关手机APP的研发：主要功能为“预约挂号取号”、“查看健康档案”、“疫苗提醒”、“健康宣教”等等。 ">
                                                <img src={require("../../static/img/ncjk.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span>健康南昌APP</span></h3>
                                                    <p>杭州亿川科技有限公司</p>
                                                    <p>2015.09-2016.07</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/Api.png")} className="swipebox"
                                               title="前后端（全栈），根据后台提供的API接口，渲染展现聚悦健康医院相关数据。主要用于医院前大显示器显示医院中具体核心的数据。该项目中主要负责前端H5页面的展示功能，后端.NET API数据接口的设计与实现。">
                                                <img src={require("../../static/img/Api.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span>电视墙 H5</span></h3>
                                                    <p>杭州亿川科技有限公司</p>
                                                    <p>2016.09-2016.11</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/Api.png")} className="swipebox"
                                               title="该项目属于前端项目，前端全部由本人开发，项目主要基于React采用Ant Design（蚂蚁金服）的组件进行开发，统计项目中的相关图表则采用百度EChart组件进行开发设计。">
                                                <img src={require("../../static/img/Api.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span>运营统计 H5</span></h3>
                                                    <p>杭州亿川科技有限公司</p>
                                                    <p>2016.12-2017.01</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="tab-1 resp-tab-content">
                                <div className="tab_img">
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/qb.png")} className="swipebox"
                                               title="这是一个集旅游、直播、短视频的直播交友平台（已上线），本人主要负责后端API接口开发、Web后端数据平台、数据库管理、服务器运维（搭建和发布）。同时对接腾讯云直播（云存储），云信点对点视频，IM消息、网宿云存储等第三方服务">
                                                <img src={require("../../static/img/qb.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span> 圈播APP</span></h3>
                                                    <p>浙江美蜂网络科技有限公司</p>
                                                    <p>2017.10-至今</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/blj.png")} className="swipebox"
                                               title="这是一个直播交友平台（已上线），本人主要负责后端API接口开发，Web后端数据，服务器运维。同时对接云信IM消息、网宿云存储等第三方服务。">
                                                <img src={require("../../static/img/blj.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span> 菠萝街APP</span></h3>
                                                    <p>浙江帕加网络科技有限公司</p>
                                                    <p>2017.03-2017.10</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/ncjk.png")} className="swipebox"
                                               title="该项目主要采用.NET WebAPI 提供接口，用.NET MVC设计后台网站，由于医院数据的保密性，该项目也与杭州智慧联众有合作对接相应医院信息（排班、医生、科室等）数据。移动端主要用于包含江西省南昌市所有省二级医院的相关手机APP的研发：主要功能为“预约挂号取号”、“查看健康档案”、“疫苗提醒”、“健康宣教”等等。 ">
                                                <img src={require("../../static/img/ncjk.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span>健康南昌APP</span></h3>
                                                    <p>杭州亿川科技有限公司</p>
                                                    <p>2015.09-2016.07</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="tab-1 resp-tab-content">
                                <div className="tab_img">
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/Api.png")} className="swipebox"
                                               title="前后端（全栈），根据后台提供的API接口，渲染展现聚悦健康医院相关数据。主要用于医院前大显示器显示医院中具体核心的数据。该项目中主要负责前端H5页面的展示功能，后端.NET API数据接口的设计与实现。">
                                                <img src={require("../../static/img/Api.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span>电视墙 H5</span></h3>
                                                    <p>杭州亿川科技有限公司</p>
                                                    <p>2016.09-2016.11</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/Api.png")} className="swipebox"
                                               title="该项目属于前端项目，前端全部由本人开发，项目主要基于React采用Ant Design（蚂蚁金服）的组件进行开发，统计项目中的相关图表则采用百度EChart组件进行开发设计。">
                                                <img src={require("../../static/img/Api.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span>运营统计 H5</span></h3>
                                                    <p>杭州亿川科技有限公司</p>
                                                    <p>2016.12-2017.01</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="tab-1 resp-tab-content">
                                <div className="tab_img">
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/qb.png")} className="swipebox"
                                               title="这是一个集旅游、直播、短视频的直播交友平台（已上线），本人主要负责后端API接口开发、Web后端数据平台、数据库管理、服务器运维（搭建和发布）。同时对接腾讯云直播（云存储），云信点对点视频，IM消息、网宿云存储等第三方服务">
                                                <img src={require("../../static/img/qb.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span> 圈播APP</span></h3>
                                                    <p>浙江美蜂网络科技有限公司</p>
                                                    <p>2017.10-至今</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 portfolio-grids">
                                        <div className="grid">
                                            <a href={require("../../static/img/blj.png")} className="swipebox"
                                               title="这是一个直播交友平台（已上线），本人主要负责后端API接口开发，Web后端数据，服务器运维。同时对接云信IM消息、网宿云存储等第三方服务。">
                                                <img src={require("../../static/img/blj.png")} alt="" className="img-responsive"/>
                                                <div className="figcaption">
                                                    <h3><span> 菠萝街APP</span></h3>
                                                    <p>浙江帕加网络科技有限公司</p>
                                                    <p>2017.03-2017.10</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Project;