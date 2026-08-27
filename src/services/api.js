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
    const formData = new FormData();

    formData.append(
      "image",
      file
    );

    return fetch(
      `${API_URL}/inventory/${id}/image`,
      {
        method: "POST",
        credentials: "include",
        body: formData
      }
    )
      .then(async response => {
        const data =
          await response.json()
            .catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            data.message ||
            "Failed to upload inventory image"
          );
        }

        return data;
      });
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
      `/payments/verify/${encodeURIComponent(
        reference
      )}`
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

