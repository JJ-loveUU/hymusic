import React, { memo } from 'react'

import $ from 'jquery'



class FreightRules2 extends React.Component{
  //创建初始字段

  constructor(props){
    super(props);
    console.log("子组件constructor")

    // this.state = {
    //   name:"tom",
    //   tag_data : [
    //     {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛3'},
    //     {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士3'},
    //     {id:3 ,name:'Detroit Pistons',desc:'底特律活塞3'},
    //     {id:4 ,name:'Indiana Pacers',desc:'印第安纳步行者3'}
    //   ],
    //   tag_data2 : [
    //     {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛4'},
    //     {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士4'},
    //     {id:3 ,name:'Detroit Pistons',desc:'底特律活塞4'},
    //     {id:4 ,name:'Indiana Pacers',desc:'印第安纳步行者4'}
    //   ],
    // };

  }

  componentWillMount() {
    console.log("子组件componentWillMount")

    require("selectpage/selectpage.js")
    require("selectpage/selectpage.css")

  }

  componentDidMount() {
    console.log("子组件componentDidMount")
    $('#selectPage3').selectPage({
      showField : 'desc',
      keyField : 'id',
      data : this.props.data,
      multiple : true,
      eTagRemove:this.props.remove,
      eSelect:()=>{
        // var tag = this.state.tag_data2;
        // tag.push(
        //     {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
        // );
        // this.setState({
        //   tag_data:tag
        // })
      }
    });


    // $('#selectPage4').selectPage({
    //   showField : 'desc',
    //   keyField : 'id',
    //   data : this.state.tag_data2,
    //   multiple : true,
    //   eTagRemove:()=>{
    //     var tag = this.state.tag_data2;
    //     tag.push(
    //         {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
    //     );
    //     this.setState({
    //       tag_data:tag
    //     })
    //     console.log("remove4")
    //   },
    //   eSelect:()=>{
    //     console.log("select4")
    //   }
    // });

  }




  //创建文本内容
  render(){
    console.log("重新渲染2");
    return(
        <div>
          <input type="text" id="selectPage3" style={{width: "300px" }} />
          <input type="text" id="selectPage4" style={{width: "300px" }} />
        </div>
    )
  }


  test2(){

  }


}




export default FreightRules2; //导出创建的组件FreightRules
