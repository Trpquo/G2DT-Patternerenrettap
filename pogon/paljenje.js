$(document).ready(function () {
    var logoCanvas = $('<canvas></canvas>').attr('id', 'logoCanvas').attr('width', 700).attr('height', 100),
            logoCont = logoCanvas.get(0).getContext('2d');

    var logoImage = new Image();
    logoImage.src = "data:image/png;base64,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";
            
    logoCont.drawImage(logoImage, 0, 0, 700, 100, 0, 0, 700, 100);
    logoCont.globalCompositeOperation = 'source-in';
    logoCont.fillStyle = strokeColor;
    logoCont.fillRect(0, 0, 700, 100);

    $('#logo').hide();
    $('#kontrole').append(logoImage);
});

