import React, { useEffect, useState } from "react";
import "./QuestPage.css";
import * as Survey from "survey-react"
import "survey-react/survey.css"

const QuestPage = () => {
  const [data, setData] = useState([])
  const [count, setCount] = useState(9)
  const [selected, setSelected] = useState('')
  const [nine, setNine] = useState([])
  const [selectedAns, setSelectedAns] = useState("")
  const [selectValue, setSelectValue] = useState("")

  console.log(selected, 'value terselect')
  useEffect(() => {
    fetch("http://localhost:8069/api/partner/get/?session_code=6621")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log("QQ", data)
      });
  }, [])

  const sliceData = data?.customers?.slice(-6)
  // const newArr = sliceData.filter(a => {
  //   return a.suggested_answer_ids !== []
  // });
  // console.log("NEWARR", newArr)
  // console.log("SLICEE", sliceData)
  const A = sliceData?.filter(item => item.matrix_row_ids.length > 0)
  // console.log("AAAA", A)


  const handleChange = (e, index) => {
    const data = {
      index: index,
      value: e.target.value
    }
    console.log('OK', [data])
    if (selected === '') {
      console.log('DATA', data)
      setSelected([data])
    } else {
      if (selected.filter((i) => i.index === data.index)) {
        console.log('DEL', selected.filter((i) => i.index !== data.index))
        const item = selected.filter((i) => i.index !== data.index)
        console.log('SAM')
        const newVal = [...item, data]
        setSelected(newVal)
      }
      console.log('ELSE', data)
    }
    console.log('SELECTED', selected)
    //  else if (selected.filter((i) => i.index === data.index )) {
    //    console.log('DEL', selected.filter((i) => i.index !== data.index))
    //    const item = selected.filter((i) => i.index !== data.index )
    //   console.log('SAM')
    //   const newVal = [...item, data]
    //   setSelected(newVal)
    // } else {
    //   console.log('DIF')
    //   setSelected([...selected, data])
    //  }
  }

  // const output = [, {idAnswer: 10001, ,listAnswer: ,item.suggested_answer_ids}, {idAnswer: 10002}, {idAnser: 10003}]


  // const _renderQuest = () => {
  //   if (data !== [] && data?.customers) {
  //     const item = data?.customers[count]
  //     const { suggested_answer_ids, matrix_row_ids } = item
  //     // const quest = suggested_answer_ids?.value
  //     console.log("cekANS", Object.values(suggested_answer_ids));
  //     return (
  //       <div>
  //         <div>Pertinyinyi</div>
  //         {matrix_row_ids ? matrix_row_ids.map((y, index) => (
  //           <div key={index} style={{ textAlign: 'start', paddingBottom: '20px' }}>
  //             <p key={index}>{index + 1}. {y.value}</p>
  //             {suggested_answer_ids ? suggested_answer_ids.map((x, idx) => (
  //               <div key={idx} style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
  //                 <input key={idx} type="radio" value={x.value} onChange={e => setSelected(e.target.value)} checked={selected === x.value} style={{ backgroundColor: "blue" }} />
  //                 <p>{x.value}</p>
  //               </div>
  //             )) : 'kosong nih'}
  //           </div>
  //         )) : 'kosong'}
  //       </div>
  //     )
  //   }
  // }

 
  // const item = data?customers[count]

  // const _renderAns = () => {
  //   if (data !== [] && data?.customers) {
  //     const item = data?.customers[9]
  //     const survey = new Survey.Model(item)
  //     return (
  //       <div>
  //         <Survey.Survey model={survey} />
  //       </div>
  //     )
  //   }
  // }
  React.useEffect(() => {
    if (data !== [] && data?.customers) {
      const item = data?.customers[count]
      // console.log("ITEMMM", item)
      setNine(item)
    }
  })
  // console.log("SEMBILAN", nine)

  const survey = new Survey.Model(nine)
  return (
    <div className="questionpage" >
      <div className="questionCard" style={{ padding: '20px' }}>
        <div>
          {/* {_renderQuest()} */}
          {/* <Survey.Survey model={survey} /> */}
          <button onClick={() => setCount(count - 1)} className="btn">Back</button>
          <button onClick={() => setCount(count + 1)} className="btn">Next</button>
        </div>
      </div>
    </div >
  );
};

export default QuestPage;
