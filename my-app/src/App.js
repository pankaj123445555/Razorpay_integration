import logo from './logo.svg';
import './App.css';


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

function App() {

async function displayRazorpay () {

      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      
      if (!res){
        alert('Razropay failed to load!!')
        return 
      }

      // const data = await fetch('http://localhost:1769/razorpay', {method: 'POST'}).then((t) =>
      //   t.json()
      // ) 

      // console.log(data)

    const options = {
      "key": "rzp_test_r4iAYORDsF8CPH", 
      "amount": "50000", 
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_M5Mfg3uKJj4NNU", 
      "callback_url":"http://localhost:1769/verify",
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const paymentObject = new window.Razorpay(options); 
  paymentObject.open();
  // we  get the handler function inside the payment object
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <button
        onClick={displayRazorpay}
        >
          Pay now 
        </button>
      </header>
    </div>
  );
}

export default App;