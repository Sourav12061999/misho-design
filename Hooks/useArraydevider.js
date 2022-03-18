import React from "react";

function useArraydevider(arr = []) {
  let smarr = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    let temp = [];
    temp.push(arr[i]);
    arr[i + 1] ?? temp.push(arr[i + 1]);
    smarr.push(temp);
  }

  let mdarr = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    let temp = [];
    temp.push(arr[i]);
    arr[i + 1] ?? temp.push(arr[i + 1]);
    arr[i + 2] ?? temp.push(arr[i + 2]);
    mdarr.push(temp);
  }

  let lgarr = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    let temp = [];
    temp.push(arr[i]);
    arr[i + 1] ?? temp.push(arr[i + 1]);
    arr[i + 2] ?? temp.push(arr[i + 2]);
    arr[i + 3] ?? temp.push(arr[i + 3]);
    lgarr.push(temp);
  }
  return { smarr, mdarr, lgarr };
}

export default useArraydevider;
