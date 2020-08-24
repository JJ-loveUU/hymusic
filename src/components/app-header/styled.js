import styled from 'styled-components';

export const HeaderWrapepr = styled.div`
    height:75px;
    background-color: #242424;
   

    .content{
        height:70px;
        display:flex;
    }

    .red-line{
        height:5px;
        background-color:#C20C0C;
    }

`

export const HeaderLeft = styled.div`
    height:70px;
    display:flex;

    .logo{
        display:inline-block;
        width:  157px;
        height: 100%;
        background-position:0 0 ;
        margin-right:20px;
    }

    .select-list{
        display:flex;
        
        >a{
            display:block;
            height:70px;
            line-height:70px;
            padding:0 17px;
            color:#ccc;
            font-size:14px;
            position: relative;

            &:hover,&.active{
                text-decoration:none;
                background-color:#000;
                color:#fff;
            }

            &.active> i   {
                color:red;
                width:12px;
                height:7px;
                position:absolute;
                bottom:-1px;
                left:calc(50% - 6px);
                background-position:-226px 0 ;
            }

            &:last-of-type::after{
                content:"";
                display:block;
                position:absolute;
                top:20px;
                right:-27px;
                width:30px;
                height: 19px;
                background:url('${require("@/assets/img/sprite_01.png")}') -190px 0 ;
            }
            
        }

    }

`

export const HeaderRight = styled.div`
    display:flex;
    margin-left:70px;
    margin-top:20px;

    .search{
        border-radius:32px;
        border:1px solid #000;
        overflow:hidden;
        width:158px;
        height:32px;

        input{
            font-size:12px;
        }
        
    }

    button{
        margin-left:20px;
        border-radius:20px;
        background-color:transparent;
        color:#ccc;
        border:1px solid #4F4F4F;

        &:hover{
            background-color:transparent;
            border:1px solid #ccc;
            color:#fff;
        }
    }

    .login{
        margin-top:6px;
        margin-left:15px;
    }


`