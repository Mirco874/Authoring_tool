import { saveAs } from 'file-saver';
export const exportJsonFS=(jsonContent,fileName)=>{

const blob=new Blob([jsonContent],{type:'text/plain; charset=utf-8'});
saveAs(blob,`${fileName}.json`)

}