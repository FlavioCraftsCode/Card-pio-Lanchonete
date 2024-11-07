// Dados dos itens do menu
const items = {
    item1: {
        title: "Hambúrguer Clássico",
        description: "Um delicioso hambúrguer com carne suculenta, queijo cheddar, alface e tomate.",
        price: "R$ 25,00"
    },
    item2: {
        title: "Cheeseburger",
        description: "Hambúrguer com carne 100% bovina, queijo cheddar derretido e molho especial.",
        price: "R$ 28,00"
    },
    item3: {
        title: "Batatas Fritas",
        description: "Porção generosa de batatas fritas crocantes, servidas com ketchup e maionese.",
        price: "R$ 12,00"
    }
};

// Modal
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');

// Mostrar o modal com informações do item
document.querySelectorAll('.item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const itemId = e.target.getAttribute('data-item');
        const itemData = items[itemId];

        modalTitle.textContent = itemData.title;
        modalDescription.textContent = itemData.description;
        modalPrice.textContent = `Preço: ${itemData.price}`;

        modal.style.display = 'block';
    });
});

// Fechar o modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
