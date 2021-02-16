class AuthService {
  login(username, password) {
    let hardcodedCred = {
      email: "semangat21",
      password: "pass12321",
    };
    if (username == hardcodedCred.email && password == hardcodedCred.password) {
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);

      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem("auth-token");
  }

  getCurrentUser() {
    return sessionStorage.getItem("auth-token");
  }
}

export default new AuthService();
