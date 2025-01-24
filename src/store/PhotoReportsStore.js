import { makeAutoObservable } from "mobx";

class PhotoReportsStore {
  photoReports = [];

  constructor() {
    makeAutoObservable(this);
  }

  setItems(photoReports) {
    this.photoReports = photoReports;
  }

  addPhotoReportsItem(item) {
    this.photoReports.push(item);
  }
}

export default PhotoReportsStore;
