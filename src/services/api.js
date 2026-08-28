const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not configured");
}

const TOKEN_KEY = "flowpilot_token";

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function saveToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getStoredToken() {
  return getToken();
}

async function request(
  endpoint,
  options = {}
) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,
      headers
    }
  );

  const data =
    await response.json()
      .catch(() => ({}));

  if (response.status === 401) {
    removeToken();
  }

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
  ).then(result => {
    if (result.token) {
      saveToken(result.token);
    }

    return result;
  });
},


  logout() {
    removeToken();

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

  search(query) {
    return request(
      `/search?q=${encodeURIComponent(query)}`
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

  uploadInventoryImage(id, file) {
    const token = getToken();

    const formData = new FormData();

    formData.append(
      "image",
      file
    );

    const headers = {};

    if (token) {
      headers.Authorization =
        `Bearer ${token}`;
    }

    return fetch(
      `${API_URL}/inventory/${id}/image`,
      {
        method: "POST",
        headers,
        body: formData
      }
    )
      .then(async response => {
        const data =
          await response.json()
            .catch(() => ({}));

        if (response.status === 401) {
          removeToken();
        }

        if (!response.ok) {
          throw new Error(
            data.message ||
            "Failed to upload inventory image"
          );
        }

        return data;
      });
  },

  deleteInventory(id) {
    return request(
      `/inventory/${id}`,
      {
        method: "DELETE"
      }
    );
  },

  orders() {
    return request(
      "/orders"
    );
  },

  initializePayment(data) {
    return request(
      "/payments/initialize",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
  },

  getBusiness() {
    return request(
      "/business"
    );
  },

  updateBusiness(data) {
    return request(
      "/business",
      {
        method: "PATCH",
        body: JSON.stringify(data)
      }
    );
  },

  updateAISettings(data) {
    return request(
      "/business/ai-settings",
      {
        method: "PATCH",
        body: JSON.stringify(data)
      }
    );
  },

  updateWhatsApp(data) {
    return request(
      "/business/whatsapp",
      {
        method: "PATCH",
        body: JSON.stringify(data)
      }
    );
  },

  disconnectWhatsApp() {
    return request(
      "/business/whatsapp",
      {
        method: "DELETE"
      }
    );
  },

  updatePaymentSettings(data) {
    return request(
      "/business/payment-settings",
      {
        method: "PATCH",
        body: JSON.stringify(data)
      }
    );
  },

  verifyPayment(reference) {
    return request(
      `/payments/verify/${encodeURIComponent(reference)}`
    );
  },

  payments() {
    return request(
      "/payments"
    );
  },

  getPayment(id) {
    return request(
      `/payments/${id}`
    );
  },

  getBalance() {
    return request(
      "/payments/balance"
    );
  },

  getBanks() {
    return request(
      "/payments/banks"
    );
  },

  setupPayoutAccount(data) {
    return request(
      "/payments/payout-account",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
  },

  notifications() {
    return request(
      "/notifications"
    );
  },

  notificationUnreadCount() {
    return request(
      "/notifications/unread-count"
    );
  },

  markNotificationRead(id) {
    return request(
      `/notifications/${id}/read`,
      {
        method: "PATCH"
      }
    );
  },

  markAllNotificationsRead() {
    return request(
      "/notifications/read-all",
      {
        method: "PATCH"
      }
    );
  },

  deleteNotification(id) {
    return request(
      `/notifications/${id}`,
      {
        method: "DELETE"
      }
    );
  },

  requestPayout(data) {
    return request(
      "/payments/payout",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
  },

  payouts() {
    return request(
      "/payments/payouts"
    );
  }
};