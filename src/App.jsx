import "./App.css"
import Navbar from "./components/navbar"
import Body from "./components/body"
import Footer from "./components/footer"
import Provider from "./Context/Provider"
import { useGetTeacherById } from "./hooks/useTeachers"
function App() {
  const { teacher } = useGetTeacherById("1")
  console.log(teacher)
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
