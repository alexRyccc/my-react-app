import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';  // 引入Sidebar组件
import sampleCharacters from '../sampleCharacter.js';  // 引入sampleCharacters数据
import { FaRegClock } from 'react-icons/fa';  // 引入react-icons中的图标
import './history.css';

const History = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);  // 当前选中的角色

  useEffect(() => {
    // 检查 sessionStorage 中是否有 'historyPageRefreshed' 标志
    const hasRefreshed = sessionStorage.getItem('historyPageRefreshed');
    if (!hasRefreshed || hasRefreshed === 'false') {
      // 如果没有刷新过，刷新页面并设置标志
      sessionStorage.setItem('historyPageRefreshed', 'true');
      window.location.reload();
    }
  }, []);

  // 点击人物，更新选中的角色
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="history-container">
      <Sidebar />  {/* 侧边栏展示 */}
      <div className="character-selection">
        {sampleCharacters.map((character, index) => (
          <div
            key={index}
            className={`character-card ${selectedCharacter?.name === character.name ? 'selected' : ''}`}
            onClick={() => handleCharacterClick(character)}
          >
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>

      {selectedCharacter && (
        <div className="selected-character">
          <h2>{selectedCharacter.name} 的时间轴</h2>
          <div className="timeline-container">
            <div className="timeline">
              <div className="vertical-line"></div> {/* 添加蓝色竖线 */}
              {selectedCharacter.history.map((event, index) => (
                <div key={index} className="timeline-event">
                  <FaRegClock className="timeline-icon" /> {/* 添加时钟图标 */}
                  <div className="timeline-date">{event.time}</div>
                  <div className="timeline-content">
                    <p>{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
