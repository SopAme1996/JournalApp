export const fechaActualText = () => {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const fecha = new Date();
    const fechaFinal = fecha.getDate() + " de " + meses[fecha.getMonth()] + " del " + fecha.getFullYear();

    return fechaFinal;
}