import XLSX from "xlsx";
import { saveAs } from 'file-saver';

const getProcessedData = initialData => initialData
  .map(el => JSON.parse(el)
    .data
    .map(({r1, r2, ils, fzl, izl, ozl}) => ({
          ils: {
            value: ils || "",
            name: "Страховой номер"
          }, 
          fzl: {
            value: fzl || "",
            name: "Фамилия"
          },
          izl: {
            value: izl || "",
            name: "Имя"
          },
          ozl: {
            value: ozl || "",
            name: "Отчество"
          },
          dto1: {
            value: r1[0].dto1 || "",
            name: "Дата увольнения"
          },
          dfr21: {
            value: r2[0].dfr21 || "",
            name: "Дата приема - перевода"
          },
        }))
      )


const createExcelFile = (data, isSplited) => {
    let wb = XLSX.utils.book_new();
    wb.SheetNames.push("Свод");

    const ws_header = ['Страховой номер','Фамилия','Имя','Отчество','Дата увольнения','Дата приема - перевода'];
    const ws_data_set = data.flat().map((person) => Object.keys(person).map(key => ([
        [person[key].value]])));

    wb.Sheets["Свод"] = XLSX.utils.aoa_to_sheet([ws_header, ...ws_data_set]);

    if (isSplited) {
      data.forEach((el, index) => {
        wb.SheetNames.push(`Sheet ${index+1}`)
        const ws_data = el.map((person) => Object.keys(person).map(key => ([
          [person[key].value]])));
        wb.Sheets[`Sheet ${index+1}`] = XLSX.utils.aoa_to_sheet([ws_header, ...ws_data]);
      })
    }

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



export { createExcelFile, downloadFinalXLSX, getProcessedData }


  
