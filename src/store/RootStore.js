import ContactsStore from "@/store/ContactsStore";
import OfficesStore from "@/store/OfficesStore";
import PhotoReportsStore from "@/store/PhotoReportsStore";
import NewsStore from "./NewsStor";

class RootStore {
  constructor() {
    this.newsStore = new NewsStore();
    this.contactsStore = new ContactsStore();
    this.officesStore = new OfficesStore();
    this.photoReportsStore = new PhotoReportsStore();
  }
}

export default RootStore;
