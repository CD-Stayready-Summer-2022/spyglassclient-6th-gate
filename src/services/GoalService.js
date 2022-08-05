import axios from "axios";

const GOAL_BASE_API_URL = 'http://localhost:8080/api/v1/goals';

export const getAllGoals = () => {
    return axios.get(GOAL_BASE_API_URL);
};

export const createGoal = (goal) => {
    return axios.post(GOAL_BASE_API_URL);
};

export const getById = (id) => {
    return axios.get(`${GOAL_BASE_API_URL}/${id}`);
};

export const deleteGoal = (id) => {
    return axios.delete(`${GOAL_BASE_API_URL}/${id}`)
}