import React ,{useState} from "react";

import Icon from "./components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card , CardBody , Container , Button , Col , Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


const itemArray = new Array(9).fill("empty")


const App = () => {
  const [isCross , setIsCross] = useState(false)
  const [winMessage , setWinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9);
  }

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[2] !== "empty"
    ) {
      return setWinMessage(`${itemArray[2]} Wins`);
    }

    if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[5] !== "empty"
    ) {
      return setWinMessage(`${itemArray[5]} Wins`);
    }

    if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[8] !== "empty"
    ) {
      return setWinMessage(`${itemArray[8]} Wins`);
    }

    if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[6] !== "empty"
    ) {
      return setWinMessage(`${itemArray[6]} Wins`);
    }

    if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[7] !== "empty"
    ) {
      return setWinMessage(`${itemArray[7]} Wins`);
    }

    if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[8] !== "empty"
    ) {
      return setWinMessage(`${itemArray[8]} Wins`);
    }

    if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[8] !== "empty"
    ) {
      return setWinMessage(`${itemArray[8]} Wins`);
    }

    if (
      itemArray[6] === itemArray[4] &&
      itemArray[4] === itemArray[2] &&
      itemArray[2] !== "empty"
    ) {
      return setWinMessage(`${itemArray[2]} Wins`);
    }
  }

  const changeItem = itemNumber => {
    if (winMessage){
      return toast(winMessage,{type:"success"})
    }

    if(itemArray[itemNumber]=== "empty"){
      itemArray[itemNumber] = isCross ? "Cross" : "Circle"
      setIsCross(!isCross)
    }else{
      return toast("already filled", {type:"error"})
    }
    checkIsWinner();
  }
 
  return(
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
        {winMessage ? (
          <div className="mb-2 mt-2">
            <h1 className="text-primary text-uppercse text-center">
            {winMessage}
            </h1>
            <Button
            color="success"
            block
            onclick={reloadGame}>Reload the Game</Button>
            </div>
        ) :(
          <h1 className="text-center text-warning">
            {isCross ? "Cross " :"Circle " }turn  
          </h1>
        )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card className="crd" color="warning"
              onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default App;