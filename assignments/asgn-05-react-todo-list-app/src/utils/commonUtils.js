// return current date and time as a string in the format 'yyyy-mm-ddThh:mm'
const getCurrentDateTime = () => {
    const now = new Date()
    // Adjust for timezone
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    // Extract yyyy-mm-ddThh:mm
    return now.toISOString().slice(0, 16)
}

export { getCurrentDateTime }