import React, { memo } from 'react'

import $ from 'jquery'
// import SELECT2 from './index2'
// import SelectPage from './SelectPage'



class FreightRules extends React.Component{
  //创建初始字段

  constructor(props){
    super(props);

    this.state = {
      name:"tom",
      tag_data : [
        {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
        {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
        {id:3 ,name:'Detroit Pistons',desc:'底特律活塞'},
        {id:4 ,name:'Indiana Pacers',desc:'印第安纳步行者'}
      ],
      tag_data2 : [
        {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛2'},
        {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士2'},
        {id:3 ,name:'Detroit Pistons',desc:'底特律活塞2'},
        {id:4 ,name:'Indiana Pacers',desc:'印第安纳步行者2'}
      ],
    };

  }

  componentWillMount() {

    require("selectpage/selectpage.js")
    require("selectpage/selectpage.css")

  }

  componentDidMount() {

    $('#selectPage').selectPage({
      lt: 0,
      width: 200,
      pageSize:20,
      textName: 'name',
      valueName: 'id',
      showField : 'desc',
      keyField : 'id',
      data : this.state.tag_data,
      multiple : true,
      // eTagRemove:this.remove.bind(this),
      eSelect:this.remove.bind(this),
      eTagRemove :this.remove.bind(this),
    });


    $('#selectPage2').selectPage({
      lt: 0,
      width: 200,
      pageSize:20,
      textName: 'name',
      valueName: 'id',
      showField : 'desc',
      keyField : 'id',
      data : this.state.tag_data2,
      multiple : true,
    });

  }




  //创建文本内容
  render(){
    console.log("重新渲染");
    return(
        <div>
          <button onClick={this.changeName.bind(this)}>click</button>
          <div id="div1">{this.state.name}</div>
          <input type="text" id="selectPage" style={{width: "300px" }} />
          <input type="text" id="selectPage2" style={{width: "300px" }} />
          {/*<SELECT2 remove={this.remove.bind(this)} data={this.state.tag_data}></SELECT2>*/}
          {/*<SelectPage multiple="true" width={700} ref="getProjectSelect" id="projectId" lt={5} values={this.state.tag_data} remove={this.remove.bind(this)}/>*/}
        </div>
    )
  }

  changeName(){
    var tag = this.state.tag_data;
    tag.push(
        {id:new Date().getTime() ,name:'Chicago Bulls',desc:'芝加哥公牛33333'},
    );
    var tag2 = this.state.tag_data2;
    tag2.push(
        {id:new Date().getTime() ,name:'Chicago Bulls',desc:'芝加哥公牛44444'},
    );
    this.setState({
      tag_data:tag,
      tag_data2:tag2
    })
    console.log($("#selectPage").val());
    console.log("remove3333.....")
  }
  remove(){

    var tag = this.state.tag_data2;
    tag.push(
        {id:new Date().getTime() ,name:'Chicago Bulls',desc:'芝加哥公牛4444'},
    );
    this.setState({
      tag_data2:tag
    })
    console.log($("#selectPage2").val())
    console.log("remove.....")
  }

}




export default FreightRules; //导出创建的组件FreightRules
