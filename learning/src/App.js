import logo from './logo.svg';
import './App.css';
import GradeCal from './Gradecal.js';
import TicketCal from './Ticketcal.js';
import VowelCons from './VowelCons.js';
import Lengconv from './Lengthconvert.js';
import SwitchExample from './training/SwitchExample.js';
import WhileLoop from './training/WhileLoop.js';
import ForLoop from './training/ForLoop.js';
import MultiplyTable from './MultiplyTable.js';
import Fibonacii from './training/Fibonacii.js';
import Factorial from './training/Factorial.js';
import Factorsnum from './training/Factorsnum.js';
import Primenum from './training/Primenum.js';
import Reverse from './training/Reverse.js';
import Switchinarithmetic from './Switchinarithmetic.js';
import Seasonfind from './Seasonfind.js';
import Repch from './Repch.js';
import Palindrome from './Palindrome.js';
import ForInLoop from './training/ForInLoop.js';
import ArrowFn from './training/ArrowFn.js';
import Factrecurs from './Factrecurs.js';
import Sumofarray from './Sumofarray.js';
import LengthofArr from './LengthofArr.js';
import Bmifind from './training/Bmifind.js';
import PropsParent from './training/PropsParent.js';
import Propeg1 from './training/Propeg1.js';
import Formsinhmtl from './training/Formsinhmtl.js';
import MouseEvents from './training/MouseEvents.js';
import KeyBoardEvents from './training/KeyBoardEvents.js';
import NewForm from './training/NewForm.js';
import NewMouse from './training/NewMouse.js';
import Newmouse1 from './training/Newmouse1.js';
import SpreadOp from './training/SpreadOp.js';
import MultiStateForm from './training/MultiStateForm.js';
import Multistateprac from './training/Multistateprac.js';
import Style from './training/style.js';
import ObjectExample from './training/ObjectExample.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactRouterConcept from './training/ReactRouterConcept.js';
import UseLocationHook from './training/UseLocationHook.js';
import Propeg2 from './training/Propeg2.js';
import Multistatepract2 from './Multistatepract2.js';
import Probeg3 from './Probeg3.js';
import OddChecker from './training/OddChecker.js';
import NumberObj from './training/NumberObj.js';
import MathObj from './training/MathObj.js';
import Objecttask from './training/Objecttask.js';
import Randomobjtask from './training/Randomobjtask.js';
import Rgbrandom from './training/Rgbrandom.js';
import Winlose from './training/Winlose.js';
import DateObj from './training/DateObj.js';
import Dateobprac from './training/Dateobprac.js';
import DispCurrentsession from './training/DispCurrentsession.js';
import Comparetwodates from './training/Comparetwodates.js';
import Differenceofdates from './training/Differenceofdates.js';
import Dateafter from './training/Dateafter.js';

function App() {


  return (
    <>
    {/* <center>
    <h1>Mouseevents</h1>
    <br/> */}

    {/* <Bmifind/>
    <Propeg1/> */}
    {/* <Formsinhmtl/>
    
    <KeyBoardEvents /> */}
    {/* <MouseEvents /> */}
    {/* <NewForm  /> */}
    {/* <NewMouse />
    </center> */}
    {/* <Newmouse1 />
    <SpreadOp /> */}
    {/* <MultiStateForm />
    <Multistateprac/> */}

    {/* <Style/>
    <ObjectExample /> */}
    <Style/>
    <BrowserRouter>
      <Routes>
          
          <Route path='/' element={<Bmifind/>}></Route>
          <Route path='/reactrouterconcept' element={<ReactRouterConcept />}></Route>
          <Route path='/oddchecker' element={<OddChecker />}></Route>
          <Route path='/NumberObj' element={<NumberObj />}></Route>
          <Route path='/MathObj' element={<MathObj />}></Route>
          <Route path='/Randomobjtask' element={<Randomobjtask />}></Route>
          <Route path='/Rgbrandom' element={<Rgbrandom/>}></Route>
          <Route path='/Win' element={<Winlose/>}></Route>
          <Route path='/DateObj' element={<DateObj/>}></Route>
          <Route path='/Dateobprac' element={<Dateobprac/>}></Route>
          <Route path='/DispCurrentsession' element={<DispCurrentsession/>}></Route>
          <Route path='/Comparedates' element={<Comparetwodates/>}></Route>
          <Route path='/Differenceofdates' element={<Differenceofdates/>}></Route>
          <Route path='/Dateafter' element={<Dateafter/>}></Route>
      </Routes>
    </BrowserRouter>
    
   
    {/* <Multistatepract2/> */}
    
    </>
    
  );
}

export default App;
