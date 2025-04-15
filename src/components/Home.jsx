import React from 'react'
import { useState } from 'react'
import UploadImg from './UploadImg.jsx'
import OrignalImg from './OrignalImg.jsx'
import {enhanceImgApi} from '../utils/enhanceImgApi';


function Home() {
  const [uploadImg, setuploadImg] = useState(null);
  const [enhanceImg, setEnhanceImg] = useState(null);
  const [loading, setloading] = useState(false);

  const uploadImgHandler = async(file) => {
    // console.log(file);
    // console.log(URL.createObjectURL(file));
    setuploadImg(URL.createObjectURL(file));
    setloading(true);
    //call Api
    try {
      const enhancedImgUrl = await enhanceImgApi(file);
      setEnhanceImg(enhancedImgUrl.image);
      setloading(false);
    } catch (error) {
      console.log(error);
      alert("Error enhancing image");
    }

  }
  // console.log(enhanceImg.image)
  return (
    <>
      <UploadImg uploadImgHandler={uploadImgHandler} />
      <OrignalImg loading={loading} enhanceImg={enhanceImg} uploadImg={uploadImg} />
    </>
  )
}

export default Home
