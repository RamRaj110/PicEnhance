import React from 'react'
import Loading from './Loading';

function OriginalImg(props) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = props.enhanceImg;
        link.download = 'enhanced-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='flex flex-row flex-wrap items-center justify-center mt-4 gap-8'>
            {/* Original preview image */}
            <div className='flex flex-col max-w-[350px] max-h-[300px] border-2  mt-4 rounded-lg shadow-md overflow-hidden'>
                <h2 className='w-full text-center border-b-2 p-1 bg-gray-600 rounded-t-md font-semibold text-white'>Original Image</h2>
                {props.uploadImg ? (
                    <img 
                        src={props.uploadImg} 
                        alt="Original" 
                        className='max-h-[256px] w-auto object-contain mx-auto' 
                    />
                ) : (
                    <div className='flex items-center justify-center h-[250px] w-60'>
                        No image selected
                    </div>
                )}
            </div>

            {/* Enhance preview image */}
            <div className='flex flex-col items-center max-w-[300px] border-2  mt-4 rounded-lg shadow-md overflow-hidden '>
                <p className='w-full text-center border-b-2 p-1 bg-gray-600 rounded-t-md font-semibold text-white'>Enhance Image</p>

                {props.error ? (
                    <div className='flex items-center justify-center h-[250px] w-60 text-red-500 font-semibold'>
                        {props.error}
                    </div>
                ) : props.enhanceImg && !props.loading ? (
                    <>
                        <img 
                            src={props.enhanceImg} 
                            alt="Enhanced" 
                            className='max-h-[256px] w-auto object-contain mx-auto' 
                        />
                        <button 
                            onClick={handleDownload}
                            className='mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 my-1 px-3 rounded'
                        >
                            Download Image
                        </button>
                    </>
                ) : props.loading ? (
                    <div className='flex items-center justify-center h-[250px] w-60'>
                        <Loading />
                    </div>
                ) : (
                    <div className='flex items-center justify-center h-[250px] w-60'>
                        No enhanced image available
                    </div>
                )}
            </div>
        </div>
    );
}

export default OriginalImg;
