import axios from "axios";
// import { unsplashKey } from "../../../ignore/keys";
export function stockPhotoQuery(args) {
  const { unsplashUrl, unsplashParams, unsplashKey } = args;

  const stockPhotoUrl = `${unsplashUrl}?${unsplashParams}&client_id=${unsplashKey}`;
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
