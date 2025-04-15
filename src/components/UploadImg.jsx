import React from 'react'

function UploadImg(props) {
    const Showimagehandler = (e) => {
        // console.log(e.target.files);
        const file = e.target.files[0];
        if(file){
            props.uploadImgHandler(file);
        }
    }
  return (
    <div className='flex flex-col items-center justify-center rounded-lg'>
      <input type="file" id='fileInput' accept="image/*" className='border-2 hover:border-blue-500 cursor-pointer border-dashed border-gray-400 rounded-lg p-4 transition-all  shadow-md ' 
      onChange={Showimagehandler}
      />
    </div>
  )
}

export default UploadImg
