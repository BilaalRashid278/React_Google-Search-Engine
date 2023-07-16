import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
    key : "AIzaSyA7K0z0jtXNSV0QMH7LTy2IQdb5y82EUy0",
    cx : "f5d89e5f20d1b4c29"
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params : {...params,...payload}
    })
    return data
};
