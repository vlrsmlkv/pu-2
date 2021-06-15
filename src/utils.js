import XLSX from "xlsx";
import { saveAs } from 'file-saver';

const createExcelFile = (data) => {
    let wb = XLSX.utils.book_new();
    wb.SheetNames.push("Свод");
    
    const ws_header = ['Страховой номер','Фамилия','Имя','Отчество','Дата увольнения','Дата приема - перевода'];

    const ws_data = data.map((person) => Object.keys(person).map(key => ([
        [person[key].value]])));

    wb.Sheets["Свод"] = XLSX.utils.aoa_to_sheet([ws_header, ...ws_data]);

    return XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
  } 

  const sheetToArrayBuffer = (s) => {
    const buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;

    return buf;    
  }     

  const downloadFinalXLSX = (data) => {
    saveAs(new Blob([sheetToArrayBuffer(data)],{type:"application/octet-stream"}), 'test.xlsx');
  }

  export { createExcelFile, downloadFinalXLSX }