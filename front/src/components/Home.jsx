import React from "react";

export default function Home() {

  async function hendlerSubmit(event) {
    console.log('Rading...');
    event.preventDefault();
    // console.log('Yes SUBMIT', email, password);
    const url = 'http://localhost:3000/api/users/testtoken';
    const token = 'Bearer ' + localStorage.getItem('token');
    console.log(token);
    // const body = { email, password, firstName, lastName };
    // console.log('===BODY ===',body);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': token
      },
    }; 
    try {
      const data = await fetch(url, options);
      const response = await data.json();
      if (response.statusCode) {
        // console.log('response STATUSCODE === ', response.statusCode);
        alert(response.message);
      } else {
        console.log('response YES === ', response);
        // localStorage.setItem("token", response.access_token);
        alert('Прочитали успешно!');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="mainpage">
        <div className="read">
          Прочитать ответ с закрытой страницы
        </div>
        <button onClick={hendlerSubmit} type="submit" className="form-button">Отправить</button>
      </div> 
      
    </>
  );
}