import axios from 'axios';

export default class FetchService {
  static async fetchPerson(login: string): Promise<any> {
    if (!login) return;
    const response = await axios.get(`https://api.github.com/users/${login}`);
    return response;
  }

  static async fetchRepos(login: string): Promise<any> {
    if (!login) return;
    const response = await axios.get(`https://api.github.com/users/${login}/repos`);
    return response;
  }
}
