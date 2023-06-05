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
      return await unsplash.photos.list({ page, perPage: 9 });
    } catch (error) {
      console.log('Something went wrong, Photos could not be fetched!');
    }
  }
  
  export async function search(query,page = 1) {
    try {
      return await unsplash.search.getPhotos({query: query, page: page});
    } catch (error) {
      console.log('Something went wrong, Photos could not be fetched!');
    }
  }
  
  export async function download(location) {
    try {
      return await unsplash.photos.trackDownload({downloadLocation: location});
    } catch (error) {
      console.log('Something went wrong, Photo could not be downloaded!');
    }
  }