import { api } from '../config/axiosConfig';

const BRANCHES_ENDPOINT = '/branches';
const COMMITS_ENDPOINT = '/commits';

const CommitAPI = {
  fetchGetAllBranches: async function () {
    const response = await api.get(BRANCHES_ENDPOINT);
    return response.data;
  },
  fetchGetByBranch: async function (branch: string) {
    const response = await api.get(COMMITS_ENDPOINT + '/' + branch);
    return response.data;
  },
  fetchGetBySha: async function (sha: string) {
    const response = await api.get(COMMITS_ENDPOINT + '/' + sha);
    return response.data;
  }
}

export default CommitAPI;



