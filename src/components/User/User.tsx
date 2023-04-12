import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, User as UserType, getUsers } from "../../store";

const User: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: State) => state.users.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user: UserType) => (
          <div key={user.id}>
            <span>Name: </span>
            <strong>{user.name}</strong>
            <br />
            <span>Email: </span>
            <strong>{user.email}</strong>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default User;
