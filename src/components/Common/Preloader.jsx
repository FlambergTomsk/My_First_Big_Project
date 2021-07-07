import s from './Preloader.module.css';
import loadingAva from './../../assets/loading.gif';



const Preloader = (props) => {



 



  return (<div>
    
    <img src= {loadingAva} className = {s.loading}/>
    

  </div>)
}


export default Preloader;