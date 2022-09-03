import "./write.css";
const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/316398/pexels-photo-316398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="writeImg"
      />
      <form className="writeFrom">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-regular fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
