import React from 'react';
import {Link} from 'react-router-dom';
import '../../CSS/styles.css';
import '../../CSS/cards.css';

export default function Pattern() {
  return (
    <>
    <section style={{background:"#f9f8f3"}}>
      <title>Pattern</title>
    <div className='container'>
    <div className='row download'>

   
      <div className="row app-detail">
        <div className="col  text-center">
          <div className="user-info">
            <h3 className='mt-3'>Pattern (5*5)</h3>
            <p className='mt-3'>Pattern to print (5*5)</p>
            <Link className="mt-3 btn btn-primary" to='/SquarePyramid'>Try it</Link>
          </div>
        </div>
                    
        <div className="col  text-center">
          <div className="user-info">
            <h3 className='mt-3'>Down Right Triangle</h3>
            <p className='mt-3'>Down Right Triangle pattern to print</p>
            <Link className="mt-3 btn btn-primary" to='/DownPyramid'>Try it</Link>
          </div>
        </div>

        <div className="col  text-center">
          <div className="user-info">
            <h3 className='mt-3'>Right Triangle</h3>
            <p className='mt-3'>Right Angle Triangle to print</p>
            <Link className="mt-3 btn btn-primary" to='/RightTriangle'>Try it</Link>
          </div>
        </div>
      </div>      
    

    <div className="row app-detail">   
      <div className="col  text-center">
        <div className="user-info">
          <h3 className='mt-3'>Sum of no. (Max)</h3>
          <p className='mt-3'>Maximum of Sum of given no</p>
          <Link className="mt-3 btn btn-primary" to='/Sumtono'>Try it</Link>
        </div>
      </div>

      <div className="col  text-center">
        <div className="user-info">
          <h3 className='mt-3'>Multiplication Table</h3>
          <p className='mt-3'>Multiplication Table</p>
          <Link className="mt-3 btn btn-primary" to='/Multiplication'>Try it</Link>
        </div>
      </div>

      <div className="col  text-center">
        <div className="user-info">
          <h3 className='mt-3'>Palindrome???  </h3>
          <p className='mt-3'>Palindrome to Check</p>
          <Link className="mt-3 btn btn-primary" to='/Palindrome'>Try it</Link>
        </div>
      </div>
      </div>

      <div className="row app-detail">   
      <div className="col text-center">
        <div className="user-info">
          <h3 className='mt-3'>Mini Calculator</h3>
          <p className='mt-3'>Operations on Calculator</p>
          <Link className="mt-3 btn btn-primary" to='/OperatorCalc'>Try it</Link>
        </div>
      </div>

      <div className="col text-center">
        <div className="user-info">
          <h3 className='mt-3'>Fibonacci Series</h3>
          <p className='mt-3'>Addition of previous number</p>
          <Link className="mt-3 btn btn-primary" to='/Fibonacci'>Try it</Link>
        </div>
      </div>
      <div className="col  text-center">
        <div className="user-info">
          <h3 className='mt-3'>Swapping of two no.</h3>
          <p className='mt-3'>Swapping of two number</p>
          <Link className="mt-3 btn btn-primary" to='/Swapping'>Try it</Link>
        </div>
      </div>
    </div>

    <div className='row app-detail'>
    <div className="col text-center">
      <div className="user-info">
        <h3 className='mt-3'>Reverse String</h3>
        <p className='mt-3'>String of Reverse</p>
        <Link className="mt-3 btn btn-primary" to='/ReverseString'>Try it</Link>
      </div>
    </div>

    <div className='col text-center'>
      <div className='user-info'>
        <h3 className='mt-3'>Even or Odd</h3>
        <p className='mt-3'>Find Even or Odd</p>
        <Link className='mt-3 btn btn-primary' to='/EvenorOdd'>Try it</Link>
      </div>
    </div>

    <div className='col text-center'>
      <div className='user-info'>
        <h3 className='mt-3'>Factors</h3>
        <p className='mt-3'>Factors of the Number</p>
        <Link className='mt-3 btn btn-primary' to='/Factors'>Try it</Link>
      </div>
    </div>
      </div>

    <div className='row app-detail'>
      <div className="col  text-center">
        <div className="user-info">
          <h3 className='mt-3'>ASCII Character</h3>
          <p className='mt-3'>ASCII Character</p>
          <Link className="mt-3 btn btn-primary" to='/Ascii'>Try it</Link>
        </div>
      </div>
      <div className='col text-center'>
        <div className='user-info'>
          <h3 className='mt-3'>HCF Or GCD</h3>
          <p className='mt-3'>Find HCF Or GCD</p>
          <Link className='mt-3 btn btn-primary' to='/HCF'>Try it</Link>
        </div>
      </div>
      {/* <div className='col text-center'>
        <div className='user-info'>
          <h3 className='mt-3'>Order Pizza</h3>
          <p className='mt-3'>Order Pizza</p>
          <Link className='mt-3 btn btn-primary' to='/OrderPizza'>Try it</Link>
        </div>
      </div> */}
    </div>
    {/* <div className='col text-center'>
        <div className='user-info'>
          <h3 className='mt-3'>Test</h3>
          <p className='mt-3'>Test</p>
          <Link className='mt-3 btn btn-primary' to='/Test'>Try it</Link>
        </div>
    </div>
    <div className='col text-center'>
        <div className='user-info'>
          <h3 className='mt-3'>Clicker</h3>
          <p className='mt-3'>Click to Addition</p>
          <Link className='mt-3 btn btn-primary' to='/Clicker'>Try it</Link>
        </div>
    </div>
    <div className='col text-center'>
        <div className='user-info'>
          <h3 className='mt-3'>Flip the buttons</h3>
          <p className='mt-3'>Flip the buttons</p>
          <Link className='mt-3 btn btn-primary' to='/Flip'>Try it</Link>
        </div>
    </div> */}
    
    </div>
    </div>
    </section>
    </>
  )
}
