import styled from 'styled-components';


export const BillCopWrapper = styled.div`
    width:230px;
    height:472px;
    position: relative;


    .BillCopTop{
        height:120px;
        padding-left:20px;
        padding-top:20px;

        .rankingImg{
           float:left;

            img{
                width:80px;
                height:80px;
            }
        }

        .topRight{
            float:left;
            padding-top:10px;
            padding-left:10px;
            .title{
                font-size:14px;
                font-weight: bold;
            }

            .play,.collect{
                display:inline-block;
                width:30px;
                height:30px;
            }

            .play{
                background-position:-267px -197px;

                &:hover{
                    background-position:-267px -227px;
                }
            }

            .collect{
                background-position:-296px -197px;

                &:hover{
                    background-position:-296px -227px;
                }
            }
        }

        
    }

    .BillCopBottom{
        
        

        ol{
            margin-left:30px;

            li{
                position: relative;

                height:32px;
                line-height:32px;

                .serial{
                    float:left;
                    font-size:16px;
                    height:32px;
                    width:17px;
                    text-align:center;
                }

                >a{
                    float:left;
                    font-size:12px;
                    margin-left:10px;
                    color:#000;
                    width:163px;
                }

                &:hover a{
                    width:90px;
                }
                
                &:hover .ope{
                    display:flex;
                }

                .ope{
                    height:32px;
                    width:75px;
                    position: absolute;
                    right:10px;
                    top:0px;
                    display:none;
                    align-items:center;

                    
                    
                }
                .ope a{
                    flex:1;
                    height:20px;
                }

               .ope1,.ope2,.ope3{
                    background-position:-267px -266px;

                    &:hover{
                        background-position:-267px -286px;
                    }
               }

            }

            &:nth-child(-n+3) span{
                color:#c10d0c;
            }
        }
    }

    .more{
            position: absolute;
            right:30px;
            bottom:6px;
        }

`