import styled from 'styled-components';



export const RcmHeader = styled.div`
    height:35px;
    line-height:35px;
    padding-bottom:2px;
    border-bottom:2px solid #C20C0C;
    background:url(${require("@/assets/img/sprite_02.png")})  no-repeat -222px -154px;
    padding-left:35px;


    .hotRec{
        font-size:20px;
        text-decoration:none;
        padding-right:20px;
        float:left;

        
    }
    .hotRecLinkList{
            float:left;

            .hotRecLink{
                color:#666;

                &+span{
                    padding: 0 13px;
                    color:#ccc;
                }
            }
    }
    .more{
        float:right;

       
    }
    .moreLog{
            float:right;
            display:block;
            width:15px;
            height:15px;
            margin-top:10px;
            background-color:red;
            background:url(${require("@/assets/img/sprite_02.png")}) no-repeat 0px -240px;;
    }

    

    

`