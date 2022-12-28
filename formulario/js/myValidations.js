/* minha validações usando o jquery validator*/
$(function(){
   $("#formulario").validate({
        rules:{
            nome:{
                required: true,
                
            },
            sobrenome:{
                required: true,
                
            },
            email:{
                required: true,
                email:true
            },
            telefone:{
                required: true,
                telefone: true,
                
            },
            data:{
                required: true,
                date:true
            },
            bairro:{
                required: false,
                
            },
            permission:{
                required:true,
            }
        },

        submitHandler: function(form){
            form.submit(alert('formulario enviado'));
                
        }
   })
   
});
        
