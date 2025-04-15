import axios from "axios";

const API_KEY = "wxcjwdtrpo13yd4k4";
const API_URL = "https://techhk.aoscdn.com/";




export const enhanceImgApi = async(file) =>{
    try {
        const imageId = await uploadImage(file);
        // console.log("Image ID:", imageId);
        const enhancedImageData = await PollforImage(imageId);
        // console.log("Enhanced Image data:", enhancedImageData);
        return enhancedImageData;
    } catch (error) {
        console.error("Error enhancing image:", error.message);
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    
  const {data} =  await axios.post(`${API_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });
    // console.log('API Response:', data);
    if(!data ?.data?.task_id) {
        throw new Error("Image upload failed");
    }
    console.log("Image upload response:", data);
   return data.data.task_id;

};
const fetchEnhancedImage = async (imageId) => {
    const {data} = await axios.get(`${API_URL}/api/tasks/visual/scale/${imageId}`, {
        headers: {
            "X-API-KEY": API_KEY,
        },
    });
    if(!data || !data.data) {
        throw new Error("Failed to fetch enhanced image");
    }
    // console.log("Enhanced image response:", data);
    return data.data;
};


const PollforImage = async (imageId , retries =0) => {
    const result = await fetchEnhancedImage(imageId);
    if (result.state === 4) {
        console.log("Processing...");
        if(retries >=10){
            throw new Error("Image processing timed out");
        }
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return PollforImage(imageId, retries + 1);
    } 
    console.log("Image processing completed:", result);
    return result;
}


