//
let callToUnsplashApi = `${unsplashUrl}?collections=9576801&orientation=landscape&count=20&client_id=${unsplashKey}`; // ?client_id=${unsplashKey}&orientation=landscape&query=university&count=20`;

// Call image API for placeholder images
let imgRes = await axios.get(callToUnsplashApi);
/* console.log(imgRes); */
// Create an array with the returned images
const imgArr = imgRes.data;
/*  console.log(imgArr); */
