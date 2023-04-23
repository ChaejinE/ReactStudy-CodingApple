import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(new Array(글제목.length).fill(0));
  let [모달상태, 모달변경] = useState(false);
  let [선택된글제목, 선택된글제목변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {
        글제목.map((element, idx) => {
          return (
            <div className="list" key={idx}>
              <h4 onClick={() => { 모달변경(true); 선택된글제목변경(element); }}>
                {element}
                <span onClick={
                  (e) => {
                    e.stopPropagation();
                    let copy = [...따봉];
                    copy[idx] = copy[idx] + 1
                    따봉변경(copy)
                  }
                } >🏆
                </span> {따봉[idx]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        모달상태 ? <Modal 글제목={선택된글제목} /> : null
      }
    </div >
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목}</h4>
      <p>날짜</p>
      <p>상세설명</p>
    </div>
  )
}
export default App;