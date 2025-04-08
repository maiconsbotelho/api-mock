import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const servicos = [
    {
      nome: "Manicure Simples",
      descricao: "Remoção de cutículas e esmaltação com esmalte comum.",
      valor: 30.0,
      duracao: 30,
    },
    {
      nome: "Pedicure Simples",
      descricao: "Cuidados básicos nos pés e esmaltação.",
      valor: 35.0,
      duracao: 30,
    },
    {
      nome: "Manicure + Pedicure",
      descricao: "Pacote com mãos e pés completos.",
      valor: 60.0,
      duracao: 60,
    },
    {
      nome: "Spa dos Pés",
      descricao: "Esfoliação, hidratação e massagem relaxante nos pés.",
      valor: 70.0,
      duracao: 60,
    },
    {
      nome: "Unha em Gel",
      descricao: "Aplicação de unhas em gel com acabamento natural.",
      valor: 120.0,
      duracao: 90,
    },
    {
      nome: "Alongamento de Fibra",
      descricao: "Alongamento com fibra de vidro, resistente e leve.",
      valor: 130.0,
      duracao: 120,
    },
    {
      nome: "Blindagem",
      descricao: "Proteção extra para as unhas naturais.",
      valor: 50.0,
      duracao: 45,
    },
    {
      nome: "Remoção de Gel/Fibra",
      descricao: "Remoção cuidadosa sem agredir as unhas.",
      valor: 40.0,
      duracao: 30,
    },
    {
      nome: "Design de Unhas",
      descricao: "Decoração personalizada com pedras, adesivos ou desenhos.",
      valor: 25.0,
      duracao: 20,
    },
    {
      nome: "Esmaltação em Gel",
      descricao: "Esmalte em gel com maior durabilidade.",
      valor: 45.0,
      duracao: 40,
    },
  ];

  res.status(200).json(servicos);
}
