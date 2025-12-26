import React from "react";
import Grid from "../template/grid.jsx";
import IconButton from "../template/iconButton.jsx";

export default props => (

    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input id="description" className="form-control" 
                placeholder="Adicione uma tarefa"
                onChange={props.handleChange}
                value={props.description}/>
        </Grid>

        <Grid cols="col-xs-12 col-sm-3 col-md-2">
            <IconButton style='primary' icon='plus' 
                onClick={props.handleAdd} /> 

            <IconButton style='info' icon='search' 
                onClick={props.handleSearch} />
        </Grid>
    </div>
)