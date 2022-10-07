import React, { useState } from 'react';
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";



const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue);
        // APIData.filter((item) => {
        //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        // })
            
    }
    const [open, setOpen] = useState(false);
    // const [query, searchItems] = useState("");
    return (
    <StyledSearch>
        <div class="container mt-2">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12">
              <div class="card p-3  py-4">
                <h5>Search to explore the greatest female composers</h5>
                <div class="row g-3 mt-2">
                  <div class="col-md-3">
                    <DropdownButton id="dropdown-basic-button" title="Search By Any">
                      <Dropdown.Item href="#/action-1">By Name</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">By Piece</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">By Year of Piece</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div class="col-md-6">
                      <input type="text" class="form-control" value={searchInput} onChange={(e) => searchItems(e.target.value)} placeholder="Enter keywords..."/>
                  </div>
                  <div class="col-md-3">
                    <Link to={{pathname: "/Search/" + "?keywords=" + searchInput, state: {searchInput}}}><button class="btn btn-secondary btn-block" type='submit'>Search Results</button></Link>
                      
                  </div>   
                </div>
                <div class="mt-3">      
                  <a
                      onClick={() => setOpen(!open)}
                      aria-controls="advancedSearch"
                      aria-expanded={open}
                    >
                  Advanced Search with Filters
                  <i class="fa fa-angle-down"></i></a> 
                  <Collapse in={open}>
                    <div id="advancedSearch">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-md-6">
                            <input type="text" placeholder="Nationality" class="form-control"/>
                          </div>
                          <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Instrument"/>
                          </div>    
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>     
          </div>
        </div>
    </StyledSearch>
  
    );
};



const StyledSearch = styled.div`
padding-top: 5rem;
  height:20rem;
 
.advanced{
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
}

.btn-secondary,
.btn-secondary:focus,
.btn-secondary:active{
  color: #fff;
  background-color: #00838f !important;
  border-color: #00838f !important;
  box-shadow: none;
}

.advanced{
  color: #00838f !important;
}

.form-control:focus{
  box-shadow: none;
  border: 1px solid #00838f;

}
.row{
  height:5rem;
}
.card{
  width:100%;
  margin:0;
}
.container{
    width:100%;
}
`
;

export default Search;