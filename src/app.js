import express from 'express';
import cors from "cors';
import marketRoutes from './routes/market.routes.js'

const app=express()
// En tu API (Node.js/Express)
app.use(cors({
  origin: '*', // O especifica tu dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// Middleware para procesar JSON
app.use(express.json());

// Middleware para procesar datos de formularios (opcional, si usas x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.use(marketRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message: "Favor realizar pruebas en los siguientes endpoints:",
    endpoints: [
      "https://apimarket-production-a72b.up.railway.app/usuarios",
      "https://apimarket-production-a72b.up.railway.app/productos"
    ]
  });
});

export default app;
