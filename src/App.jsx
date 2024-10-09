import { Outlet } from "react-router-dom"

const App = () => {

  return (
    <>
      <header>
        header
      </header>
      <Outlet />
      <footer>
        footer
      </footer>
    </>
  )
}

export default App