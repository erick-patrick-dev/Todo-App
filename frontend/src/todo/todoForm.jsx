import React from "react";
import IconButton from "../template/iconButton.jsx";

export default props => (
    <div role="form" className="todoForm">
        <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={props.handleChange}
            value={props.description}
        />
        <div className="todoForm-buttons">
            <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
            <IconButton style='info' icon='search' onClick={props.handleSearch} />
            <IconButton style='default' icon='close' onClick={props.handleClear} />
        </div>
    </div>
)