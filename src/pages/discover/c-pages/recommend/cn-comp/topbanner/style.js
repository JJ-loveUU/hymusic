import styled from 'styled-components';


export const TopBannerWrapper = styled.div`
    height:285px;
    background-color: red;
    background:url(${props => props.bgImg});


    .topContent{
        height:285px;
        background-color: blue;
        display:flex;
        position:relative;

        .leftArrow,.rightArrow{
            width:37px;
            height:63px;
            position:absolute;
            top:50%;
            transform:translateY(-50%);

            img{
                width:100%;
                height:100%;
            }

            &:hover{
                background-color:#ecf0f1;
            }
        }

        .leftArrow{
            left:-80px;
        }
        .rightArrow{
            right:-80px;
        }

        .topLeft{
            width:730px;
            height:285px;
            background-color: #ccc;

            .imgDiv{
                width:730px;
                height:285px;

                img{
                    width:100%;
                    height:100%;
                }
            }

            .slick-dots {
                button{
                    width:7px;
                    height:7px;
                    border-radius:50%;
                }
                .slick-active button{
                    background-color:#c0392b;
                }
            }
        }
        .topRight{
            width:250px;
            height:285px;
            background-color: #ddd;
            background:url(${require("@/assets/img/download.png")});
            position:relative;

            .downloadPc{
                display:block;
                background-color:red;
                width:215px;
                height:56px;
                position: absolute;
                left:19px;
                bottom:44px;
                background:url(${require("@/assets/img/download.png")}) no-repeat -19px -184px;
            }
        }
    }

`