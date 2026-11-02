import { Service } from "../type/types";

export const serviceDataservice : Service[] = [
    {
        id: "block-plan",
        title: "Blok Plan Estimate (Cost/M²)",
        phase: "Pre-Contract",
        description:
          "Penyusunan estimasi awal biaya pembangunan berdasarkan luas bangunan dan biaya konstruksi per meter persegi (m²), sebagai dasar dalam menentukan gambaran kebutuhan anggaran proyek.",
        points: [
          "Analisis luas dan fungsi bangunan",
          "Menentukan estimasi biaya konstruksi per m²",
          "Menghitung estimasi total biaya pembangunan",
          "Menyesuaikan estimasi dengan lokasi, spesifikasi, dan tingkat kompleksitas proyek",
          "Menyusun laporan estimasi biaya sebagai dasar perencanaan anggaran",
        ],
    },
    {
        id: "elemental-cost",
        title: "Elemental Cost Estimate",
        phase: "Pre-Contract",
        description:
            "Penyusunan estimasi biaya pembangunan berdasarkan elemen-elemen utama bangunan untuk memberikan gambaran biaya yang lebih terstruktur dan terperinci pada tahap perencanaan proyek.",
        points: [
          "Mengidentifikasi elemen-elemen utama bangunan",
          "Menghitung estimasi biaya berdasarkan setiap elemen pekerjaan",
          "Menganalisis luas, volume, dan spesifikasi pekerjaan",
          "Menyusun rincian biaya untuk setiap elemen bangunan",
          "Menyusun laporan estimasi biaya sebagai dasar perencanaan dan pengendalian anggaran proyek",
        ],
    },
    {
        id: "dokumen-tender",
        title: "Dokumen Administrasi Tender / Kontrak",
        phase: "Pre-Contract",
        description:
          "Penyusunan dan pengelolaan dokumen administrasi tender dan kontrak konstruksi untuk mendukung proses pengadaan, pelaksanaan, serta pengendalian administrasi proyek secara tertib, lengkap, dan terstruktur.",
        points: [
          "Penyusunan dokumen administrasi tender",
          "Penyusunan dan pemeriksaan dokumen kontrak",
          "Penyusunan Bill of Quantity (BOQ)",
          "Pemeriksaan kelengkapan dan kesesuaian dokumen tender",
          "Penyusunan dokumen pendukung proses tender",
          "Administrasi perubahan dan pelaksanaan kontrak",
          "Pengelolaan serta dokumentasi administrasi proyek",
        ],
    },
    {
        id: "cop",
        title: "Mempersiapkan Sertifikat Pembayaran ",
        phase: "Post-Contract",
        description:
          "Penyusunan dan pemeriksaan dokumen sertifikat pembayaran pekerjaan konstruksi sebagai dasar pengajuan dan proses pembayaran kepada kontraktor berdasarkan progres pekerjaan yang telah dilaksanakan.",
        points: [
          "Memeriksa progres pekerjaan berdasarkan hasil pengukuran",
          "Menghitung nilai pekerjaan yang telah dilaksanakan",
          "Memeriksa kesesuaian pekerjaan dengan kontrak dan BOQ",
          "Menghitung nilai pembayaran berdasarkan progres pekerjaan",
          "Memperhitungkan pekerjaan tambah/kurang, retensi, dan pembayaran sebelumnya",
          "Menyusun dan mempersiapkan sertifikat pembayaran untuk proses pembayaran",
        ],
    },
    {
        id: "vo",
        title: "Mempersiapkan Variatio Order ",
        phase: "Post-Contract",
        description:
          "Penyusunan dan pengelolaan dokumen Variation Order (VO) untuk mengadministrasikan perubahan pekerjaan, baik berupa penambahan, pengurangan, maupun perubahan lingkup pekerjaan selama pelaksanaan proyek konstruksi.",
        points: [
          "Mengidentifikasi perubahan lingkup pekerjaan",
          "Mengukur dan menghitung volume pekerjaan yang mengalami perubahan",
          "Menganalisis dampak perubahan terhadap biaya kontrak",
          "Menyusun perhitungan harga dan nilai Variation Order",
          "Memeriksa kesesuaian perubahan dengan dokumen kontrak",
          "Menyiapkan dokumen dan administrasi Variation Order",
          "Mendokumentasikan perubahan pekerjaan sebagai dasar penyesuaian nilai kontrak",
        ],
    },
    {
        id: "final-account",
        title: "Mempersiapkan Final Account ",
        phase: "Post-Contract",
        description:
          "Penyusunan dan pemeriksaan Final Account untuk menetapkan nilai akhir kontrak berdasarkan seluruh pekerjaan yang telah dilaksanakan, termasuk perubahan pekerjaan, pekerjaan tambah/kurang, dan penyesuaian lainnya selama pelaksanaan proyek.",
        points: [
          "Memeriksa dan mengukur pekerjaan yang telah diselesaikan",
          "Melakukan rekonsiliasi volume dan nilai pekerjaan",
          "Memeriksa seluruh Variation Order (VO) yang telah disetujui",
          "Menghitung pekerjaan tambah dan kurang",
          "Memeriksa pembayaran yang telah dilakukan selama proyek",
          "Menghitung nilai akhir pekerjaan dan kontrak",
          "Menyusun dokumen Final Account sebagai dasar penyelesaian administrasi dan pembayaran akhir",
        ],
    },
]