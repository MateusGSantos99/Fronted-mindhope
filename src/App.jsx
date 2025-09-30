// componente resposavel por emitir notificações utilizando a biblioteca react-hot-tost
import { AuthProvider } from "./context/AuthContext";
// importação do arquivo authProvider responsavel pela autenticação do usuarios e controle de rotas privadas

// importação de appRoutes componente de gerenciamento de rotas
import { AppRoutes } from "./routes/AppRoutes";

// construção codigo principal
function App(){
  return(
      <AuthProvider>
          <AppRoutes/>
      </AuthProvider>
  )
}
export default App;