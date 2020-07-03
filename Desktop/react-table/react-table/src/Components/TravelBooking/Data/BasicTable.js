import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';



const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'pink'
};

const data = [
  { id: 1, name: "Admin Admin", object: "this is test travel objective", status: "Approved",by:"---", dateapproved:"---", actions:""},
  { id: 2, name: "testing", object: "last testing", status: "Submited", by:"---", dateapproved:"---", actions:"" },
  { id: 3, name: "Admin Admin", object: "this is test travel objective", status: "Approved", by:"---", dateapproved:"---", actions:""},
  { id: 4, name: "testing", object: "testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 5, name: "Admin Admin", object: " last testing", status: "Rejected", by:"---", dateapproved:"---", actions:"" },
  { id: 6, name: "testing", object: "testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 7, name: "Admin Admin", object: "last testing", status: "Submited", by:"---", dateapproved:"---", actions:"" },
  { id: 8, name: "testing", object: "this is test travel objective", status: "Rejected", by:"---", dateapproved:"---", actions:"" },
  { id: 9, name: "Admin Admin", object: "last testing", status: "Rejected", by:"---", dateapproved:"---", actions:"" },
  { id: 10, name: "testing", object: "last testing", status: "Submited", by:"---", dateapproved:"---", actions:"" },
  { id: 11, name: "Admin Admin", object: "this is test travel objective", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 12, name: "Admin Admin", object: "last testing", status: "Rejected", by:"---", dateapproved:"---", actions:"" },
  { id: 13, name: "testing", object: "testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 14, name: "Admin Admin", object: "last testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 15, name: "testing", object: "last testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 16, name: "Admin Admin", object: "this is test travel objective", status: "Rejected", by:"---", dateapproved:"---", actions:"" },
  { id: 17, name: "Admin Admin", object: "last testing", status: "Submited", by:"---", dateapproved:"---", actions:"" },
  { id: 18, name: "testing", object: "this is test travel objective", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 19, name: "Admin Admin", object: "last testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 20, name: "testing", object: "testing", status: "Submited", by:"---", dateapproved:"---", actions:"" },
  { id: 21, name: "Admin Admin", object: "last testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },
  { id: 22, name: "testing", object: "this is test travel objective", status: "Rejected", by:"---", dateapproved:"---", actions:"" },
  { id: 23, name: "Admin Admin", object: "last testing", status: "Submited", by:"---", dateapproved:"---", actions:"" },
  { id: 24, name: "testing", object: "testing", status: "Approved", by:"---", dateapproved:"---", actions:"" },

];


const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
    hidden: true
  },
  {
    dataField: "name",
    text: "Traveller Name",
    sort: true
  },
  {
    dataField: "object",
    text: "Traveller Object",
    sort: true
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    filter: textFilter()

    },
    // const columns = [
    //   ..., {
    //   dataField: 'quality',
    //   text: 'Product Quailty',
    //   formatter: cell => selectOptions[cell],
    //   filter: selectFilter({
    //     options: selectOptions
    //   })
    // }];
  
  {
    dataField: "by",
    text: "By",
    sort: true
  },
  {
    dataField: "dateapproved",
    text: "Date Approved",
    sort: true
  },
  {
    dataField: "actions",
    text: "Actions",
    sort: true
  }
];

{/* <Button variant="outline-success" id="btn3">Delete</Button> */}


const BasicTable = (props) => {
  return (
    <BootstrapTable
      striped hover condensed
      keyField="id"
      data={data}
      selectRow={selectRowProp}
      columns={columns}
      pagination={paginationFactory({})}
      filter={ filterFactory()}
      
    />
  );
};

export default BasicTable;