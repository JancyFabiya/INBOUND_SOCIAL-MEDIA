// import axios from "axios"

import API from "./axios";

// const API =axios.create({baseURL: "http://localhost:5000"})

export const userChats = (id) => API.get(`/chat/${id}`);