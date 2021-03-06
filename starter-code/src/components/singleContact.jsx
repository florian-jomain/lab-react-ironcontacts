import React from "react";

function singleContact({ index, pictureUrl, name, popularity, handleDelete }) {
  return (
    <tr>
      <td className='contacts__data'>
        <img src={pictureUrl} alt='Star face' />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>
        <button className='delete-button' onClick={() => handleDelete(index)}>
          Delete contact
        </button>
      </td>
    </tr>
  );
}

export default singleContact;
