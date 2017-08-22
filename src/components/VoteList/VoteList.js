import React, { Component } from 'react';
import './VoteList.css';
import Header from '../Header/Header';


import detail_2 from '../../images/detail_2.png';
import detail_3 from '../../images/detail_3.png';
import detail_4 from '../../images/detail_4.png';

class VoteList extends Component {
  render() {
    return (
      <div className="voteList">
        <Header/>
        <div className="content">
          <div className="search">
            <input type="text" placeholder="搜索名字或编号"/>
            <button></button>
          </div>
          <ul className="time">
            <li><p>已报名</p><p>000</p></li>
            <li><p>投票人次</p><p>000</p></li>
            <li><p>访问量</p><p>000</p></li>
          </ul>

          <div className="join">
            <img src={detail_3}/>
          </div>
          <ul className="number">
            <li><a href="#">最新参赛</a></li>
            <li><a href="#">投票排行</a></li>
            <li><a href="#">同款推荐</a></li>
          </ul>
        </div>
        <div className="footer">
          <div className="competitor">
            <div className="competitor_left">
              <img src={detail_4}/>
            </div>
            <div className="competitor_right">
              <img src={detail_4}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoteList;
