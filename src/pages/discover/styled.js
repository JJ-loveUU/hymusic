import styled from 'styled-components';



export const DiscoveryHeader = styled.div`
    height:35px;
    background-color:#C20C0C;

    .discoveryNav{
        height:30px;

        .wrapper2{
            height:30px;
            margin-left:118px;
            display:flex;

            a{
                width:84px;
                height:30px;
                line-height:30px;
                text-align:center;

                &:hover > span,&.link-active > span{
                    background-color:#9B0909;
                }

                span{
                    display:inline-block;
                    padding:0 13px;
                    height:20px;
                    line-height:20px;
                    color:#fff;
                    border-radius: 20px;

                }


            }
        }
    }

` 