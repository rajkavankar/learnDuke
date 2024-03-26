import "./App.css"
import Navbar from "./components/navbar"
import Body from "./components/body"
import Footer from "./components/footer"
import Provider from "./Context/Provider"
function App() {
  return (
    <>
      <Provider>
        <Navbar />
        {/* <div className="wrapper"> */}

        <Body />

        {/* </div> */}
        <Footer />
      </Provider>
    </>
  )
}

export default App
