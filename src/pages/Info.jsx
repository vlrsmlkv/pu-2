import React from "react";

import { File, Info as Infoicon, Upload, BookOpen} from 'react-feather';

import InfoBlock from "../components/InfoBlock";

const Info = () => {

  return (
    <div className="info-page-container">

      <InfoBlock
        icon={<Infoicon className="info-page-icon"/>}
        header={"About"}
        infoText={"The pu-2 application is a tool developed to help in processing data prepared by the Client in the form of pu-2 forms."}
      />

      <InfoBlock
        icon={<File className="info-page-icon"/>}
        header={"Pu-2 form"}
        infoText={"PU-2 form refers to personalized accounting documents and contains information about the hiring and dismissal of employees."}
      />

      <InfoBlock
        icon={<BookOpen className="info-page-icon"/>}
        header={"Manual"}
      >
        <ul className="unordered">
          <li><b>Step 1.</b> Upload files.
            <ul className="unordered">
              <li>In case you want each processed file to be displayed on a separate excel sheet, tick the "Show each file as a separate sheet" checkbox.</li>
            </ul>
          </li>
          <li><b>Step 2.</b> Click on "Show preview" button if needed.</li>
          <li><b>Step 3.</b> Download .xlsx file with a list of employees and information about them.</li>
        </ul>
      </InfoBlock>

      <InfoBlock
        icon={<Upload className="info-page-icon"/>}
        header={"Upload file requirements"}
      >
        <ul> 
          <li>Only .txt files will be accepted.</li>
          <li>Files cannot be password protected.</li>
          <li>Required fields of pu-2 form: 
              <ul>
                <li>ils (Insurance number)</li> 
                <li>fzl (Last name)</li> 
                <li>izl (First name)</li>
                <li>ozl (Patronymic)</li>
                <li>dto1 (Dismissal date)</li>
                <li>dfr21 (Hiring date).</li>
              </ul>
          </li>
        </ul>
      </InfoBlock>
    </div>
  );
}

export default Info;