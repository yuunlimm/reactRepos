import React, { Component } from "react";

// columnns: array
// two referecnes : sortcolumn: object, onSOrt: function
class TableHeader extends Component {
  raiseSort = path => {
    const sortcolumn = { ...this.props.sortColumn };
    if (sortcolumn.path === path)
      sortcolumn.order = sortcolumn.order === "asc" ? "desc" : "asc";
    else {
      sortcolumn.path = path;
      sortcolumn.order = "asc";
    }
    this.props.onSort(sortcolumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.column.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
