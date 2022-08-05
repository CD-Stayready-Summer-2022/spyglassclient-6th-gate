import axios from "axios";

const PROFILE_BASE_API_URL = 'http://localhost:8080/api/v1/profiles';

export const getAllProfiles = () =>{
    return axios.get(PROFILE_BASE_API_URL);
};

export const createProfile = (profile) => {
    return axios.post(PROFILE_BASE_API_URL, profile);
};

export const getProfileById = (id) => {
    return axios.get(`${PROFILE_BASE_API_URL}/${id}`);
};

export const addGoal = (id, goal) => {
    return axios.put(`${PROFILE_BASE_API_URL}/${id}`, goal);
};

export const deleteProfile = (id) => {
    return axios.delete(`${PROFILE_BASE_API_URL}/${id}`);
};