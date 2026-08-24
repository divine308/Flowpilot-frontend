const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

async function request(
  endpoint,
  options = {}
) {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      credentials: "include",

      headers: {
        "Content-Type":
          "application/json",
        ...(options.headers || {})
      },

      ...options
    }
  );

  const data =
    await response.json()
      .catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message ||
      "Something went wrong"
    );
  }

  return data;
}

export const api = {
  register(data) {
    return request(
      "/auth/register",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
  },

  login(data) {
    return request(
      "/auth/login",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
  },

  logout() {
    return request(
      "/auth/logout",
      {
        method: "POST"
      }
    );
  },

  me() {
    return request(
      "/auth/me"
    );
  },

  processWorkflow(data) {
    return request(
      "/workflows/process",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
  },

  logs() {
    return request(
      "/workflows/logs"
    );
  },

  inventory() {
    return request(
      "/inventory"
    );
  },

  createInventory(data) {
    return request(
      "/inventory",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
  },

 verifyEmail(data) {
  return request(
    "/auth/verify-email",
    {
      method: "POST",
      body: JSON.stringify(data)
    }
  );
},

resendVerification(email) {
  return request(
    "/auth/resend-verification",
    {
      method: "POST",
      body: JSON.stringify({
        email
      })
    }
  );
},

  orders() {
    return request(
      "/orders"
    );
  }
};