import React, { Fragment } from 'react';

const UsersTable = ({ users }) => (
  <Fragment>
    {users.length > 0 && (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Номер карточки</td>
            <td>Имя</td>
            <td>Фамилия</td>
            <td>ЗП/час</td>
            <td>Администратор</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.cardNumber}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.rubInHour}</td>
              <td>{user.isAdmin ? 'Да' : 'Нет'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </Fragment>
);

export default UsersTable;
