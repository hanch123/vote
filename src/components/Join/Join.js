/**
 * Created by YuanDian on 2017/8/21.
 */
/**
 * Created by YuanDian on 2017/8/21.
 */
import React,{Component} from 'react';
import Header from '../Header/Header';
import './Join.css';

export default class Join extends Component{
    render(){
        return(
            <div className="winner">
                <Header/>
                <div className="count">
                    <ul className="count_1">
                        <li>
                            <p>已报名</p>
                            <p>000</p>
                        </li>
                        <li>
                            <p>投票人次</p>
                            <p>000</p>
                        </li>
                        <li>
                            <p>访问量</p>
                            <p>000</p>
                        </li>
                    </ul>
                    <p className="entrance">报名处</p>
                </div>
            </div>
        );
    };
}

