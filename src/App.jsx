import "./App.css"
import Navbar from "./components/navbar"
import Body from "./components/body"
import Footer from "./components/footer"
import { LocationProvider } from "./Context/LocationContext"
function App() {
  return (
    <>
      <LocationProvider>
        <Navbar />
        {/* <div className="wrapper"> */}

        <Body />

        {/* </div> */}
        <Footer />
      </LocationProvider>
    </>
  )
}

export default App
