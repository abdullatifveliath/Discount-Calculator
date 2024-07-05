import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState('')
  const [discount, setDiscount] = useState('')
  const [save, setSave] = useState('')
  const [discountamount, setDiscountamount] = useState('')

  const [outamount, setOutamount] = useState('')
  const [outdiscount, setOutdiscount] = useState('')

  const calculate = (e) => {
    const amt_save = amount * (discount / 100);
    const dis_amt = Number(amount) - amt_save;

    setSave(amt_save);
    setDiscountamount(dis_amt);

    setOutamount(amount);
    setOutdiscount(discount);
  }

  const reset = (e) => {
    setAmount('')
    setDiscount('')
    setSave('')
    setDiscountamount('')
    setOutamount('')
    setOutdiscount('')
  }

  return (
    <div className="App">
      <div className="inputbox">
        <center>
          <br />
          <h1>Enter the discount details :</h1><br /><br />
          <TextField id="outlined-basic" onChange={(e) => setAmount(e.target.value)} label="Amount" value={amount} variant="outlined" /><br /><br />
          <TextField id="outlined-basic" onChange={(e) => setDiscount(e.target.value)} label="Discount %" value={discount} variant="outlined" /><br /><br /><br />
          <Button variant="contained" onClick={e => calculate(e)}>Calculate</Button> &nbsp; &nbsp; &nbsp;
          <Button variant="contained" onClick={e => reset(e)}>Reset</Button>
        </center>
      </div>
      <div className="outputbox">
        <center>
          <h1>Discount Calculator</h1>
        </center>
        <p>The word ‘discount’ enlivens the innate shopping lover in almost all of us. When we see a ‘discount’ board, definitely we would at least make a quick search if the product that we always wanted to buy is available on discount or not. Discounts are so attractive, aren’t they? Here, let us understand what exactly discounts are and how to calculate them, besides knowing some useful knowledge about discounts. Discount The word ‘discount’ means a reduction in the price of an item available for consumer purchase. A discounted item is available to the customer at a price lower than the MRP (Maximum Retail Price).</p>
        <h3 className='output'><strong>Amount : {outamount}</strong></h3>
        <h3 className='output'><strong>Discount percentage : {outdiscount}</strong></h3>
        <h3 className='output'><strong>You Save : {save}</strong></h3>
        <h3 className='output'><strong>Discountent Amount : {discountamount}</strong></h3>
      </div>
    </div>
  );
}

export default App;
