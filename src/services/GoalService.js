import axios from "axios";

const GOAL_BASE_API_URL = 'http://localhost:8080/api/v1/goals';

export const getAllGoals = (token) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };
    return axios.get(GOAL_BASE_API_URL, config);
};

export const getAllProfileGoals = (id, token) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };
    return axios.get(`${GOAL_BASE_API_URL}/profile/${id}/all`, config);
};

export const createGoal = (goal) => {
    return axios.post(GOAL_BASE_API_URL);
};

export const getById = (id, token) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };
    return axios.get(`${GOAL_BASE_API_URL}/${id}`, config);
};

export const deleteGoal = (id, token) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };
    return axios.delete(`${GOAL_BASE_API_URL}/${id}`, config)
}