# 🧠 OneDo - Sistema de Gestão Web

Projeto completo com backend em Node.js + Express e frontend separado com React. O sistema gerencia entidades como alunos, visitantes, servidores, veículos e ocorrências em ambiente institucional.

---

## 📦 Estrutura do Projeto

### Backend (`/src_back`)
- 🔧 API RESTful com Express
- 🌐 Conectado a MongoDB Atlas
- 📁 Controllers:
  - `alunoController.js`
  - `visitanteController.js`
  - `usuarioController.js`
  - `veiculoController.js`
  - `servidorController.js`
  - `ocorrenciasController.js`
  - `estacionamentoController.js`
- 📁 Models (Mongoose):
  - `alunoModel.js`
  - `visitanteModel.js`
  - `usuarioModel.js`
  - `veiculosModel.js`
  - `servidorModel.js`
  - `ocorrenciasModel.js`
  - `estacionamentoModel.js`
  - `index.js` → Registro das rotas / conexão

### Frontend (`/src_front`)
- ⚛️ Interface construída com React
- 🧭 Navegação via React Router
- 📁 Componentes:
  - Sidebar, MobileSidebar
- 📁 Páginas:
  - `Main.jsx`
  - `TasksTable.jsx`

---

## 🧪 Executando o Projeto

### 🔙 Backend

```bash
cd src_back
npm install
node index.js
```
### 🔜 Frontend

```bash
cd src_front
npm install
npm start
```