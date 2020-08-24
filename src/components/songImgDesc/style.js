import styled from 'styled-components';


export const SongImgDescWrapper = styled.div`

    height:${props => props.minh ? (props.minh + "px") : "auto"}; 
    width:${props => props.size + "px"};
    /* margin-bottom:30px; */

    .topImgDiv{
        height:${props => props.height + "px"};
        width:${props => props.size + "px"};
        position:relative;

        >img{
            height:${props => props.height + "px"} ;
            width:${props => props.width + "px"};

            &:hover{
                
            }
        }

        .cover{
            height:${props => props.height + "px"};
            width:${props => props.size + "px"};
            display:block;
            position:absolute;
            left:0;
            top:0;
            background-position-x:${props => props.bgX + "px"};
            background-position-y:${props => props.bgY + "px"};
            
        }

        .paly{
                width:${props => props.width + "px"};
                height:27px;
                position:absolute;
                left:0px;
                bottom:0px;
                background-color:rgba(0,0,0,.5) ;

                .songImg{
                    float:left;
                    height:14px;
                    width:14px;
                    margin-left:4px;
                    margin-top:6px;
                    background-position-y:-21px;
                }
                       
                .totalPlay{
                    float:left;
                    margin-left:5px;
                    margin-top:6px;
                    color:#ccc;
                }

                .palyNow{
                    float:right;
                    width:16px;
                    height:17px;
                    background-position-y:0px;
                    margin-right:8px;
                    margin-top:6px;
                }
            }

            &:hover .palyNowHover{
                                        position: absolute;
                                        right: 8px;
                                        bottom: 4px;
                                        width:16px;
                                        height:17px;
                                        background-position-y:0px;
                                }
    }

`