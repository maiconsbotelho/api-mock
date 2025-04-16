import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const agendamentos = [
    {
      id: 1,
      cliente: "Maria Oliveira",
      profissional: "Ana Souza",
      servico: "Manicure básica",
      data: "2025-04-20",
      hora: "09:00",
      duracao: 30,
    },
    {
      id: 2,
      cliente: "João Pereira",
      profissional: "Ana Souza",
      servico: "Alongamento de unha",
      data: "2025-04-20",
      hora: "09:30",
      duracao: 90,
    },
    {
      id: 3,
      cliente: "Carla Dias",
      profissional: "Ana Souza",
      servico: "Spa dos Pés",
      data: "2025-04-20",
      hora: "11:00",
      duracao: 120,
    },
    {
      id: 4,
      cliente: "Lucas Martins",
      profissional: "Ana Souza",
      servico: "Pedicure simples",
      data: "2025-04-18",
      hora: "10:00",
      duracao: 30,
    },
    {
      id: 5,
      cliente: "Fernanda Lima",
      profissional: "Ana Souza",
      servico: "Manicure e Pedicure",
      data: "2025-04-18",
      hora: "10:30",
      duracao: 60,
    },
    {
      id: 6,
      cliente: "Ricardo Almeida",
      profissional: "Ana Souza",
      servico: "Unhas de Gel",
      data: "2025-04-21",
      hora: "11:30",
      duracao: 90,
    },
    {
      id: 7,
      cliente: "Juliana Costa",
      profissional: "Ana Souza",
      servico: "Manicure e Pedicure",
      data: "2025-04-21",
      hora: "09:00",
      duracao: 60,
    },
    {
      id: 8,
      cliente: "Carlos Silva",
      profissional: "Ana Souza",
      servico: "Alongamento de unha",
      data: "2025-04-16",
      hora: "10:00",
      duracao: 90,
    },
    {
      id: 9,
      cliente: "Ana Paula",
      profissional: "Ana Souza",
      servico: "Manicure e Pedicure",
      data: "2025-04-17",
      hora: "11:30",
      duracao: 60,
    },
    {
      id: 10,
      cliente: "Marcos Santos",
      profissional: "Ana Souza",
      servico: "Spa dos Pés",
      data: "2025-04-17",
      hora: "13:00",
      duracao: 120,
    },
  ];

  res.status(200).json(agendamentos);
}
