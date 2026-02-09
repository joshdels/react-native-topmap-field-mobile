// const BASE_URL = "https://topmapsolutions.com/api/v1";
// const BASE_URL = "http://127.0.0.1:8000/api/v1";
const BASE_URL = "http://10.0.2.2:8000/api/v1";

type Props = {
  username: string;
  password: string;
};

export const ApiLogin = async (username: string, password: string) => {
  const response = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const text = await response.text();
  console.log("RAW RESPONSE:", text);

  if (!response.ok) {
    throw new Error(`Login failed (${response.status})`);
  }

  const data = JSON.parse(text);

  if (!data.token) {
    throw new Error("No token returned");
  }

  return data.token;
};

