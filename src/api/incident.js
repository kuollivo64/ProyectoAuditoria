import { BASE_PATH, API_VERSION } from "./config";

export function getIncidentsApi(limit, page) {
  const url = `${BASE_PATH}/${API_VERSION}/get-incidents?limit=${limit}&page=${page}`;

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

export function deleteIncidentApi(id) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-incident/${id}`;

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

export function addIncidentApi(incident) {
  const url = `${BASE_PATH}/${API_VERSION}/add-incident`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(incident),
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

export function updateIncidentApi(id, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-incident/${id}`;

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

export function getIncidentApi(urlIncident) {
  const url = `${BASE_PATH}/${API_VERSION}/get-incident/${urlIncident}`;

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
