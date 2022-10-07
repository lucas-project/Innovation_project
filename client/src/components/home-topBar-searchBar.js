import styled from "styled-components";

const HomeTopBarSearchBar = () => {

  return (
    <StyledSearch>
      <i class='fas fa-search'></i>{" "}
      {/* <input type='text' placeholder='Search for anything' /> */}
      <div class="container mt-5">

        <div class="row d-flex justify-content-center">

            <div class="col-md-10">

                <div class="card p-3  py-4">

                    <h5>An Easier way to find your Housing</h5>

                    <div class="row g-3 mt-2">

                        <div class="col-md-3">

                            <div class="dropdown">
                              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                Any Status
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Rural</a></li>
                                <li><a class="dropdown-item" href="#">Urban</a></li>
                                <li><a class="dropdown-item" href="#">All</a></li>
                              </ul>
                            </div>
                            
                        </div>

                        <div class="col-md-6">

                            <input type="text" class="form-control" placeholder="Enter address e.g. street, city and state or zip"/>
                            
                        </div>

                        <div class="col-md-3">

                            <button class="btn btn-secondary btn-block">Search Results</button>
                            
                        </div>
                        
                    </div>


                    <div class="mt-3">
                        
  <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" class="advanced">
    Advance Search With Filters <i class="fa fa-angle-down"></i>
  </a>
 

<div class="collapse" id="collapseExample">
  <div class="card card-body">
     <div class="row">
        <div class="col-md-4">
            <input type="text" placeholder="Property ID" class="form-control"/>
        </div>
        <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Search by MAP"/>
        </div>
         <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Search by Country"/>
        </div>
         
     </div>

  </div>
</div>
                    </div>

                </div>
 
            </div>     
        </div>

    </div>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  border: 1px solid #989586;
  height:20rem;
  padding: 0 1rem;
  margin-right: 1rem;
 
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
`
;

export default HomeTopBarSearchBar;
