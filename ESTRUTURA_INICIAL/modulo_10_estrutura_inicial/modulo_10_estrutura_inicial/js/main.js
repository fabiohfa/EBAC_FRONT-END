$(document).ready(function () {
    $("#carousel-imagens").slick({
      autoplay: true,
    });

    $(".menu-hamburguer").click(function () {
      $("nav").slideToggle();
    });

    $("#telefone").mask("(00) 0000-0000");

    $('form').validate({
      rules:{
        nome: {
          required: true,
          minlength: 3
        },
        email:{
          required: true,
          email: true
        },
        telefone:{
          required: true
        }
      },
      menssages:{
        nome: 'Por favor, preencha o campo nome'
      },
      submitHandler: function(form){
        console.log(form);
      },
      invalidHandler: function(evento, validator){
        let camposIncorretos = validator.numberOfInvalids();
        if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
      }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeículo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeículo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
  })
})