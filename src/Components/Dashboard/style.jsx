import styled from "styled-components";

export const Container = styled.div`
  display: flex;


  .side-menu-itens {
    width: 280px;
    background-color: #f5f5f5;


    a {
      color: black;
      font-family: "Inter", sans-serif;

      height: 100%;
      width: 100%;
      padding-top: 14px;
      padding-bottom: 10px;
      background-color: transparent;

      display: flex;
      text-align: center;
      justify-content: space-around;
      padding-right: 10px;

      :hover {
        background-color: #fff;
        transition: 0.3s;
      }
    }
  }

  .itensBrowse {
    padding: 0px;
    margin: 70px;
    display: flex;
    flex-wrap: wrap;
    text-align: justify;

  }

  .item {
    height: 350px;
    width: 280px;

    display: flex;
    flex-direction: column;

    margin: 0 20px;

    button{
        border: none;
        width: 100%;
        align-self: baseline;
        padding: 10px;
        background-color: #64318d;
        border-radius: 21px;
        color: white;
        margin-top: 10px;
        cursor: pointer;
}
    }

    .image-itens {
        padding-bottom: 10px;
        max-height: 280px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        

        img{
            max-width: 270px;
            max-height: 220px;
            padding-top: 20px;
           

        }
    }
    

    .description{
        width: 270px;
        
    }

    .price {
        font-size: 18px;
        padding-top: 5px;
        color: #8139bb;
        font-weight: 600;
    }

    .description a {
      overflow: hidden;
     -webkit-box-orient: vertical;
     display: -webkit-box;
      color: #000000;
     text-overflow: ellipsis;
     -webkit-line-clamp: 2;
     line-clamp: 2;

      :hover {
        color: #64318d;
        text-decoration: underline black;
      }
    }
  
   

    

`
