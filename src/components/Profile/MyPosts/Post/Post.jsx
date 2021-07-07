import s from './Post.module.css';


function Post(props) {
  return (
    <div className={s.post}>
      <img src={props.image} />
      {props.message}
      <div> {props.likeCounter}</div>
    </div>
  )
}
export default Post;