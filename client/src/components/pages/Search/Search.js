import React, { useEffect } from 'react';
import useState from 'react-usestateref';
import styled from "styled-components";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
//import { search } from '../../../../../server/routes/search';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FluteImg from '../../../img/flute.jpg';
import ClarinetImg from '../../../img/clarinet.jpg';
import Container from 'react-bootstrap/Container';
// import placeholder1 from '../../img/placeholder.png';

const containerS={
    minWidth:"1200px",
    height:"auto",
    justifyContent:"center"

}

const rowS={
    minWidth:"1200",
    width:"auto",
    height:"auto",
    justifyContent:"center"
}

const Search = () => {
    const navigate = useNavigate();
    const [searchArray, setSearchArray,arrayRef] = useState(["composer","","",""]);
    const [URL,setURL,URLRef] = useState([""]);
    const [info,setInfo,infoRef] = useState([]);
    // const [searchby,setSearchby,searchbyRef] =useState([]);
    const [inputarea,setInputarea,inputRef] = useState([]);
    // const [filterInput1, setFilterInput1] = useState('');
    // const [filterInput2, setFilterInput2] = useState('');
    // const [searchBy, setSearchBy] = useState('Any');
    // const onInputCommitHandler(){

    // }
    const searchItems = (searchValue,type) => {
        let newSearchArray;
        if (type === "searchInput"){
            newSearchArray = [...searchArray];
            newSearchArray[1] = searchValue;
            setSearchArray(newSearchArray);
            // setFilteredOptions(searchValue);
        }
        if (type === "filterInput1"){
            newSearchArray = [...searchArray];
            newSearchArray[2] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "filterInput2"){
            newSearchArray = [...searchArray];
            newSearchArray[3] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "filterInput3"){
            newSearchArray = [...searchArray];
            newSearchArray[4] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "searchBy"){
            setInputarea("");
            newSearchArray = [...searchArray];
            newSearchArray[2] = "";
            newSearchArray[3] = "";
            newSearchArray[4] = "";
            newSearchArray[0] = searchValue;
            setSearchArray(newSearchArray);
            console.log("recognize search by");
        }
        console.log(searchValue,type,searchArray[0],searchArray);
        // APIData.filter((item) => {
        //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        // })
            
    };
    const onClickSearchHandler = () => {
        generateSearchURL(arrayRef.current);
        // setSearchby(searchArray[0],()=>{console.log("searchby is",searchby)});
        console.log("clicked search",URLRef.current);
        // useEffect(() =>{
            axios
            .get('http://localhost:3000/api/search/'+URLRef.current
            //     .get('http://localhost:3000/api'+URL,{
            // params:{
            //     input:searchArray[0],
            //     filter:searchArray[1],
            //     searchby:searchArray[2]
            // }
        // }
        )
            .then(res =>{
                setInfo(res.data);
                console.log(infoRef.current,"this is info");
                    console.log(res);
                    console.log(res.data);
                    console.log(res.data.name);
                    console.log(res.status);
                    console.log(res.statusText);
            })
            .catch(err =>{
                console.log("Error from getting data: "+err)
            })
            navigate(URLRef.current);
        // });
    };
    const generateSearchURL = (newValue) => {
        if(newValue[0] === "composer"){
        setURL(`${newValue[0]}?key=${newValue[1]}&nationality=${newValue[2]}`);
        // setURL(prevState =>{
        //     const newState = computeUpdatedState(prevState);
        //     return newState;//composer?key=input&nationality=filter1

        // });
        }
        else{
        setURL(`${newValue[0]}?key=${newValue[1]}&instrument=${newValue[3]}&publisher=${newValue[4]}`)//piece?key=input&instrument=filter2&publisher=filter3
        }
    
        // const URL = `/${newValue[0]}?key=${newValue[0]}/${newValue[1]}`;//searchby input filter
        // setURL(URL);
        console.log(newValue,searchArray,URLRef.current,"generate URL");
        
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
                                        <option value="composer">Search By Composer</option>
                                        <option value="piece">Search By Piece</option>
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
                                <div class="col-md-6" >
                                    {/* // onChange={() => setSearchInput(searchInput)}  */}
                                    {/* onChange={(e) => searchItems(e.target.value)}  */}
                                    {/* options={options} */}
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
                                            
                                                    {arrayRef.current[0] === "piece" ?(
                                                    <div class="row">
                                                    <div class="col-md-4">
                                                    <input type="text" placeholder="Please input the instrument you want to search..." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput2")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input type="text" placeholder="Please input the publisher you want to search..." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput3")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input value={inputarea} type="text" disabled class="form-control" placeholder="Nationality can be only filtered with name." onChange={(e) => searchItems(e.target.value, "filterInput1")} />
                                                    </div>
                                                    </div>
                                                    ):(
                                                    <div class="row">
                                                    <div class="col-md-4">
                                                    <input type="text" value={inputarea} disabled placeholder="Instruments can be only filtered with piece." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput2")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input type="text" value={inputarea} disabled placeholder="Publisher can be only filtered with piece." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput3")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input type="text" class="form-control" placeholder="Please input the nationality you want to search..." onChange={(e) => searchItems(e.target.value, "filterInput1")} />
                                                    </div>
                                                    </div>
                                                    )
                                                    }
                                                    {/* <input type="text" placeholder="Nationality" class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput1")} /> */}
                                                
                                                {/* <div class="col-md-6">
                                                    <input type="text" class="form-control" placeholder="Instrument" onChange={(e) => searchItems(e.target.value, "filterInput2")} />
                                                </div> */}
                                            
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledSearch>
        <Container style={containerS}>
          <Row class="d-flex row">
            {arrayRef.current[0] === "composer" ? (
                infoRef.current.map((item) =>{
                    console.log("mapped items");
                    return(
                        //composer
                    
                            <div class="col col-4 d-flex justify-content-center">
                        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                            <Card>
                            <Card.Img variant="top" src="/image/placeholder.png" alt="Image of the composer."/>
                            <Card.Body class="card-body">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                Nationality: {item.nationality}.<br></br>
                                Date: {item.date}.<br></br>
                                Personal website: {item.website}.<br></br>
                                Biography: {item.biography.substring(0, 200)}.<br></br>
                                </Card.Text>
                                {/* <Link to='/recommendation/ailis'> */}
                                {/* <Link to = {`/api/composers/${item.id}`}> */}
                                <Link
                                to={{pathname:`/api/composers/${item._id}`}}
                                state={{
                                    _id:item._id,
                                    name: item.name,
                                    nationality:item.nationality,
                                    DOB:item.DOB,
                                    website:item.website,
                                    biography:item.biography,
                                    image:item.image

                                }}
                                key={item.name}
                                style={{ textDecoration: "none", color: "black" }}
                                >
                                <Button variant="primary" class="mt-auto btn">View more details.</Button>
                                </Link>
                            </Card.Body>
                            </Card>
                        {/* </div> */}
                        
                        </div>
                        
                    )
                })
                ):(info.map((item) =>{
                    return(
                        //piece
                        <div class="col col-4 d-flex justify-content-center">
                        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                            <Card>
                            <Card.Img variant="top" src="/image/piece.jpg" alt="Image for this piece"/>
                            <Card.Body class="card-body">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                Composer: {item.composer.name}.<br></br>
                                Duration: {item.duration} mins.<br></br>
                                Year: {item.year}<br></br>
                                Instruments: {item.instruments}.<br></br>
                                Publisher: {item.publisher}.<br></br>
                                Score Link: {item.scoreLink}.<br></br>
                                </Card.Text>
                                <Link
                                    to={{pathname:`/api/pieces/${item._id}`,state:`${item._id}`}}
                                    state={{
                                        _id:item._id,
                                        name: item.name,
                                        composer:item.composer.name,
                                        duration:item.duration,
                                        publishyear:item.year,
                                        instruments:item.instruments,
                                        links:item.recordingLink,
                                        publisher:item.publisher,
                                        scorelink:item.scoreLink,
                                        image:item.image

                                    }}
                                    key={item.name}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                {/* <a href={item.recordingLink}> */}
                                <Button variant="primary" class="mt-auto btn">Explore now!</Button>
                                {/* </a> */}
                                </Link>
                            </Card.Body>
                            </Card>
                        {/* </div> */}
                        </div> 
                    )
                    })
                )
            }
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