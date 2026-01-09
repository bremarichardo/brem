// Data pertemuan dan link yang akan ditambahkan
const meetings = [
    { number: 1, title: "Pengantar Sistem Informasi Manajemen (SIM)", link: "https://richioxbrems.web.id/1.html" },
    { number: 2, title: "Konsep Dasar Sistem Informasi Manajemen (SIM)", link: "https://richioxbrems.web.id/2.html" },
    { number: 3, title: "Komponen dan Evolusi Sistem Informasi Manajemen (SIM)", link: "https://richioxbrems.web.id/3.html" },
    { number: 4, title: "Pemanfaatan Komputer dalam Berbagai Bidang", link: "https://richioxbrems.web.id/4.html" },
    { number: 5, title: "Profesi di Bidang Teknologi Informasi", link: "https://richioxbrems.web.id/5.html" },
    { number: 6, title: "Sistem Informasi, Organisasi, dan Strategi", link: "https://richioxbrems.web.id/6.html" },
    { number: 7, title: "Dimensi Sistem Informasi dan Aset Komplementer Sistem", link: "https://richioxbrems.web.id/7.html" },
    { number: 8, title: "Isu Sosial dan Etika dalam Sistem Informasi", link: "https://richioxbrems.web.id/8.html" },
    { number: 9, title: "Sistem Informasi Menjadi Tantangan Manajemen", link: "https://richioxbrems.web.id/9.html" },
    { number: 10, title: "Sistem Informasi SDM dan Manufaktur", link: "https://richioxbrems.web.id/10.html" },
    { number: 11, title: "Sistem Informasi, Pengambilan Keputusan, dan Keunggulan Kompetitif", link: "https://richioxbrems.web.id/11.html" },
    { number: 12, title: "Sistem Manajemen Basis Data (DBMS)", link: "https://richioxbrems.web.id/12.html" },
    { number: 13, title: "Evaluasi Sistem Informasi", link: "https://richioxbrems.web.id/13.html" },
    { number: 14, title: "Sistem Penunjang Keputusan (DSS)", link: "https://richioxbrems.web.id/14.html" }
];

// Fungsi untuk mengisi data ke dalam tabel
function populateTable() {
    const tableBody = document.getElementById('tableBody');
    meetings.forEach(meeting => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.textContent = meeting.number;
        const link = document.createElement('a');
        link.href = meeting.link;
        link.textContent = meeting.title;
        cell2.appendChild(link);
        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row);
    });
}

// Memanggil fungsi populateTable saat halaman dimuat
populateTable();
