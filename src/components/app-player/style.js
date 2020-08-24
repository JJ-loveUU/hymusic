import styled from 'styled-components';


export const PlayerWrapepr = styled.div`

    height:47px;
    background-color:#333;
    position:fixed;
    left:0;
    bottom:0;
    width:100%;

    .playerInner{

        display:flex;
        height:47px;

        .left{
            width:137px;
            height:47px;
            display:flex;

            >a{
                margin:6px 0px ;
            }

            .prev{
                width:28px;
                background-position: 0 -130px;

                &:hover{
                    background-position: -30px -130px;
                }
            }

            .playOrPause{
                width:40px;
                background-position: ${props => !props.isPlay ? "5px -207px" : "5px -168px"};

                margin-left:2px;

                &:hover{
                    background-position: ${props => !props.isPlay ? "-35px -207px" : "-35px -168px"};
                }
            }

            .next{
                width:28px;
                margin-left:7px;
                background-position: -79px  -130px;

                &:hover{
                    background-position: -109px -130px;
                }
            }


        }

        .center{
            width:650px;
            height:47px;
            display:flex;


            .songImg{
                width:34px;
                height:34px;
                margin-top: 5px;
            }

            .progress{
                width:608px;
                height:47px;



                .ant-slider{
                    width:500px;
                    margin-top:20px;
                }

                .ant-slider-rail{
                    height:9px;
                    background:url(${require("@/assets/img/progress_bar.png")}) no-repeat 0px 0px;
                }

                .ant-slider-track{
                    height:9px;
                    background:url(${require("@/assets/img/progress_bar.png")}) no-repeat 0px -66px;
                }

                .ant-slider-handle{
                    border:none;
                    width:21px;
                    height:17px;
                    background:url(${require("@/assets/img/sprite_icon.png")}) no-repeat 0px -253px;
                }
            }
        }

        .right{
            width:193px;
            height:47px;
        }
    }

`