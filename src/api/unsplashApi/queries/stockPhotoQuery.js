import axios from "axios";
import { unsplashKey } from "../../../ignore/keys";

const unsplashUrl = "https://source.unsplash.com/photos/";
const unsplashKey = unsplashKey;

export function stockPhotoQuery() {
  const stockPhotoUrl = `${unsplashUrl}?collections=9576801&orientation=landscape&count=20&client_id=${unsplashKey}`;
  const stockPhotoPromise = new Promise((resolve, reject) => {
    try {
      axios.get(stockPhotoUrl).then((stockPhotoResp) => {
        const imgArr = stockPhotoResp.data.map((photo) => {
          return photo.links.html;
        });

        resolve(imgArr);
      });
    } catch (err) {
      reject(err);
    }
  });

  return stockPhotoPromise;
}
