import { makeAutoObservable } from "mobx";

class PhotoReportsStore {
  photoReports = [];

  constructor() {
    makeAutoObservable(this);
  }

  setPhotoReports(photoReports) {
    this.photoReports = photoReports;
  }

  addPhotoReportsItem(item) {
    this.photoReports.push(item);
  }
}

export default PhotoReportsStore;
