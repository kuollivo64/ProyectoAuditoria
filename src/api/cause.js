import { BASE_PATH, API_VERSION } from "./config";

export function getCausesApi(limit, page) {
  const url = `${BASE_PATH}/${API_VERSION}/get-causes?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteCauseApi(id) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-cause/${id}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function addCauseApi(cause) {
  const url = `${BASE_PATH}/${API_VERSION}/add-cause`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cause),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateCauseApi(id, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-cause/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getCauseApi(urlCause) {
  const url = `${BASE_PATH}/${API_VERSION}/get-cause/${urlCause}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
