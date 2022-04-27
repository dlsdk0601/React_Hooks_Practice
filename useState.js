import './App.css';
import React, { useState } from "react";

const content = [
  {
    tab: "Section1",
    content: "I'm the content of the Section1"
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section2"
  }
];

const useTabs = (initialTab, allTabs) => {
  // if(!allTabs || !Array.isArray(allTabs)){
  //   return ;
  // } 여기 살리면 useState가 return 보다 뒤에 있어서 안되다고 오류뜸. 
  // 사실 없어도 됨, allTabs가 배열인지 확인 하는 부분임
  
  
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return{
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {
        content.map( (section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button> //onclick 저렇게 쓰는 이유는, 원래 함수 이름만 적는거지만, 매개변수를 받는 함수를 써야해서 저런식으로 쓴다
        ))
      }
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
