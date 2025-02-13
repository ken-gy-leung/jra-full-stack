// return current date and time as a string in the format 'yyyy-mm-ddThh:mm'
const getCurrentDateTime = () => new Date().toISOString().slice(0, 16)

export { getCurrentDateTime }