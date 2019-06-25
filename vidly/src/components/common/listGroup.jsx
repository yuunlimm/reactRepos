import React from "react";

const listGroup = ({
  valueProperty,
  textProperty,
  genres,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          onClick={() => onItemSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

listGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default listGroup;
