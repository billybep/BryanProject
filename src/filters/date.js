// Fungsi untuk filter date ke custom format date
export default (value) => {
    const date = new Date(value)
    return date.toLocaleString(['in-ID'], { month: 'long', 
                                            day: '2-digit', 
                                            year: 'numeric'})
}