

 jQuery.validator.addMethod('telefone', function (value, element) {
    // value = value.replace("(", "");
    // value = value.replace(")", "");
    // value = value.replace("-", "");
    //value = value.replace(" ", "").trim();
    if (value == '0000000000') {
        return (this.optional(element) || false);
    } else if (value == '00000000000') {
        return (this.optional(element) || false);
    }
    if (["00", "01", "02", "03", , "04", , "05", , "06", , "07", , "08", "09", "10"].indexOf(value.substring(0, 2)) != -1) {
        return (this.optional(element) || false);
    }
    if (value.length < 13 || value.length > 14) {
        return (this.optional(element) || false);
    }
    if (["1", "2", "3", "4","5"].indexOf(value.substring(2, 3)) == -1) {
        return (this.optional(element) || false);
    }
    return (this.optional(element) || true);
}, 'Por favor informe um telefone válido'); 