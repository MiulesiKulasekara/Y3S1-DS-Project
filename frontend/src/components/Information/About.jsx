import React from "react";
import useRefreshToken from "../../hooks/useRefreshToken";

export default function About() {

  //   const [postImage, setPostImage] = useState( { myFile : ""})

  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   console.log(base64);
  //   setPostImage({ ...postImage, myFile: base64 });
  // };

  const refresh = useRefreshToken();

  
  return (
    <div>
      This is about page
      
        {/* <input
          type="file"
          lable="Image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        /> */}
        <button onClick={()=>refresh()}>button</button>
      
    </div>
  );
}

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }
