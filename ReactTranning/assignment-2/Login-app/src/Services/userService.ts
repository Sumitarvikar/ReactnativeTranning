import { Iuser, IuserListApiResponse } from "../Interfaces/interface";

export const fetchUsers = (): Promise<Iuser[] | null> => {
  return fetch("https://reqres.in/api/users?page=1&per_page=6")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: IuserListApiResponse) => {
      return data.data; // Returning only the user data array
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      return null;
    });
};
