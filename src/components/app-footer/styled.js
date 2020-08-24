import styled from 'styled-components';



export const FootWrapper = styled.div`
    height:173px;
    background-color:#f2f2f2;
    position:relative;
    bottom:0px;
    left:0px;
    right:0px;
    

    .content{
        height:173px;
        display:flex;

        .footerLeft{
            flex:6;


            .music-links{
                
                a,span{
                    color:#999;
                }

                span{
                    margin:0 10px;
                }
            }

            .statement{
                margin: 5px 0;

                a{
                    color:#666;
                }

                .police{
                    width:14px;
                    height:14px;
                    display:inline-block;

                    img{
                        width:100%;
                        height:100%;
                        margin-top:-2px;
                    }
                }
            }
        }
        .footerRight{
            flex:4;
            display: flex;

            >div{
                
                a{
                    display:block;
                    width:50px;
                    height:45px;
                    background:url(${require('@/assets/img/sprite_footer_02.png')}) no-repeat;
                    background-size: 110px 450px;
                }

                span{
                    display:block;
                    width:70px;
                    height:24px;
                    background:url(${require('@/assets/img/sprite_footer_01.png')}) no-repeat;
                    background-size: 180px 100px;
                }

                :nth-child(1) {
                    a{
                        background-position: -60px -101px;
                     }
                     span{
                        background-position: 3px 9px;
                     }
                }

                :nth-child(2){
                    a{
                        background-position: 0 0;
                    }
                    span{
                        background-position: 3px 9px;
                     }
                 }
                 :nth-child(3){
                    a{
                        background-position: 0 0;
                    }
                    span{
                        background-position: 3px 9px;
                     }
                 }
                 :nth-child(4){
                    a{
                        background-position: 0 0;
                    }
                    span{
                        background-position: 3px 9px;
                     }
                 }
                 :nth-child(5){
                    a{
                        background-position: 0 0;
                    }
                    span{
                        background-position: 3px 9px;
                     }
                 }
            }
        }
    }

`