import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://reqres.in/api';

interface UserSignin {
  token: string;
}

interface UserSignUp {
  token: string;
}
interface UserDto {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserDto[];
  support: {
    url: string;
    text: string;
  };
}

export const authService = {
  login: async (email: string, password: string): Promise<AxiosResponse<UserSignin>> => {
    return axios.post<UserSignin>(`${BASE_URL}/login`, { email, password });
  },

  register: async (email: string, password: string): Promise<AxiosResponse<UserSignUp>> => {
    return axios.post<UserSignUp>(`${BASE_URL}/register`, { email, password });
  },
  getUserList: async (): Promise<AxiosResponse<UserResponse>> => {
    try {
      const response = await axios.get<UserResponse>(`${BASE_URL}/users?delay=0`);
      return response;
    } catch (error) {
      throw new Error('Failed to fetch user list');
    }
  },

  // Other methods...
};
