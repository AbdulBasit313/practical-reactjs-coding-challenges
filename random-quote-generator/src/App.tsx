import classnames from "classnames"
import { ReactComponent as Button } from "../src/assets/icons/button.svg"
import { ReactComponent as Quotation } from "../src/assets/icons/quotation.svg"
import { ReactComponent as Twitter } from "../src/assets/icons/twitter.svg"
import { ReactComponent as Whatsapp } from "../src/assets/icons/whatsapp.svg"
import "./App.css"

function App() {
  return (
    <>
      <header>
        <div className="top-strip" />
      </header>
      <div className="container">
        <div className="quotation-box ">
          <Quotation />
          <div className="quote">
            <p>
              In the end, we will remember not the words of our enemies, but the
              silence of our friends.
            </p>
            <span>- Martin Luther King Jr.</span>
          </div>
          <div className="bottom-navigation">
            <div>
              <Button className={classnames("rotate cp")} />
              <Button className="cp" />
            </div>
            <div className="share">
              <span>Share At:</span>
              <Twitter title="Post this quote on twitter!" className="cp" />
              <Whatsapp title="Post this quote on WhatsApp!" className="cp" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-strip" />
    </>
  )
}

export default App
