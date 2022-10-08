import React, { useState } from 'react';
import styled from "styled-components";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';



const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filterInput1, setFilterInput1] = useState('');
    const [filterInput2, setFilterInput2] = useState('');
    const [searchBy, setSearchBy] = useState('Any');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue);
        // APIData.filter((item) => {
        //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        // })
            
    }
    const filterItems1 = (filterValue1) => {
        setFilterInput1(filterValue1);
        console.log(filterValue1); 
    }
    const filterItems2 = (filterValue2) => {
        setFilterInput2(filterValue2);
        console.log(filterValue2); 
    }
    const [open, setOpen] = useState(false);

    // const [selectedItem, setSelectedItem] = useState(null);
    // const [query, searchItems] = useState("");
    return (
    <StyledSearch>
        <div class="container mt-2">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12">
              <div class="card p-3  py-4">
                <h5>Search to explore the greatest female composers</h5>
                <div class="row g-3 mt-2">
                    <div class="col-md-3 dropdown">
                        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </button> */}
        {/* id="dropdown-basic-button" title="Search By Any"  */}
                        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button" value={searchBy} onClick={() => setSearchBy("Name")}>By Name</button>
                            <button class="dropdown-item" type="button" value={searchBy} onClick={() => setSearchBy("Name")}>By Piece</button>
                            <button class="dropdown-item" type="button" value={searchBy} onClick={() => setSearchBy("Name")}>By Year of Piece</button>
                        </div> */}
                        {/* <DropdownButton id="dropdown-item-button" title="Search By Any">
                            <Dropdown.Item as="button" value={searchBy} onClick={() => setSearchBy("Name")}>By Name</Dropdown.Item>
                            <Dropdown.Item value={searchBy} onClick={() => setSearchBy("Piece")}>By Piece</Dropdown.Item>
                            <Dropdown.Item value={searchBy} onClick={() => setSearchBy("Year")}>By Year of Piece</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-item-button" title="Search By Any">
                            <Dropdown.Item  value={searchBy} onSelect={() => setSearchBy("Name")}>By Name</Dropdown.Item>
                            <Dropdown.Item >By Piece</Dropdown.Item>
                            <Dropdown.Item href="#/a">By Year of Pieceee</Dropdown.Item>
                        </DropdownButton> */}
                        <Form.Select aria-label="Default select example">
                            <option>Search By Any</option>
                            <option value={searchBy} onSelect={() => setSearchBy("Name")}>Search By Name</option>
                            <option value={searchBy} onSelect={() => setSearchBy("Piece")}>Search By Piece</option>
                            <option value={searchBy} onSelect={() => setSearchBy("Year")}>Search By Year Of Piece</option>
                        </Form.Select>
                    </div>
                    

        {/* <div>
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedItem?selectedItem:"Select a country"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onSelect={()=>setSelectedItem("aaa")}>aaa</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div> */}
                    

                    
                    <div class="col-md-6">
                  {/* // onChange={() => setSearchInput(searchInput)}  */}
                  {/* onChange={(e) => searchItems(e.target.value)}  */}
                      <input type="text" class="form-control" value={searchInput} onChange={(e) => searchItems(e.target.value)} placeholder="Enter keywords..."/>
                  </div>
                  <div class="col-md-3">
                    <Link to={{pathname: "/Search/" + "?keywords=" + searchInput + "+" + filterInput1 + "+" + filterInput2 + "?Searchby=" + searchBy}}><button class="btn btn-secondary btn-block" type='submit'>Search Results</button></Link>
                      
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
                            <input type="text" placeholder="Nationality" class="form-control" value={filterInput1} onChange={(e) => filterItems1(e.target.value)}/>
                          </div>
                          <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Instrument" value={filterInput2}  onChange={(e) => filterItems2(e.target.value)}/>
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