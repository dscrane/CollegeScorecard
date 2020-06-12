import axios from "axios";
// import { unsplashKey } from "../../../ignore/keys";

const unsplashUrl = "https://api.unsplash.com/photos/";
const unsplashParams = "collections=9576801&orientation=landscape&count=16";

export function stockPhotoQuery() {
  const stockPhotoUrl = `${unsplashUrl}?${unsplashParams}&client_id=${UNSPLASHKEY}`;
  console.log(stockPhotoUrl);

  const stockPhotoPromise = new Promise((resolve, reject) => {
    axios
      .get(stockPhotoUrl)
      .then((stockPhotoResp) => {
        console.log("stockPhotoPromise -- success");
        resolve(stockPhotoResp.data);
      })
      .catch(function (error) {
        console.log("stockPhotoPromise -- error");
        reject(error.response);
      });
  });

  return stockPhotoPromise;
}
