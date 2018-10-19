import React from 'react';

const ItemTable = (props) => {
  const { items, isLoading } = props;

  if (isLoading) return (<div style={{ textAlign: "center" }}>
    <i>Loading items...</i>
  </div>);

  return (<table border='1' style={{ width: 400 }}>
    <thead>
      <tr>
        <th>No</th>
        <th>Item Name</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => {
        return (<tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.name}</td>
        </tr>);
      })}
    </tbody>
  </table>);
};

export default ItemTable;
