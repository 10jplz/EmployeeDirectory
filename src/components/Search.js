import React from "react";


function Search(props) {
    return (
        <form>
        <div className="form-group m-2 p-2">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search en Employee by Name or Location"
            id="search"
          />

  
        </div>
      </form>
    )
}

export default Search