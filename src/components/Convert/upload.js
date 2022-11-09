import Convert from "./convert";
import { useState } from "react";
import "./convert.css";


const Upload = () => {
  const [file, setFile] = useState();
  const [text, setText] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    console.log("sub")
    e.preventDefault();
    if (file) {
		  fileReader.onload = (event) => setText(event.target.result);
		  fileReader.readAsText(file);  
    }
    
  };

  return (
    <aside className="aside-open">
        <form action="">
            <div className="upload-btn">
                <input id="img_upload" name="img_upload" type="file" accept=".csv" onChange={handleOnChange} />
                <button htmlFor="img_upload" type="button" tabIndex="-1" title="Upload">
                    <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m182.461 155.48 49.539-49.539v262.059a24 24 0 0 0 48 0v-262.059l49.539 49.539a24 24 0 1 0 33.941-33.941l-90.509-90.51a24 24 0 0 0 -33.942 0l-90.509 90.51a24 24 0 1 0 33.941 33.941z"/>
                    <path d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z"/>
                    </svg>
                </button>
                <input id="img_name" name="img_name" type="text" placeholder={file ? file.name : "No File Selected"} disabled />
            </div>
            <div className="convert-btn">
              <button 
                id="reset-btn" 
                type="button" 
                onClick={e => handleOnSubmit(e)}
              >
                Convert
              </button>
            </div>
            {text ? <Convert text={text} /> : null}
        </form>
        
    </aside>
  );

}

export default Upload;

/*

<div style={{ textAlign: "center" }}>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          UPLOAD CSV
        </button>
      </form>

      <br />
	  {text ? <Convert text={text} /> : null}
    </div>


*/