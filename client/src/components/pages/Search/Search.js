import React, { useEffect, useState } from 'react';
import styled from "styled-components";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
//import { search } from '../../../../../server/routes/search';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FluteImg from '../../../img/flute.jpg';
import ClarinetImg from '../../../img/clarinet.jpg';
import Container from 'react-bootstrap/Container';


const Search = () => {
    const navigate = useNavigate();
    const [searchArray, setSearchArray] = useState(["","",""]);
    const [URL,setURL] = useState([""]);
    const [info,setInfo] = useState([]);
    // const [filterInput1, setFilterInput1] = useState('');
    // const [filterInput2, setFilterInput2] = useState('');
    // const [searchBy, setSearchBy] = useState('Any');
    const searchItems = (searchValue,type) => {
        let newSearchArray;
        if (type === "searchInput"){
            newSearchArray = [...searchArray];
            newSearchArray[0] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "filterInput1"){
            newSearchArray = [...searchArray];
            newSearchArray[1] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "searchBy"){
            newSearchArray = [...searchArray];
            newSearchArray[2] = searchValue;
            setSearchArray(newSearchArray);
            console.log("recognize search by");
        }
        console.log(searchValue,type,searchArray[2],searchArray);
        // APIData.filter((item) => {
        //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        // })
            
    };
    const onClickSearchHandler = () => {
        generateSearchURL(searchArray);
        console.log("clicked search",searchArray);
        // useEffect(() =>{
            axios
            // .get('https://99b782be-a96c-4d7b-9225-d8515f657ddf.mock.pstmn.io/Search'+URL,{
                .get('http://localhost:3000/api/composers')
        //     params:{
        //         input:searchArray[0],
        //         nationality:searchArray[1],
        //         Instrument:searchArray[2],
        //         searchby:searchArray[3]
        //     }
        // })
            .then(res =>{
                setInfo(res.data);
                    console.log(res);
                    console.log(res.data);
                    console.log(res.data.name);
                    console.log(res.status);
                    console.log(res.statusText);
            })
            .catch(err =>{
                console.log("Err from get search result")
            })
        // });
    };
    const generateSearchURL = (newValue) => {
        const URL = `?keywords=${newValue[0]}+${newValue[1]}&Searchby=${newValue[2]}`;
        setURL(URL);
        console.log(newValue,searchArray,URL);
        navigate(URL);
        //componentDidMount(URL);
    };
    
    

    // const filterItems1 = (filterValue1) => {
    //     setFilterInput1(filterValue1);
    //     console.log(filterValue1); 
    // }
    // const filterItems2 = (filterValue2) => {
    //     setFilterInput2(filterValue2);
    //     console.log(filterValue2); 
    // }

    const [open, setOpen] = useState(false);

    // onSearchClick (searchInput,filterInput1,filterInput2,searchBy) = [
    //     searchInput,
    //     filterInput1,
    //     filterInput2,
    //     searchBy
    // ]
    // {
    //     axios
    //     .get('http://localhost:3000/Search/'+ '?keywords=' + searchInput + '+' + filterInput1 + '+' + filterInput2 + '?Searchby=' + searchBy)
    //     .then(res => {
    //         console.log("Print-API-response: " + res.data);
    //         setAPIData(res.data);
    //       })
    //   }
    // const [selectedItem, setSelectedItem] = useState(null);
    // const [query, searchItems] = useState("");
    return (
    <><StyledSearch>
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
                                    <Form.Select aria-label="Default select example" onClick={(e) => searchItems(e.target.value, "searchBy")}>
                                        <option value="Name">Search By Name</option>
                                        <option value="Piece">Search By Piece</option>
                                        {/* <option value="Year">Search By Year Of Piece</option> */}
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
                                    <input type="text" class="form-control" onChange={(e) => searchItems(e.target.value, "searchInput")} placeholder="Enter keywords..." />
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-secondary btn-block" onClick={onClickSearchHandler} type='submit'>Search Results</button>
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
                                                    {searchArray[2] == "Piece" ?(
                                                    <input type="text" placeholder="Instrument" class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput1")} />
                                                    ):(
                                                    <input type="text" class="form-control" placeholder="Nationality" onChange={(e) => searchItems(e.target.value, "filterInput1")} />
                                                    )
                                                    
                                                    }
                                                    {/* <input type="text" placeholder="Nationality" class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput1")} /> */}
                                                </div>
                                                {/* <div class="col-md-6">
                                                    <input type="text" class="form-control" placeholder="Instrument" onChange={(e) => searchItems(e.target.value, "filterInput2")} />
                                                </div> */}
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
        <Container style={{ position: "absolute", marginTop: "120px", fontSize: "20px" }}>
          <Row class="d-flex row">
            {/* {info.length > 1? ( */}
                {info.map((item) =>{
                    console.log("mapped items");
                    return(
                        <div class="col col-3 d-flex justify-content-center">
                        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                            <Card>
                            <Card.Img variant="top" src={FluteImg} alt="https://www.classical-music.com/features/works/the-best-flute-solos-in-orchestral-works/"/>
                            <Card.Body class="card-body">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                {item.nationality}
                                </Card.Text>
                                {/* <Link to='/recommendation/ailis'> */}
                                <Button variant="primary" class="mt-auto btn" >View more details.</Button>
                                {/* </Link> */}
                            </Card.Body>
                            </Card>
                        {/* </div> */}
                        </div> 
                    )
                }
                )}
            {/* ):(searchArray.map((item) =>{
                return(
                    <h2>Your result will be displaying here.</h2>
                )
            })

            )
            } */}
          {/* {info.map(item => (
            <div class="col col-3 d-flex justify-content-center">
             <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}>
                <Card>
                <Card.Img variant="top" src={FluteImg} alt="https://www.classical-music.com/features/works/the-best-flute-solos-in-orchestral-works/"/>
                <Card.Body class="card-body">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    {item.nationality}
                    </Card.Text>
                    <Link to='/recommendation/ailis'>
                    <Button variant="primary" class="mt-auto btn" >View more details.</Button>
                    </Link>
                </Card.Body>
                </Card>
             </div>
        </div>
      ))} */}
            
          </Row><br></br>
        </Container>


             {/* /* <div>
                 <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                 
                            <Card>
                                <Card.Content>
                                    <Card.Header>{info.name}</Card.Header>
                                    <Card.Description>
                                        {info.date}
                                        {/* {item.nationality} 
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                </Card.Group>
            </div> */}
            {/* // <div>
            //     <h1>{info.name}</h1>
            //     <h1>{info.date}</h1>
            //     <h1>{info.nationality}</h1>
            // </div> */}
            </>
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