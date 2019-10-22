import React from 'react';

export default ({ type, calls }) => {
  const { callCount, size, time } = calls[type];
  return (
    <div className="bg-gray-100 p-1 font-mono is-size-7">
      <ul>
        <li>{callCount} calls</li>
        <li>{size / 1000} kb</li>
        <li>{time} ms</li>
      </ul>
    </div>
  );
};
