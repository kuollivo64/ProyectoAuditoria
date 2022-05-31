import { BASE_PATH, API_VERSION } from "./config";

export function getCriticalitysApi(limit, page) {
  const url = `${BASE_PATH}/${API_VERSION}/get-criticalitys?limit=${limit}&page=${page}`;

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

export function deleteCriticalityApi(id) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-criticality/${id}`;

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

export function addCriticalityApi(criticality) {
  const url = `${BASE_PATH}/${API_VERSION}/add-criticality`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(criticality),
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

export function updateCriticalityApi(id, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-criticality/${id}`;

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

export function getCriticalityApi(urlCriticality) {
  const url = `${BASE_PATH}/${API_VERSION}/get-criticality/${urlCriticality}`;

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
