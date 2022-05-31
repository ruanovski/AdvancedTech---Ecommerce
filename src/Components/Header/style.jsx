import styled from "styled-components";

export const Container = styled.div`
  background-color: #64318d;

  max-width: 100%;
  margin: o auto;

  #header-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-bottom: 0px;
    margin: 0;
    align-content: center;
    position: relative;
    margin-right: 30px;

    #Logo {
      width: 180px;
      height: 100px;
      min-width: 130px;
    }

    #seach-container {

      display: flex;
      align-items: center;
      align-content: center;
      flex: 1;

        input{
            border-radius: 1px;
            border: none;
            padding: 10px;
            width: 100%;
            min-width: 300px;


        }

        button{
          background: #000000;
          border: none;
          border-radius: 0px 5px 5px 0px;
          height: 36px;
          width: 40px;
          cursor: pointer;
        }


       img{
         
         width: 25px;
         height: 25px;
       }
    }
}

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-color: #9763c2;
    color: #fff;
  }

  .nav-link {
    padding: 0;
    margin: 0;
    padding: 30px;

    color: white;
    text-decoration: none;
    
    :hover{
      background-color: #905eb9;
      transition: 0.4s;
    }
  }

  .icons{
    display: flex;
    padding-left: 20px;
    cursor: pointer;
  }


`;
