import "./singlePost.css";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/13417195/pexels-photo-13417195.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          this is my title
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Yaser</b>
          </span>
          <span className="singlePostDate">1hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ullam quae veniam enim, saepe tempore omnis voluptas ipsam labore
          eveniet quibusdam culpa, ut, ipsum impedit. Perspiciatis inventore
          quae unde reiciendis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis ullam quae veniam enim, saepe tempore
          omnis voluptas ipsam labore eveniet quibusdam culpa, ut, ipsum
          impedit. Perspiciatis inventore quae unde reiciendis? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Perferendis ullam quae
          veniam enim, saepe tempore omnis voluptas ipsam labore eveniet
          quibusdam culpa, ut, ipsum impedit. Perspiciatis inventore quae unde
          reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis ullam quae veniam enim, saepe tempore omnis voluptas ipsam
          labore eveniet quibusdam culpa, ut, ipsum impedit. Perspiciatis
          inventore quae unde reiciendis?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
