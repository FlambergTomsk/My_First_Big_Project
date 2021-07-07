import React from "react";


export const WithSuspense = (Component)=>{
  return (props)=>{
    return <React.Suspense fallback = {<div>Page is Loading.....</div>}>
    <Component {...props}/>
    </React.Suspense>
    };
  }
