import React from 'react';
// import 'css/selectpage.css'
import $ from 'jquery'


export default class SelectPage extends React.Component {

  componentWillMount() {
    console.log("selectpage:componentWillMount")
    require("selectpage");
    require("jquery");
  }

  componentDidMount() {
    console.log("selectpage:componentDidMount")
    $('#'+this.props.id).selectPage({
      showField : this.props.textName,
      keyField : this.props.valueName,
      data :[],
      pageSize:this.props.pageSize,
      eSelect: this.props.onClick,
      eClear:this.props.onRemove,
      multiple:this.props.multiple,
      eTagRemove:this.props.remove,
    });
    $('.sp_result_area').css('z-index',2000);

  }

  render() {
    console.log("重新渲染selectpage")
    if(this.props.values != null && this.props.values.length > 0){
      var first=$('#'+this.props.id).val();
      $('#'+this.props.id).selectPageData(this.props.values);
      $('#'+this.props.id).val(first);
      $('#'+this.props.id).selectPageRefresh();
    }
    return (
        <label  style={{marginLeft: this.props.lt + "px"}}>
          <input type="text" id={this.props.id}  style={{width: this.props.width + "px"}}></input>
        </label>
    );
  }

  getValue() {
    return $('#'+this.props.id).val() ? parseInt($('#'+this.props.id).val()) : null;
  }

  getValueStr() {
    return $('#'+this.props.id).val() ? $('#'+this.props.id) : null;
  }

  setValue(id) {
    $('#'+this.props.id).val(id);
  }

  setPageData(data){
    $('#'+this.props.id).selectPageData(data);
  }
  selectPageRefresh(){
    $('#'+this.props.id).selectPageRefresh();
  }
}

SelectPage.defaultProps = {
  lt: 0,
  width: 200,
  pageSize:20,
  textName: 'name',
  valueName: 'id',
  onClick: null,
  onRemove:null,
  multiple:null
}
