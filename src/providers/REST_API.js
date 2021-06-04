import axios from "axios";
axios.defaults.headers.common["Authorization"] = `Token 491420064a24034ddce326f9e74d431403a5c171e40c462d67c1053f4404662e`
axios.defaults.baseURL = "https://dev.api.check-in.in"
const make_API_call = (req_method, path, data = {}) => {
  switch (req_method) {
    case "get":
      return axios
        .get(path)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });

    case "post":
      return axios
        .post(path, data)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });

    case "put":
      return axios
        .put(path, data)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });

    case "delete":
      return axios
        .delete(path)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });
  }
};

export default make_API_call;
