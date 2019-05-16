const baseURL = "http://localhost:8088";

export const API = {
    getData: function (data) {
        return fetch(`${baseURL}/${data}?_sort=id&_order=desc`)
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
    patchData: function (data, id, obj) {
        return fetch(`${baseURL}/${data}/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json());
    },
    deleteData: function (data, id) {
            return fetch(`${baseURL}/${data}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify()
          })
          .then(response => response.json());
    }
};