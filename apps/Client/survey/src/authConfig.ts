const authConfig = {
  _token: '',
  _isAuthenticated: false,
  set setToken(value: string) {
    this._token = value;
  },
  get token(): string {
    return this._token;
  },
};

export default authConfig;
