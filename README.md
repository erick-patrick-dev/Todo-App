# TodoApp (simples)

Aplicação simples de ToDo: tarefas podem ser criadas, listadas, atualizadas (marcar concluído) e removidas. Frontend em React puro (será migrado para Redux em seguida). Backend em Node + Express + Mongoose.

## Tecnologias
- Node.js, Express
- MongoDB + Mongoose
- React (frontend)
- PM2 (opcional, para produção local)
- body-parser (parsing JSON)

## Estrutura relevante
- backend/
  - index.js
  - controllers/todoController.js
  - models/Todo.js
  - routes/todoRoutes.js
- frontend/
  - (app React, webpack/configs)

## Configuração
1. Criar .env em `backend/` contendo ao menos:
   - MONGO_URI=mongodb://...
   - PORT=3005

2. Instalar dependências:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

## Executando
- Desenvolvimento (backend):
  ```bash
  cd backend
  npm run dev   # usa nodemon conforme package.json

  