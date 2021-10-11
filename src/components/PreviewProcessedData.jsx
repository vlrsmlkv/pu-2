// import { useState } from "react";

const PreviewProcessedData = ({data, header, isVisibleButtons}) => {

  // const [tabsNumber, setTabsNumber] = useState(null);
  
  if (!data) return <div className="preview-container"><p className="preview-title">Предпросмотр</p></div>

  return (
    <div className="preview-container">
      <div className="table-content">
        <table>
          <thead className="sticky">
            <tr>
              {header.map((el, index) => <th key={`Table header ${index}`}>{el}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.flat().map((person, index) => <tr key={`Table row ${index}`}>{Object.keys(person).map((key, index) => <td key={`Table data ${index}`}>{([[person[key].value]])}</td>)}</tr>)}
          </tbody>
        </table>
        {isVisibleButtons && 
          <div className="tabs-toggler-panel">
            <button className="preview-button is-active">Свод</button>
            {data.map((el, index) => <button key={`Button ${index}`} className={`preview-button`}>{`Sheet ${index+1}`}</button>)}
        </div>}
      </div>
    </div>
  );
}

export default PreviewProcessedData;