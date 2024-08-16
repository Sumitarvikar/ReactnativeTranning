import { InitialValues } from "../Interfaces/interface";

const ApiUrl = "https://reqres.in/api/login";

export interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

const login = async (credential: InitialValues): Promise<LoginResponse> => {
  const response = await fetch(ApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return { success: false, message: errorData.error || "Login failed" };
  }
  const data = await response.json();
  return { success: true, token: data.token };
};

export default login;
