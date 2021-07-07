import { useState } from 'react';
import s from './Paginator.module.css';


const Paginator = ({ totalCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {

  
  let pagesCount = Math.ceil(totalCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) { pages.push(i) }
  

  let portionCount = Math.ceil(pagesCount/portionSize)

  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber  = (portionNumber-1)*portionSize+1;
  let rigthPortionPageNumber = portionNumber*portionSize;



  return (<div>
    {portionNumber>1&&
    <button onClick = {()=>{setPortionNumber(portionNumber-1)}}>PREV </button> }

    {pages
      .filter(page=>page>=leftPortionPageNumber && page<=rigthPortionPageNumber)
      .map((page)=>{
        return <span className  = {currentPage === page && s.selected}
        onClick={() => { onPageChange(page) }}
      >{page}</span>

        })}
    {portionCount>portionNumber&&
    <button onClick = {()=>{setPortionNumber(portionNumber+1)}}>NEXT </button> }
    </div>)
}


export default Paginator;