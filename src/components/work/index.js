'use strict';
import React,{ PropTypes } from 'react';

const Work = () => {
    return (
        <div id="work" className="work">
            <div className="container">
                <h3 className="title">工作经历</h3>
                <div className="work-info">
                    <div className="col-md-6 work-left">
                        <h4>2017.10 - 至今 </h4>
                    </div>
                    <div className="col-md-6 work-right">
                        <h5><span className="glyphicon glyphicon-briefcase"> </span> 浙江美蜂网络科技有限公司</h5>
                        <p>该公司由上一家（浙江帕加网络科技有限公司）的CEO创立，重新组建技术团队，主要运作互联网直播、旅游相关行业，线上产品：圈播 以旅游、社交、直播为主业。由于技术人数不多，所承担的职责比较全面。</p>
                        <p>1.主要负责C# .NET、核心业务逻辑开发、WebAPI接口开发，同时还进行相应的Web后台管理网站的制作、数据库维护、服务器运维（搭建与发布）</p>
                        <p>2.数据库采用SQL Server、MongoDB、Redis、Python等提供数据服务支持</p>
                        <p>3.对接 腾讯云直播（云存储）、云信点对点视频、IM消息收发、网宿云存储等第三方服务</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="work-info">
                    <div className="col-md-6 work-right work-right2">
                        <h4>2017.03 - 2017.10 </h4>
                    </div>
                    <div className="col-md-6 work-left work-left2">
                        <h5>浙江帕加网络科技有限公司<span className="glyphicon glyphicon-briefcase"> </span> </h5>
                        <p style={{float:'inherit'}}>工作一年左右的时间：公司主营互联网直播行业相关的业务模块。主要负责C# .NET、核心业务逻辑开发、WebAPI接口开发，同时还进行相应的Web后台管理网站的制作</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="work-info">
                    <div className="col-md-6 work-left">
                        <h4>2015.04 - 2017.02 </h4>
                    </div>
                    <div className="col-md-6 work-right">
                        <h5><span className="glyphicon glyphicon-briefcase"> </span> 杭州亿川科技有限公司</h5>
                        <p>工作两年左右的时间：公司设计的项目都是医疗行业相关的业务模块（移动端和Web端）</p>
                        <p>1.主要负责C# .NET、核心业务逻辑开发、WebAPI接口开发，同时还进行相应的Web后台管理网站的制作</p>
                        <p>2.在最后半年内，主要负责前端（html5+css+javascript）页面的实现（采用React），后端采用.NET WebAPI提供数据支持</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
};
export default Work;