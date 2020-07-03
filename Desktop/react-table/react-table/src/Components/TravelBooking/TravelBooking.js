import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormControl, Button, InputGroup, Form } from 'react-bootstrap';
import "react-pagination-library/build/css/index.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import  { Type } from 'react-bootstrap-table2-editor';


let data = {
    travelData: [
        { id: 1, TravellerName: "Admin Admin", TravellerObjective: "this is test travel Objective", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 2, TravellerName: "testing", TravellerObjective: "last testing", Status: "Submited", By: "---", DateApproved: "---", Actions: "" },
        { id: 3, TravellerName: "Admin ", TravellerObjective: "this is test travel Objective", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 4, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 5, TravellerName: "Admin Admin", TravellerObjective: " last testing", Status: "Rejected", By: "---", DateApproved: "---", Actions: "" },
        { id: 6, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 7, TravellerName: "Admin", TravellerObjective: "last testing", Status: "Submited", By: "---", DateApproved: "---", Actions: "" },
        { id: 8, TravellerName: "testing", TravellerObjective: "this is test travel Objective", Status: "Rejected", By: "---", DateApproved: "---", Actions: "" },
        { id: 9, TravellerName: "Admin Admin", TravellerObjective: "last testing", Status: "Rejected", By: "---", DateApproved: "---", Actions: "" },
        { id: 10, TravellerName: "testing", TravellerObjective: "last testing", Status: "Submited", By: "---", DateApproved: "---", Actions: "" },
        { id: 11, TravellerName: "Admin Admin", TravellerObjective: "this is test travelObjective", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 12, TravellerName: "Admin Admin", TravellerObjective: "last testing", Status: "Rejected", By: "---", DateApproved: "---", Actions: "" },
        { id: 13, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 14, TravellerName: "Admin Admin", TravellerObjective: "last testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 15, TravellerName: "testing", TravellerObjective: "last testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 16, TravellerName: "Admin Admin", TravellerObjective: "this is test travel Objective", Status: "Rejected", By: "---", DateApproved: "---", Actions: "" },
        { id: 17, TravellerName: "Admin Admin", TravellerObjective: "last testing", Status: "Submited", By: "---", DateApproved: "---", Actions: "" },
        { id: 18, TravellerName: "testing", TravellerObjective: "this is test travel Objective", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 19, TravellerName: "Admin Admin", TravellerObjective: "last testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 20, TravellerName: "testing", TravellerObjective: "testing", Status: "Submited", By: "---", DateApproved: "---", Actions: "" },
        { id: 21, TravellerName: "Admin Admin", TravellerObjective: "last testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 22, TravellerName: "testing", TravellerObjective: "this is test travel Objective", Status: "Rejected", By: "---", DateApproved: "---", Actions: "" },
        { id: 23, TravellerName: "Admin Admin", TravellerObjective: "last testing", Status: "Submited", By: "---", DateApproved: "---", Actions: "" },
        { id: 24, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 25, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 26, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 27, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 28, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 29, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 30, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 31, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 32, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 33, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 34, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 35, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 36, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 37, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 38, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 39, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 40, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },
        { id: 41, TravellerName: "testing", TravellerObjective: "testing", Status: "Approved", By: "---", DateApproved: "---", Actions: "" },

    ]
};

class TravelBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travelData: data.travelData, selectedStatus: data.travelData,
            deleteData: [],
            currentPage: 1,
            showTotal: true,
            traveller:[],


        }
    }
    // deleteData=(index, e)=>{
    //     const travelData=Object.assign([], this.state.travelData);
    //     travelData.splice(index, 1);
    //     this.setState({travelData:travelData})
    // }
    
    removeData = () => {
        
        alert("123");
        console.log("removeData Starts...");
        console.log("this.state.deleteData : ", this.state.deleteData);
        console.log("data.length : ", data.length);
        debugger;
        console.log("[removeData] : travelData :  ",this.state.travelData)
        for (var i = 0; i < this.state.deleteData.length; i++) {
            console.log("this.state.deleteData[i] : ", this.state.deleteData[i]);

            var index = this.state.travelData.findIndex(s => s.id == this.state.deleteData[i].id);

            this.state.travelData.splice(index, 1);


        }
        this.setState({ data: this.state.travelData });
        this.state.deleteData.splice(0, this.state.deleteData.length);

        console.log(" All deleted data : ", data);
        console.log("removeData Ends...");

    }


    editTraveller=(index,value)=>{
        alert("clicked")
        console.log("EditTraveller Calling");
        debugger;
        const traveller = this.state.traveller;
        console.log("traveller :", traveller)
        const newTraveller = traveller.map((person, i) => {//HERE is EDIT
            if (i !== index) {
                return person;
            }
            return value;
        });
        this.setState({ traveller: newTraveller });
        
    }

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });
    };

    
    getSelectedStatus(selOption) {
        let travelStatus = selOption.target.value;
        let isStatusSeleted = true;

        console.log("Deleted data", this.state.travelData)
        if (travelStatus === "SearchBy Status") {
            isStatusSeleted = false;
        }

        console.log("selOptiosStatus : ", selOption);
        console.log("travelStatus : ", travelStatus);
        console.log("travelData : ", this.state.travelData);
        console.log("selectedStatus : ", this.state.selectedStatus);

        console.log("isStatusSeleted : ", isStatusSeleted);
        if (isStatusSeleted) {
            let updatedArray = this.state.travelData.filter(
                p => p.Status === travelStatus
            );
            this.setState(prevState => {
                let selectedStatus = [...updatedArray];
                return { selectedStatus };
            });
        } else {
            console.log("isStatusSeleted is false");
            this.setState(prevState => {
                let selectedStatus = [...this.state.travelData];
                return { selectedStatus };
            });
        }
        console.log("last selectedStatus : ", this.state.selectedStatus);

    }

    render() {
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            clickToEdit: true,

            onSelect: (row, isSelect, rowIndex) => {
                console.log("row", row);
                console.log("isSelect", isSelect);
                console.log("rowIndex", rowIndex);
                if (row !== undefined){
                    this.state.deleteData.push(row);
                console.log("deleteData : ", this.state.deleteData);
                }
                
            },
            onSelectAll: (isSelect, rows, e) => {
                console.log("All Selected Rows : " + rows)

                for (var i = 0; i < rows.length; i++) {
                    console.log(" i : ", i);
                    this.state.deleteData.push(rows[i]);
                }
                console.log("111 deleteData : ", this.state.deleteData);

            }
        };

        
        
        const columns = [
            {
                dataField: "id",
                text: "id",
                // hidden:true
                sort: true,
                editable: false,
                searchable:false

            },
            {
                dataField: "TravellerName",
                text: "TravellerName",
                sort: true,
                dbclikable:false,

            },
            {
                dataField: "TravellerObjective",
                text: "TravellerObjective",
                sort: true,

            },
            {
                dataField: "Status",
                text: "Status",
                sort: true,
            },
            {
                dataField: "By",
                text: "By",
                editable: false
            },
            {
                dataField: "DateApproved",
                text: "DateApproved",
                editable: false
            },
            {
                dataField: "Actions",
                text: "Actions",
                editable: false,
                // clickable:true,
                
                formatter: (cellContent, row) => {
                    return (
                        <div className="actionSymbol">
                            <span><i class="fal fa-pencil-alt" onClick={this.editTraveller }></i></span>
                            <span><i class="fas fa-trash-alt" onClick={this.removeData}></i></span>
                            
                        </div>
                    );
                }
            }
        ];

        const pagination = paginationFactory({
            showTotal: true
        });

        // console.log("cellEdit Starts", cellEditFactory)
        // var cellEdit = cellEditFactory({
        
        //     mode: 'dbclick',
        // });
        // console.log("cellEdit Ends", cellEdit)

        


        return (
            <div className="MainDiv">
                <Container>
                    <Row className="row">
                        <Col xs={12} md={8} id="header-left"><h4>My Travel Booking Management</h4></Col>
                        <Col xs={12} md={4} id="header-right"><span><i class="fas fa-home"></i></span>My Travel Booking Management</Col>
                    </Row>
                </Container>
                <div >

                    <Form onLoad={this.tableUpadte} className="mainForm">
                        <Form.Row>
                            <Form.Group xs={4} controlId="formGridState">

                                <Form.Control as="select" value="Choose..." id="Select">
                                    <option>Select Traveller</option>
                                    <option></option>
                                </Form.Control>
                            </Form.Group>

                            <Col xs="auto">
                                <Form.Label for="inlineFormInputGroup" srOnly>
                                    Trip Start Date(From)
                                 </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend id="icon">
                                        {/* <InputGroup.Text><i class="fas fa-calendar-alt"></i></InputGroup.Text> */}

                                        <FormControl type="date" placeholder="Trip Start Date(From)" className="mr-sm-2" />
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Col>

                            <Col xs="auto">
                                <Form.Label for="inlineFormInputGroup" srOnly>
                                    Trip Start Date(From)
                                 </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend id="icon">
                                        {/* <InputGroup.Text><i class="fas fa-calendar-alt"></i></InputGroup.Text> */}

                                        <FormControl type="date" placeholder="Trip Start Date(To)" className="mr-sm-2" />
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Col>

                            <Form.Group xs={4} controlId="formGridState" onChange={e => this.getSelectedStatus(e)}>
                                {/* <Form.Label>State</Form.Label> */}
                                <Form.Control as="select" id="statusDropdown">
                                    <option>SearchBy Status</option>
                                    <option>Approved</option>
                                    <option>Submited</option>
                                    <option>Rejected</option>
                                    <br />
                                    <br />

                                </Form.Control>
                            </Form.Group>


                            <Button variant="primary" type="submit" id="submit">
                                Submit
                             </Button>
                            <Button variant="outline-primary" id="reset">
                                Reset
                                 </Button>
                        </Form.Row>
                    </Form>

                    <Container>
                        <Row class="row" >
                            <Col xs={12} md={12} id="add-travel-booking"><h6>Add Travel Booking</h6></Col>
                        </Row>
                    </Container>


                    <div className="bootstrapTable">
                    <button className="btn btn-danger btn-xs" onClick={this.editTraveller} > Edit</button>

                        <button className="btn btn-danger btn-xs" onClick={this.removeData} > Delete</button>

                        <BootstrapTable keyField='id' striped bordered hover id="mainTable"
                            
                            data={this.state.selectedStatus}
                            columns={columns}
                            headerClasses="tableHeading"
                            insertRow={true}
                            deleteRow={true}
                            selectRow={selectRow}
                            pagination={pagination}

                            // cellEdit={cellEditFactory({
                            //     mode: 'dbclick',
                            //     onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!', data); },
                            
                            //     beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!', data); },
                            //     afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!', data); }
                            // })}
                            >
                        </BootstrapTable>
                    </div>

                    {/* <Table responsive striped bordered hover id="myTable">
                        <tbody>
                            <tr id="tableHeading">
                                <th>id</th>
                                <th>TravellerName</th>
                                <th>TravellerObject</th>
                                <th>Status</th>
                                <th>By</th>
                                <th>DateApproved</th>
                                <th>Actions</th>
                            </tr>
                            {this.state.selectedStatus.map(item => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.TravellerName}</td>
                                        <td>{item.TravellerObject}</td>
                                        <td>{item.Status}</td>
                                        <td>{item.By}</td>
                                        <td>{item.DateApproved}</td>
                                        <td>{item.Actions}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table> */}
                </div>

            </div>
        )
    }
}



export default TravelBooking;