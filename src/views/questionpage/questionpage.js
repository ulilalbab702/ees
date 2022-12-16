import React, { useEffect, useState } from "react";
import "./questionpage.css";
import data from "../../data.json"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


const Questionpage = () => {
  const [selected, setSelected] = useState('')
  const [value, setValue] = useState('')
  // console.log(data.customers[0].matrix_row_ids)

  const handleSave = (event) => {
    setValue(event.target.value);
    // console.log("VVVVV", value)
  }
  
  useEffect(() => {
    console.log("VALUEE", value)
  }, [value])
  


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
  }

  return (
    <div className="questionPage">
      <p>Question Page</p>
      <div>
        <div className="quest">
          {/* {data.customers[0].matrix_row_ids.map((itemX, index) => {
            return (
              <React.Fragment key={index}>
                <p>{itemX.value}</p>
                {
                  itemX.suggested_answer_ids.map((quest, idy) => {
                    console.log(idy)
                    return (
                      <div key={idy}>
                        <input type="radio" name={`quest_${index}_${idy}`} value={quest.id} onChange={hand} checked={value} />
                        <p>{quest.value}</p>
                      </div>
                    )
                  })
                }
              </React.Fragment>
            )
          })} */}
          {data.customers[0].matrix_row_ids.map((itemX, index) => {
            console.log("ITEMXXX", itemX)
            return (
              <React.Fragment key={index}>
                <FormControl>
                  <p>{itemX.value}</p>
                  <RadioGroup
                    // aria-labelledby={`quest_${index}_${idy}`}
                    name={`quest_${index}_${itemX.id}`}
                    value={value}
                    onChange={handleSave}
                  >
                    {itemX.suggested_answer_ids.map((quest, idy) => {
                      console.log("QUESTT", quest)
                      return (
                        <FormControlLabel value={quest.id} control={<Radio />} label={quest.value} />
                      )
                    })}
                  </RadioGroup>
                </FormControl>
              </React.Fragment>
            )
          })}

          {/* <FormControl>
            <RadioGroup
              // aria-labelledby={`quest_${index}_${idy}`}
              name="tes"
              value={value}
              onChange={handleSave}
            >
            <FormControlLabel value="jaler" control={<Radio />} label="Jaler" />
            <FormControlLabel value="wadon" control={<Radio />} label="Wadon" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <RadioGroup
              // aria-labelledby={`quest_${index}_${idy}`}
              name="tes2"
              value={value}
              onChange={handleSave}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl> */}


          {/* {question.map((val) => ( */}
          {/* <div className="text">
                <p className="number">{val.id}</p>
                <p>{val.question}</p>
              </div>
              <div className="option">
                <div className="stronglyDisagree">
                  <input type="radio" id="specifyColor" name="pertanyaan" value={val.option1} onChange={handleChange} checked={selected} />
                  <label>{val.option1}</label>
                </div>
                <div className="Disagree">
                  <input type="radio" id="specifyColor" name="pertanyaan" value={val.option2} onChange={handleChange} checked={selected} />
                  <label>{val.option2}</label>
                </div>
                <div className="Neither">
                  <input type="radio" id="specifyColor" name="pertanyaan" value={val.option3} onChange={handleChange} checked={selected} />
                  <label>{val.option3}</label>
                </div>
                <div className="Agree">
                  <input type="radio" id="specifyColor" name="pertanyaan" value={val.option4} onChange={handleChange} checked={selected} />
                  <label>{val.option4}</label>
                </div>
                <div className="stronglyAgree">
                  <input type="radio" id="specifyColor" name="pertanyaan" value={val.option5} onChange={handleChange} checked={selected} />
                  <label>{val.option5}</label>
                </div>
              </div> */}
          {/* </>
          ))} */}
        </div>
      </div>
      <div className="gapBtn">
        <button className="button" onClick={() => (window.location.href = "/Form")}>Back</button>
        <button className="button" onClick={() => (window.location.href = "/questionpage2")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Questionpage;
