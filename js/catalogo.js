const produtos = [
    {
        nome: "Kit de troca óleo e filtro",
        imagem: "img/trocaoleo.png",
        descricao: "Óleo sintético de alta performance acompanhado do filtro original para proteção e durabilidade do motor",
        preco: "R$ 180,00"
    },
    {
        nome: "Pastilhas de freio dianteiras",
        imagem: "img/pastilhas.png",
        descricao: "Pastilhas de freio de alta qualidade para garantir a segurança do seu veículo",
        preco: "R$ 145,00"
    },
    {
        nome: "Bateria Automotiva 60Ah",
        imagem: "img/bateria.png",
        descricao: "Bateria de alta capacidade para garantir o funcionamento ideal do seu veículo",
        preco: "R$ 650,00"
    },
    {
        nome: "Alinhamento 3D e Balanceamento",
        imagem: "img/alinhamento.png",
        descricao: "Serviço completo de alinhamento 3D e balanceamento para garantir o desempenho ideal do seu veículo",
        preco: "R$ 300,00"
    },
    {
        nome: "Limpeza de Bicos e Injeção Eletrônica",
        imagem: "img/limpeza.png",
        descricao: "Serviço completo de limpeza de bicos e injeção eletrônica para garantir o desempenho ideal do seu veículo",
        preco: "R$ 250,00"
    },
    {
        nome: "Revisão Completa de Suspensão",
        imagem: "img/suspensao.png",
        descricao: "Serviço completo de revisão de suspensão para garantir o desempenho ideal do seu veículo",
        preco: "R$ 350,00"
    }
];

const containerProdutos = document.getElementById("lista-produtos");

produtos.forEach((produto) => {
    containerProdutos.innerHTML += `
        <section class="produtos">
            <article>
                <h3>${produto.nome}</h3>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p>${produto.descricao} <strong>(${produto.preco})</strong>.</p>
            </article>
        </section>
    `;
});