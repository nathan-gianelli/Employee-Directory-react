import axios from "axios";

const RANDOMUSER_URL = "https://randomuser.me/api/?results="

export default {
  search: (query) => {
    return axios.get(RANDOMUSER_URL + query);
  }
}