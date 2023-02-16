import React, { useState } from 'react';

function SetUser({ activeUser, users, handleUserChange }) {
  const [editMode, setEditMode] = useState(false);

  const handleUserSelect = (event) => {
    event.preventDefault();
    let username = '';
    if (event.target.value) {
      username = event.target.value;
    } else {
      username = event.target[0].value;
    }
    handleUserChange(username);
    setEditMode(false);
  };

  return (
    <div>
      {!editMode ? (
        <form
          className="dropdown-line"
          onChange={(event) => {
            handleUserSelect(event);
          }}
        >
          <select className="dropdown" defaultValue={activeUser}>
            <option value={''}>-- Choose the user --</option>
            {users.length > 0 &&
              users.map((user) => (
                <option key={user._id} value={user.name}>
                  {user.name}
                </option>
              ))}
          </select>
          <button className="button" onClick={() => setEditMode(true)}>
            New
          </button>
        </form>
      ) : (
        <form
          className="dropdown-line"
          onSubmit={(event) => {
            handleUserSelect(event);
          }}
        >
          <input
            className="dropdown"
            type="text"
            id="user"
            placeholder="Enter new user name and press submit"
          ></input>
          <input type="submit" className="button"></input>
          <button className="button" onClick={() => setEditMode(false)}>
            Back
          </button>
        </form>
      )}
    </div>
  );
}

export default SetUser;
