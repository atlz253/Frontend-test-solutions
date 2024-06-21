import { User } from "../user/user";

import { default as endpoints } from "./dummyjsonEndpoints";
import Fetcher from "./fetcher";

class DataGateway {
  public static async getUsers(query: string) {
    if (query === "") {
      return [];
    } else {
      return this.GetUsersFromRequest(query);
    }
  }

  private static async GetUsersFromRequest(query: string) {
    try {
      const userFetchResponse = await Fetcher.tryGet<UserFetchResponse>(
        endpoints.getSearchUserQueryURL(query)
      );

      return userFetchResponse.users;
    } catch (error) {
      console.log(`error: ${error}`)
      alert(error);

      return [];
    }
  }
}

interface UserFetchResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export default DataGateway;
