// proposal.js

// Fungsi untuk mengambil data dari JSON
async function fetchProposalData() {
    try {
        const response = await fetch('proposal.json'); // Mengambil data dari proposal.json
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Gagal mengambil data proposal:', error);
    }
}

// Fungsi untuk menampilkan data proposal di halaman HTML
async function displayProposalData() {
    const proposalContainer = document.getElementById('proposal-container');
    const proposalData = await fetchProposalData();

    if (proposalData) {
        proposalData.forEach(proposal => {
            const proposalItem = document.createElement('div');
            proposalItem.classList.add('box');
            proposalItem.innerHTML = `
                <h2 class="title is-4">${proposal.judul}</h2>
                <p>${proposal.deskripsi}</p>
            `;
            proposalContainer.appendChild(proposalItem);
        });
    }
}

// Panggil fungsi untuk menampilkan data proposal
displayProposalData();
