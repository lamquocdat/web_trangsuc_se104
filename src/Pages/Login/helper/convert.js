import { resolve } from 'styled-jsx/css';

//image to base 64
export default function convertToBase64(file) {
  return new Promise(function (resolve, reject) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      resolve(fileReader.result);
    };
    fileReader.onerror = function (error) {
      reject(error);
    };
  });
}
