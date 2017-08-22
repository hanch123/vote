/**
 * Created by YuanDian on 2017/8/21.
 */
import React,{Component} from 'react';
import './Winner.css';

import banner from './../../images/banner.png';
import line from './../../images/line.jpg';

export default class Winner extends Component{
    render(){
        return(
            <div className="winner">
                <div className="top"></div>
                <div className="prize">
                    <ul className="prize_0">
                        <li>
                            <ul>
                                <li>一等奖</li>
                                <li>终身免费定制高级服装</li>
                                <li>共1名</li>
                            </ul>
                            <p>中奖名单：姜浩然&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;131****5907</p>
                        </li>
                    </ul>
                    <ul className="prize_0">
                        <li>
                            <ul>
                                <li>二等奖</li>
                                <li>3999元西服套装一套</li>
                                <li>共1名</li>
                            </ul>
                            <p>中奖名单：Colin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;131****5907</p>
                        </li>
                    </ul>
                    <ul className="prize_0">
                        <li>
                            <ul>
                                <li>三等奖</li>
                                <li>1999元西服套装一套</li>
                                <li>共1名</li>
                            </ul>
                            <p>中奖名单：姜浩然&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;131****5907</p>
                        </li>
                    </ul>
                    <ul className="prize_0">
                        <li>
                            <ul>
                                <li>四等奖</li>
                                <li>499元衬衣一件</li>
                                <li>共3名</li>
                            </ul>
                            <p>中奖名单：姜浩然&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;131****5907</p>
                        </li>
                    </ul>
                    <ul className="prize_0">
                        <li>
                            <ul>
                                <li>五等奖</li>
                                <li>299元衬衣一件</li>
                                <li>共4名</li>
                            </ul>
                            <p>中奖名单：姜浩然&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;131****5907</p>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <p>祝贺以上获奖者</p>
                    <p>获得本次活动的奖品</p>
                    <hr/>
                    <p>请获奖者添加"a"微信(微信号:1418684571)</p>
                    <p>以便我们微信红包小编及时发送红包</p>
                    <p>（如有其他问题也可咨询微信红包小编）</p>

                    <div>
                        <p>本次活动详情请咨询客服</p>
                        <p>4009-899-899</p>
                    </div>
                </div>
            </div>
        );
    };
}

