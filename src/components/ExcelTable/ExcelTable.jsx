import React, { useEffect, useState } from "react";

import classNames from "classnames";

import "./ExcelTable.scss";

const ExcelTable = ({
  tablesData = [],
  headerCells = [],
}) => {
  const [activeTable, setActiveTable] = useState(0);
  useEffect(() => setActiveTable(0), [tablesData]);

  return (
    <div className="table-content">
      <table>
        <thead className="sticky">
          <tr>
            {headerCells.map((column, index) => <th key={`Table header ${index}`}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {tablesData[activeTable]?.data.map((tableData, index) => 
            <tr key={`Table row ${index}`}>
              {Object.keys(tableData).map((key, index) => 
                <td key={`Table data ${index}`}>
                    {([[tableData[key].value]])}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>

      {tablesData.length > 1 &&
        <div>
          {tablesData.map((tableData, index) => 
            <button 
              key={`Button ${tableData.title}`}
              className={classNames("preview-button", activeTable === index && "is-active")}
              onClick={() => setActiveTable(index)}
            >
              {tableData.title}
            </button>)}
        </div>
      }
    </div>
  );
};

export default ExcelTable;