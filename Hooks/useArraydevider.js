import React from "react";

function useArraydevider(arr = []) {
  let xsarr = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    let temp = [];
    arr[i] != undefined ? temp.push(arr[i]) : null;
    xsarr.push(temp);
  }

  let smarr = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    let temp = [];
    arr[i] != undefined ? temp.push(arr[i]) : null;
    arr[i + 1] != undefined ? temp.push(arr[i + 1]) : null;
    smarr.push(temp);
  }
  let mdarr = [];
  for (let i = 0; i < arr.length; i = i + 3) {
    let temp = [];
    arr[i] != undefined ? temp.push(arr[i]) : null;
    arr[i + 1] != undefined ? temp.push(arr[i + 1]) : null;
    arr[i + 2] != undefined ? temp.push(arr[i + 2]) : null;
    mdarr.push(temp);
  }

  let lgarr = [];
  for (let i = 0; i < arr.length; i = i + 4) {
    let temp = [];
    arr[i] != undefined ? temp.push(arr[i]) : null;
    arr[i + 1] != undefined ? temp.push(arr[i + 1]) : null;
    arr[i + 2] != undefined ? temp.push(arr[i + 2]) : null;
    arr[i + 3] != undefined ? temp.push(arr[i + 3]) : null;
    lgarr.push(temp);
  }
  return { smarr, mdarr, lgarr, xsarr };
}

export default useArraydevider;
