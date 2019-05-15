const baseURL = "http://localhost:8088";

export const API = {
    getData: function (data) {
        return fetch(`${baseURL}/${data}`)
        .then(response => response.json());
    },
    postData: function (data, obj) {
        return fetch(`${baseURL}/${data}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json());
    },
    patchData: function (data, obj) {
        return fetch(`${baseURL}/${data}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json());
    }
};