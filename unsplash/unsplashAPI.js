import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY
  });
  
  export async function getHeroPhoto() {
    try {
      return await unsplash.photos.get({ photoId: "eOpewngf68w" });
    } catch (error) {
      console.log('Something went wrong, Photo could not be fetched!');
    }
  }
  
  export async function getList(page = 1) {
    try {
      return await unsplash.photos.list({ page, perPage: 6 });
    } catch (error) {
      console.log('Something went wrong, Photos could not be fetched!');
    }
  }