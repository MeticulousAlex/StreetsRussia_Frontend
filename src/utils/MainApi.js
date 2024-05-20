const BASE_URL = 'https://api.alex.movie-explorer.nomoredomainsmonster.ru';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`);
    });
  };
  
  export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    }).then((response) => {
      if (response.ok){
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`)
    });
  };
  
  export const logout = () => {
    return fetch(`${BASE_URL}/signout`,{
      method: 'POST',
      credentials: 'include'
    }).then((response) => {
      if (response.ok){
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`)
    });
  }