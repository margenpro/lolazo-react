import bcrypt from "bcryptjs";

const apiKey = "RGAPI-5b8238c4-1778-4e2a-b91b-71975c855565";
const rounds = 10;

function getApiKey() {
  bcrypt.hash(apiKey, rounds, (error, apiKey) => {
    if (error) {
      console.log(error.message);
    } else {
      return apiKey;
    }
  });
  return apiKey;
}

export default {
  getApiKey,
};
