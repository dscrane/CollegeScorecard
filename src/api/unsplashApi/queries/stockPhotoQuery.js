import axios from "axios";
import { UNSPLASHKEY } from "../../../../documentation/ignore/keys";

const unsplashUrl = "https://api.unsplash.com/photos/random/";
const unsplashParams = "count=30&orientation=landscape&query=campus";

export function stockPhotoQuery() {
  const stockPhotoUrl = `${unsplashUrl}?${unsplashParams}&client_id=${UNSPLASHKEY}`;
  console.log(stockPhotoUrl);

  const stockPhotoPromise = new Promise((resolve, reject) => {
    axios
      .get(stockPhotoUrl)
      .then((stockPhotoResp) => {
        console.log("stockPhotoPromise -- success");
        resolve(stockPhotoResp);
      })
      .catch(function (error) {
        console.log("stockPhotoPromise -- error");
        console.log(error);
        reject(error.response);
      });
  });

  return stockPhotoPromise;
}
