import React from "react";
import { MDBDataTable } from 'mdbreact';
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux'
import { actionGetProductList } from '../../actions/products'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:null,
      data:{
        columns: [
          {
            label: 'Title',
            field: 'ProductName',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Description',
            field: 'description',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Quantity',
            field: 'qtyPerUnit',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Unit Price',
            field: 'unitPrice',
            sort: 'asc',
            width: 200
          },
          {
            label: 'In Stock',
            field: 'unitInStock',
            sort: 'asc',
            width: 200
          }
        ]
      },
      loading:false,
      key:0,
    }
  }

  componentDidMount(){
    this.getToDoList();
  }

  //Get Todo List
  getToDoList(){
    this.props.actionGetProductList().then(res => {
      if(!!this.props.getProductData) {
        let data1 = this.state.data;
        var getProductData = this.props.getProductData;
        getProductData.length>0 && getProductData.forEach(e => {
          e.unitInStock =(e.unitInStock==1?"YES":"No");
          e.unitPrice =e.unitPrice>0?e.unitPrice.toFixed(2):'0.00';
        })
        data1.rows = getProductData;
        this.setState({key:Math.floor(Math.random() * 10),data:data1});
      }
    }).catch(err => {
        console.log("something went to wrong on response!!");
    })
  }


  

  render() {
    return (
      <div>
       <div className="container-fluid">
            <Row>              
              <Col xs={12} md={12}>
                <div className="content">
                  <MDBDataTable
                    key={this.state.key}
                    striped
                    bordered
                    small
                    data={this.state.data}
                  />
                    </div>
                </Col>               
            </Row>
        </div>
      </div>
    );
  }
}

//map data to props from redux state
const mapStateToProps = state => {
  return {
    getProductData: state.reducer.getProductData
  };
};

//map redux action to props
export default connect(mapStateToProps, { actionGetProductList })(Home)
