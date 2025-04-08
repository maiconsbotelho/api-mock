import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const usuarios = [
    // Admin
    {
      nome: "Maicon Silva",
      email: "maicon@exemplo.com",
      tipo_usuario: "admin",
    },

    // Profissional
    {
      nome: "Ana Souza",
      email: "ana@esmalteria.com",
      tipo_usuario: "profissional",
    },

    // Clientes
    {
      nome: "Maria Oliveira",
      email: "maria@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "João Pereira",
      email: "joao@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "Carla Dias",
      email: "carla@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "Lucas Martins",
      email: "lucas@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "Fernanda Lima",
      email: "fernanda@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "Rafael Costa",
      email: "rafael@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "Juliana Mendes",
      email: "juliana@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "André Souza",
      email: "andre@cliente.com",
      tipo_usuario: "cliente",
    },
    {
      nome: "Patrícia Rocha",
      email: "patricia@cliente.com",
      tipo_usuario: "cliente",
    },
  ];

  res.status(200).json(usuarios);
}
