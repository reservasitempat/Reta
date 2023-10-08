// Fungsi untuk mengambil data dari JSON
async function fetchDexinData() {
    try {
        const response = await fetch('json/dexin.json'); // Mengambil data dari dexin.json
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Gagal mengambil data dexin:', error);
    }
}

// Fungsi untuk menampilkan data dexin di halaman HTML
async function displayDexinData() {
    const dexinContainer = document.getElementById('dexin-container');
    const dexinData = await fetchDexinData();

    if (dexinData) {
        dexinData.forEach(dexin => {
            const dexinItem = document.createElement('div');
            dexinItem.classList.add('box');
            dexinItem.innerHTML = `
                <h1 class="title is-4">${dexin.judul}</h1>
                <p>${dexin.deskripsi}</p>
            `;
            dexinContainer.appendChild(dexinItem);
        });
    }
}

// Panggil fungsi untuk menampilkan data dexin
displayDexinData();
