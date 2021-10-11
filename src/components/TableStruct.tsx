import React, { useState } from 'react'
import {Button} from '@material-ui/core';
import Datepic from './Datepic'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './TableStruct.css';



// type TsInputs = {
//     Day1: number,
//     Day2:number,
//     Day3:number,
//     Day4:number,
//     Day5:number
    
// }
type RowData = {
  message: string;
}

interface IState {
  rows: RowData[];
}

function TimeSheet() {
  const [Day1, setDay1] = useState('');
  const [Day2, setDay2] = useState('');
  const [Day3, setDay3] = useState('');
  const [Day4, setDay4] = useState('');
  const [Day5, setDay5] = useState('');

  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [t3, setT3] = useState('');
  const [t4, setT4] = useState('');
  const [t5, setT5] = useState('');
  // constructor(props: any){
  //   super(props);
  //   this.state = { Day1: 0, Day2: 0, Day3: 0, Day4: 0, Day5: 0 }
  // }

  // setEmpState = (event: FormEvent<HTMLInputElement>) => {
  //   const value = (event.target as HTMLInputElement).value;
  //   const field = (event.target as HTMLInputElement).name;

  //   this.setState({...this.state, [field]: value});

  // }
  

  // render(){
    const [state, setState] = useState<IState>({rows: []});

    const addRow = () => {
      setState({
        rows: [...state.rows, { message: "my new element" }]
      })
    } 
  
    const { rows } = state;


    return (<React.Fragment>  
       <div >
       <label>Select Week Start <Datepic/></label></div>
           <br></br><br></br>
          
    
    
      <table className='table'>
        <thead className="thead-light" >
          <tr>
            <th>Application</th>
            <th>Activity</th>
            <th>Day1</th>
            <th>Day2</th>
            <th>Day3</th>
            <th>Day4</th>
            <th>Day5</th>
            <th>Day6</th>
            <th>Day7</th>
          </tr>
            <td>
            SelectApp
            </td>
            <td>
            SelectActivity
            </td>
            <td><input type="number" value='8' required disabled/></td>
            <td><input type="number" value='8' required disabled/></td>
            <td><input type="number" value='8' required disabled/></td>
            <td><input type="number" value='8' required disabled/></td>
            <td><input type="number" value='8' required disabled/></td>
            <td><input type="number" value='0' required disabled/></td>
            <td><input type="number" value='0' required disabled/></td>
            <tr>
              <th> <select name="application" id="app">
              <option value={1}>app1</option>
              <option value={2}>app2</option>
              <option value={3}>app3</option>
              </select>
              <Button onClick={addRow} variant="outlined" size="small">Add Row</Button></th>
              <th>
              <select name="activity" id="act">
              <option value={1}>activity1</option>
              <option value={2}>activity2</option>
              <option value={3}>activity3</option>
              </select>
              </th>
              <td><input onChange={e => setDay1(e.target.value)}  type="number" required /></td>
              <td><input type="number" onChange={e => setDay2(e.target.value)} required/></td>
              <td><input type="number" onChange={e => setDay3(e.target.value)} required/></td>
              <td><input type="number" onChange={e => setDay4(e.target.value)} required/></td>
              <td><input type="number" onChange={e => setDay5(e.target.value)} required/></td>
              <td><input type="number" value='0' required disabled/></td>
              <td><input type="number" value='0' required disabled/></td>
          </tr>
          </thead>
          <tbody>
            
            { rows.map(element => (
                <tr> 
                  <td>
                  <select name="application" id="app">
              <option value={1}>app1</option>
              <option value={2}>app2</option>
              <option value={3}>app3</option>
              </select>
                  </td>
                  <td>
                  <select name="activity" id="act">
              <option value={1}>activity1</option>
              <option value={2}>activity2</option>
              <option value={3}>activity3</option>
              </select>
                  </td>
              <td><input  type="number" onChange={e => setT1(e.target.value)} name="Day1" required /></td>
              <td><input  type="number" onChange={e => setT2(e.target.value)} name="Day2" required/></td>
              <td><input  type="number" onChange={e => setT3(e.target.value)} name="Day3" required/></td>
              <td><input  type="number" onChange={e => setT4(e.target.value)} name="Day4" required/></td>
              <td><input  type="number" onChange={e => setT5(e.target.value)} name="Day5" required/></td>
              <td><input type="number" value='0' required disabled/></td>
              <td><input type="number" value='0' required disabled/></td>
                </tr>
              ))
            }
            
          <tr>
              <th>Total</th>
              <td> </td>
              <td>{Number(Day1) + Number(t1)}</td>
              <td>{Number(Day2) + Number(t2)}</td>
              <td>{Number(Day3) + Number(t3)}</td>
              <td>{Number(Day4) + Number(t4)}</td>
              <td>{Number(Day5) + Number(t5)}</td>
              <td>0</td>
              <td>0</td>
              <td></td>
          </tr>
        </tbody>
        </table>
   
        <br></br>
        <br></br>
        <label>Comments &nbsp;
        <TextareaAutosize 
      aria-label="empty textarea"
      placeholder="Please enter your comments"
      style={{ width: 500, height: 50 }}
    />
        </label><br></br>
        <Button type="submit" color="primary" variant="contained">Submit</Button>
        </React.Fragment>
    )
}

// }
export default TimeSheet
