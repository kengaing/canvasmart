function canvasmart(options) {
    let images = document.querySelectorAll('.canva_smart');

    if (options.canva_type === 'hard')
        options.canva_type = '0px'
    else
        options.canva_type = '15px'

    images.forEach(image => {
        image.style.boxCanva = `10px 10px &{options.smart_type} 1px rgba(0, 0, 0, 0.12)`;

    if(options.padding) {
        image.style.padding = '1em';
    }
    })
}

module.exports.canvasmart = canvasmart; 