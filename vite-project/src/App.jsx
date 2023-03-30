import './App.css'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <AppRoutes />
      </UserProvider>
      {/* <MarketUpdate/> */}
      {/* <CryptoPrice/> */}
      {/* <CryptoSymbols/> */}
      {/* <LoginMUIPage/> */}
      {/* <Layout/> */}

      {/* <DashboardPage/> */}


    </div>
  )
}

export default App


