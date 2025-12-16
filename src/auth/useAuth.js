// auth/useAuth.js
export const useAuth = () => {
  return {
    isAuthenticated: true,
    user: {
      name: "Anas",
      role: "client", // change role to test
    },
  };
};
