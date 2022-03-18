import React from 'react'

function useLongstrConvt(str:string) {
  if(str.length <= 150 ){
      return str;
  }else{
      let newstr:string="";
      for(let i=0;i<150;i++){
          newstr=newstr+str[i];
      }
      newstr=newstr+"...";
      return newstr;
  }
}

export default useLongstrConvt