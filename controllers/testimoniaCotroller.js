import { Testimonial } from "../models/testimoniales.js";


const guardartestimonial = async (req, res) => {
    //Validar 

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'})
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'})
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El Mensaje esta vacio'})
    }

    if(errores.length>0) {

        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        
        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })        
    } else {
        // Almacenarlo en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }


    }
}

export {
    guardartestimonial
}