import React, { useState } from 'react';
import './Home.css';
import maleOldImage from './images/male-old.png';
import maleYoungImage from './images/male-young.png';
import femaleOldImage from './images/female-old.png';
import femaleYoungImage from './images/female-young.png';
import sampleCharacters from '../sampleCharacter';
import backgroundImage from './images/background.jpg'; 
import Sidebar from '../Sidebar';

const getCharacterImage = (character) => {
  if (character.gender === 'male') {
    return character.age > 40 ? maleOldImage : maleYoungImage;
  } else {
    return character.age > 40 ? femaleOldImage : femaleYoungImage;
  }
};

const getCharacterClass = (character) => {
  if (character.gender === 'male') {
    return character.age > 40 ? 'male-old' : 'male-young';
  } else {
    return character.age > 40 ? 'female-old' : 'female-young';
  }
};

const skillTranslations = {
  creditRating: "信用评级",
  accounting: "会计",
  anthropology: "人类学",
  appraisal: "估价",
  archaeology: "考古学",
  climb: "攀爬",
  disguise: "乔装",
  dodge: "闪避",
  driveAuto: "汽车驾驶",
  electricalRepair: "电气维修",
  firstAid: "急救",
  history: "历史",
  jump: "跳跃",
  nativeLanguage: "母语(英文)",
  law: "法律",
  libraryUse: "图书馆使用",
  listen: "聆听",
  locksmith: "锁匠",
  mechanicalRepair: "机械维修",
  medicine: "医学",
  naturalWorld: "博物学",
  navigate: "导航",
  occult: "神秘学",
  operateHeavyMachinery: "操作重型机械",
  psychoanalysis: "精神分析",
  psychology: "心理学",
  ride: "骑术",
  sleightOfHand: "妙手",
  spotHidden: "侦查",
  stealth: "潜行",
  swim: "游泳",
  throw: "投掷",
  track: "追踪",
  charm: "魅惑",
  intimidate: "恐吓",
  fastTalk: "话术",
  persuade: "说服",
  artCraft1: "技艺:表演",
  artCraft2: "技艺:美术",
  artCraft3: "技艺:摄影",
  artCraft4: "技艺:伪造文书",
  artCraft5: "技艺:写作",
  artCraft6: "技艺:书法",
  artCraft7: "技艺:音乐",
  artCraft8: "技艺:厨艺",
  artCraft9: "技艺:理发",
  artCraft10: "技艺:木匠",
  artCraft11: "技艺:舞蹈",
  artCraft12: "技艺:莫里斯舞蹈",
  artCraft13: "技艺:歌剧演唱",
  artCraft14: "技艺:粉刷/油漆工",
  artCraft15: "技艺:制陶",
  artCraft16: "技艺:雕塑",
  artCraft17: "技艺:耕作",
  artCraft18: "技艺:制图",
  artCraft19: "技艺:打字",
  artCraft20: "技艺:速记",
  science1: "科学:地质学",
  science2: "科学:化学",
  science3: "科学:生物学",
  science4: "科学:数学",
  science5: "科学:天文学",
  science6: "科学:物理学",
  science7: "科学:药学",
  science8: "科学:植物学",
  science9: "科学:动物学",
  science10: "科学:密码学",
  science11: "科学:工程学",
  science12: "科学:气象学",
  science13: "科学:司法科学",
  science14: "科学:鉴证",
  cthulhuMythos: "克苏鲁神话",
  survival: "生存",
  fighting1: "格斗:斗殴",
  fighting2: "格斗:鞭子",
  fighting3: "格斗:电锯",
  fighting4: "格斗:斧",
  fighting5: "格斗:剑",
  fighting6: "格斗:绞索",
  fighting7: "格斗:链枷",
  fighting8: "格斗:矛",
  firearms1: "射击:步枪/霰弹枪",
  firearms2: "射击:冲锋枪",
  firearms3: "射击:弓",
  firearms4: "射击:火焰喷射器",
  firearms5: "射击:机枪",
  firearms6: "射击:手枪",
  firearms7: "射击:重武器",
  language1: "中文",
  language2: "日语",
  language3: "韩语",
  language4: "俄语",
  language5: "西班牙语",
  language6: "法语",
  language7: "德语",
  language8: "意大利语",
  language9: "葡萄牙语",
  language10: "阿拉伯语",
  language11: "拉丁语",
  language11: "北非语",
  demolitions: "爆破",
  hypnosis: "催眠",
  lipReading: "读唇",
  artillery: "炮术",
  diving: "潜水",
  animalHandling: "驯兽",
  custom1: "自定义1",
  custom2: "自定义2",
  custom3: "自定义3",
  custom4: "自定义4",
  custom5: "自定义5"
};


const Home = () => {
  
  const [rotation, setRotation] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  const characters = sampleCharacters; // Use sampleCharacters array

  const handleScroll = (event) => {
    setRotation(rotation + event.deltaY * 0.2);
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleClose = () => {
    setSelectedCharacter(null);
  };

  const handleMouseEnter = (character, index) => {
    setHoveredCharacter(character);
    setRotation(-index * (360 / characters.length));
  };

  const handleMouseLeave = () => {
    setHoveredCharacter(null);
  };

  return (
    <div>
    <Sidebar />
    <div className="character-container" onWheel={handleScroll} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="carousel">
        {characters.map((character, index) => {
          const angle = (index / characters.length) * 360;
          const transform = `rotateY(${angle + rotation}deg) translateZ(400px)`;
          const zIndex = hoveredCharacter === character ? 10 : 1;
          const characterClass = getCharacterClass(character);

          return (
            <div
              key={index}
              className={`character-card ${characterClass} ${hoveredCharacter === character ? 'hovered' : ''}`}
              style={{ transform, zIndex }}
              onClick={() => handleCardClick(character)}
              onMouseEnter={() => handleMouseEnter(character, index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={getCharacterImage(character)} alt={`${character.name}'s image`} className="character-image" />
              <div className="character-info">
                <h3>{character.name}</h3>
                <p>年龄: {character.age}</p>
                <p>职业: {character.profession}</p>
                <p>性别: {character.gender}</p>
                <p>现居地: {character.currentResidence}</p>
                <p>出生地: {character.birthplace}</p>
                {/* <div className="character-attributes">
                  <table className="attribute-table">
                    <tbody>
                      <tr><th>力量</th><td>{character.str}</td><th>敏捷</th><td>{character.dex}</td><th>智力</th><td>{character.int}</td></tr>
                      <tr><th>体质</th><td>{character.con}</td><th>外貌</th><td>{character.app}</td><th>意志</th><td>{character.pow}</td></tr>
                      <tr><th>体型</th><td>{character.siz}</td><th>教育</th><td>{character.edu}</td><th>生命值</th><td>{character.hp}</td></tr>
                      <tr><th>魔法值</th><td>{character.mp}</td><th>理智值</th><td>{character.san}</td><th>幸运值</th><td>{character.luck}</td></tr>
                    </tbody>
                  </table>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>


      {selectedCharacter && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCharacter.name}</h2>
            <img src={getCharacterImage(selectedCharacter)} alt={`${selectedCharacter.name}'s image`} className="character-avatar" />
            <div className="character-details">
              <h3>基本信息</h3>
              <div className="character-tables">
                <table className="character-table">
                  <tbody>
                    <tr><th>姓名</th><td>{selectedCharacter.name}</td><th>年龄</th><td>{selectedCharacter.age}</td></tr>
                    <tr><th>职业</th><td>{selectedCharacter.profession}</td><th>性别</th><td>{selectedCharacter.gender}</td></tr>
                    <tr><th>现居地</th><td>{selectedCharacter.currentResidence}</td><th>出生地</th><td>{selectedCharacter.birthplace}</td></tr>
                  </tbody>
                </table>
                <table className="character-table">
                  <tbody>
                    <tr><th>力量</th><td>{selectedCharacter.str}</td><th>敏捷</th><td>{selectedCharacter.dex}</td><th>智力</th><td>{selectedCharacter.int}</td></tr>
                    <tr><th>体质</th><td>{selectedCharacter.con}</td><th>外貌</th><td>{selectedCharacter.app}</td><th>意志</th><td>{selectedCharacter.pow}</td></tr>
                    <tr><th>体型</th><td>{selectedCharacter.siz}</td><th>教育</th><td>{selectedCharacter.edu}</td><th>幸运值</th><td>{selectedCharacter.luck}</td></tr>
                    <tr><th>生命值</th><td>{selectedCharacter.hp}</td><th>魔法值</th><td>{selectedCharacter.mp}</td><th>理智值</th><td>{selectedCharacter.san}</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="section-separator"></div>
              <h3>技能列表</h3>
              <table className="skills-table">
                <thead>
                  <tr>
                    <th>技能名称</th>
                    <th>初始值</th>
                    <th>现有值</th>
                    <th>技能名称</th>
                    <th>初始值</th>
                    <th>现有值</th>
                    <th>技能名称</th>
                    <th>初始值</th>
                    <th>现有值</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(selectedCharacter.skills).reduce((rows, [skill, values], index, array) => {
                    if (index % 3 === 0) {
                      rows.push(array.slice(index, index + 3));
                    }
                    return rows;
                  }, []).map((skillSet, rowIndex) => (
                    <tr key={rowIndex}>
                      {skillSet.map(([skill, values]) => (
                        <React.Fragment key={skill}>
                          <td>{skillTranslations[skill]}</td>
                          <td>{values.initial}</td>
                          <td>{values.current}</td>
                        </React.Fragment>
                      ))}
                      {skillSet.length < 3 && Array.from({ length: 3 - skillSet.length }).map((_, i) => (
                        <React.Fragment key={`empty-${i}`}>
                          <td></td>
                          <td></td>
                          <td></td>
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="section-separator"></div>
              <h3>背景故事</h3>
              <table className="character-table full-width">
                <tbody>
                  <tr><th>个人描述</th><td>{selectedCharacter.background.personalDescription}</td></tr>
                  <tr><th>思想/信仰</th><td>{selectedCharacter.background.ideologyBeliefs}</td></tr>
                  <tr><th>重要人物</th><td>{selectedCharacter.background.significantPeople}</td></tr>
                  <tr><th>重要地址</th><td>{selectedCharacter.background.importantLocations}</td></tr>
                  <tr><th>贵重物品</th><td>{selectedCharacter.background.treasuredPossessions}</td></tr>
                </tbody>
              </table>
              <div className="section-separator"></div>
              <h3>随身物品</h3>
              <table className="character-table">
                <tbody>
                  <tr><th>物品1</th><td>描述1</td></tr>
                  <tr><th>物品2</th><td>描述2</td></tr>
                  <tr><th>物品3</th><td>描述3</td></tr>
                </tbody>
              </table>
              <div className="section-separator"></div>
              <h3>资财</h3>
              <table className="character-table">
                <tbody>
                  <tr><th>现金</th><td>18.00</td></tr>
                  <tr><th>资产</th><td>450.00</td></tr>
                  <tr><th>消费水平</th><td>10.00</td></tr>
                </tbody>
              </table>
            </div>
            <button onClick={handleClose}>关闭</button>
          </div>
        </div>
        
      )}
       </div>
    </div>
    
  );
 
    

};

export default Home;