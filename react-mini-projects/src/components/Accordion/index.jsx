import react, { useState } from "react";
import data from "./data";
import "./style.css";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleClick = (getCurrId) => {
    // console.log(getCurrId);
    setSelected(getCurrId === selected ? null : getCurrId); //`
  };

  const handleMultiSelection = (getCurrId) => {
    let copyMultiple = [...multiple];
    let currElementIndex = copyMultiple.indexOf(getCurrId);

    if (currElementIndex === -1) copyMultiple.push(getCurrId);
    else {
      copyMultiple.splice(currElementIndex, 1);
    }

    setMultiple(copyMultiple);
    console.log(multiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        EnableMultiSelection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection && multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : (
                selected == dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
