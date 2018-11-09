'use strict';
import React,{ PropTypes } from 'react';

const Contact = () => {

    function toEmail() {
        let title = document.getElementById('title').value;
        let content = document.getElementById('content').value;
        let isTrue = true;
        if(title.length < 1) {
            alert('主题不能为空');
            isTrue = false;
            document.forms[0].target="rfFrame";
            return;
        }

        if(content.length < 1) {
          alert('内容不能为空');
          isTrue = false;
            document.forms[0].target="rfFrame";
            return;
        }

        if(isTrue) {
            window.location.href = 'mailto:huanghzm@126.com?subject=' + title + '&body=' + content;
        }
    }

    return (
        <div className="welcome contact" id="contact">
            <div className="container">
                <h3 className="title">联系我们</h3>
                <div className="contact-row">
                    <div className="col-md-6 contact-left">
                        <iframe src="https://map.baidu.com/#panoid=09025200121709051129527835K&panotype=street&heading=215.71&pitch=-1.1&l=15&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=09025200121709051129527835K" />
                    </div>
                    <div className="col-md-6 contact-right">
                        <div className="address-left">
                            <p>杭州市余杭区保亿丽景山</p>
                            <p>10幢1单元1104室</p>
                        </div>
                        <div className="address-right">
                            <p>手机: 1500008888</p>
                            <p>邮箱: huang@126.com</p>
                        </div>
                        <div className="clearfix" />
                        <div className="contact-form">
                            <form onSubmit={toEmail}>
                                <input className="title" id="title" type="text" placeholder="主题" required="" />
                                <textarea id="content" placeholder="内容" required="" />
                                <input type="submit" value="提交" />
                            </form>
                            <iframe id="rfFrame" name="rfFrame" src="about:blank" style={{display:'none'}} />
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </div>
    );
};
export default Contact;