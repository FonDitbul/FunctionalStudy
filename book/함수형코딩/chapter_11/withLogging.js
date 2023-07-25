function tryCatch(f, errorHandler) {
    try {
        f()
    } catch(error) {
        errorHandler(error)
    }
}

tryCatch(sendEmail, logToSnapErros)