const db = require('../../../config/DBConnetion')

module.exports = {

    // Module Provinsi
    async createProvinsi(data){
        const [result] = await db.query(
        'INSERT INTO provinsi (nama_provinsi) VALUES (?)',
        [data.nama_provinsi]
        );
        return result;
    },
    async updateProvinsi(data){
        const [rows] = await db.execute(
            'UPDATE provinsi SET nama_provinsi = ? WHERE id_provinsi = ?',
            [data.nama_provinsi, data.id_provinsi]
        );
        return rows.affectedRows; 
    },
    async searchProvinsi(){

    },

    // Module kabupaten
    async createKabupaten(){
        const [result] = await db.query(
        'INSERT INTO kabupaten (id_provinsi, nama_kabupaten) VALUES (?, ?)',
        [data.id_provinsi, data.nama_kabupaten]
        );
        return result;
    },
    async updateKabupaten(){
        const [rows] = await db.execute(
            'UPDATE kabupaten SET id_provinsi = ?, nama_kabupaten = ? WHERE id_kabupaten = ?',
            [data.id_provinsi, data.nama_kabupaten]
        );
        return rows.affectedRows; 
    },
    async searchKabupaten(){

    },

    // Module kecamatan
    async createKecamatan(){
        const [result] = await db.query(
        'INSERT INTO kecamatan (id_kabupaten, nama_kecamatan) VALUES (?, ?)',
        [data.id_kabupaten, data.nama_kecamatan]
        );
        return result;
    },
    async updateKecamatan(){
        const [rows] = await db.execute(
            'UPDATE kabupaten SET id_kabupaten = ?, nama_kecamatan = ? WHERE id_kecamatan = ?',
            [data.id_kabupaten, data.nama_kecamatan]
        );
        return rows.affectedRows; 
    },
    async searchKecamatan(){

    },

    // Module kelurahan
    async createKelurahan(){
        const [result] = await db.query(
        'INSERT INTO kelurahan (id_kecamatan, nama_kelurahan, kode_pos) VALUES (?, ?, ?)',
        [data.id_kecamatan, data.nama_kelurahan, data.kode_pos]
        );
        return result;
    },
    async updateKelurahan(){
        const [rows] = await db.execute(
            'UPDATE kabupaten SET id_kecamatan = ?, nama_kelurahan = ? WHERE id_kelurahan = ?',
            [data.id_kecamatan, data.nama_kelurahan]
        );
        return rows.affectedRows; 
    },
    async searchKelurahan(){

    }
}